<script>
  import { onMount } from 'svelte'

  import { link } from 'svelte-navigator'
  import store from '../../store'
  import { auth } from '../../auth'
  import url from '../../url'
  import { parseUrlParams } from 'tourlou//helpers'

  import {
    fileStore,
    readDirectory,
    updateDirectory,
    createDocument,
    deleteDocument
  } from '../../api/docs'

  import TreeDir from '../Tree/TreeDir.svelte'
  import Tree from 'svelte-tree'

  let parent

  $: urls = parseUrlParams($url.pathname)
  $: tree = $fileStore.directory

  const randomId = () => Date.now() + Math.floor(Math.random() * 100000 + 1)
  const serverRequest = async () => await readDirectory()

  const clickHandler = (e, r, f, p) => {
    // console.log('clickHandler', tree)
  }
  const addNewNode = (node, type, fileId) => {
    const label = type === 'dir' ? 'Folder' : 'New Doc'

    let initNode = {
      label: `${label} ${Math.floor(Math.random() * 100 + 1)}`,
      id: fileId,
      type
    }
    node['children'] = node.children ? [...node.children, initNode] : [initNode]
    tree = tree
  }

  const addFolder = (node) => {
    const fileId = randomId()

    addNewNode(node, 'dir', fileId)
    updateDirectory($fileStore.directory)
  }

  const addFile = async (node) => {
    const fileId = randomId()

    const { error } = await createDocument(fileId)
    if (!error) {
      addNewNode(node, 'file', fileId)
      updateDirectory($fileStore.directory, false)
    }
  }

  const deleteNodeHandler = async (node, p) => {
    const deleteNodeFromTree = (notify = true) => {
      const filteredChildren = p.children.filter((f) => f.id != node.id)
      p.children = filteredChildren
      tree = tree
      updateDirectory($fileStore.directory, notify)
    }

    if (node.type === 'dir') {
      deleteNodeFromTree()
    } else {
      const { error } = await deleteDocument(node.id)
      if (!error) {
        deleteNodeFromTree(false)
      }
    }
  }

  onMount(async () => {
    await serverRequest()
    tree = $fileStore.directory
  })
</script>

{#if tree && tree.children}
  {#if $auth.loginStatus}
    <TreeDir
      {tree}
      onClick={clickHandler}
      {addFolder}
      {addFile}
      deleteNode={deleteNodeHandler}
      {parent}
    />
  {:else}
    <section class="p-2">
      <Tree tree={tree.children} let:node>
        <div
          class="subnode w-full
          {node.id == urls && node.type === 'file' ? 'bg-gray-100' : ''}"
        >
          {#if node.type === 'dir'}
            <span class="font-500 uppercase">
              {node.label}
            </span>
          {:else}
            <a use:link href="/{node.id}" title="ID: {node.id}">
              {node.label}
            </a>
          {/if}
        </div>
      </Tree>
    </section>
  {/if}
{/if}

<style>
  .subnode {
    margin: 1px 0;
    @apply p-1 hover:bg-gray-100 rounded p-2 w-full;
  }
</style>
