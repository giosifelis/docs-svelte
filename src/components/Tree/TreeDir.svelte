<script>
  import { fade } from 'svelte/transition'
  import { Icon } from 'tourlou/Icons'
  import { link } from 'svelte-navigator'

  import url from '../../url'
  import { parseUrlParams } from 'tourlou//helpers'
  // 	https://www.youtube.com/watch?v=-EwKiLZtnUs
  //https://svelte.dev/repl/20cc79cb4cc34c4b8e38879ab1f3b0c1?version=3.42.3
  export let tree
  export let parent

  export let depth = 0
  export let onClick = null // click handler
  export let addFolder = null // addNode handler
  export let addFile = null // addSubNode handler
  export let deleteNode = null // deleteNode handler

  $: urls = parseUrlParams($url.pathname)

  $: label = tree.label
  $: children = tree.children
  let { expanded = true } = tree
  $: expanded = true

  const clickHandler = () => {
    expanded = !expanded

    if (!children && !!onClick) {
      onClick(tree, depth, expanded)
    }
  }
  const addFolderHandler = () => {
    // used inside <svelte:self>
    addFolder(tree, parent)
  }
  const addFileHandler = () => {
    // used inside <svelte:self>
    addFile(tree, parent)
  }
  const deleteNodeHandler = () => {
    // used inside <svelte:self>
    deleteNode(tree, parent)
  }
</script>

<!-- <div class:expanded class:collapsed={!expanded}> -->
<div
  class="flex hover:bg-gray-200 rounded items-center  my-1
{tree.id == urls && tree.type === 'file' ? 'bg-gray-100' : ''}"
>
  {#if tree.type === 'dir'}
    <button class="bp3-button bp3-minimal" on:click={clickHandler}>
      <div class="fill-gray-900">
        {#if !expanded}
          <Icon name="chevron-right" />
        {:else}
          <Icon name="chevron-down" />
        {/if}
      </div>
    </button>
  {/if}

  <section
    class="flex flex-grow items-center"
    class:padding-left={tree.type === 'file'}
    class:ml-8={tree.type === 'file'}
  >
    {#if tree.type === 'file'}
      <!-- <div> -->
      <a use:link href="/{tree.id}" title="ID: {tree.id}">
        {#if tree.label.length > 0}
          {tree.label}
        {:else}
          <i class="text-gray-800">--- file name ---</i>
        {/if}
      </a>
    {:else}
      <span class="fill-gray-900 px-1">
        <Icon name="folder-close" />
      </span>
      <input type="text" class="folder-input" bind:value={tree.label} />
    {/if}
  </section>

  <section class="flex">
    <span class="fill-gray-900">
      {#if tree.type === 'dir'}
        {#if !tree.isRoot}
          <button
            in:fade={{ duration: 100 }}
            class="bp3-button"
            on:click={deleteNodeHandler}
            class:bp3-minimal={tree.children && tree.children.length === 0}
            class:bp3-disabled={tree.children && tree.children.length > 0}
            disabled={tree.children && tree.children.length > 0}
          >
            <Icon name="trash" />
          </button>
        {/if}

        <button class="bp3-button bp3-minimal" on:click={addFolderHandler}>
          <Icon name="folder-new" />
        </button>
        <button class="bp3-button bp3-minimal" on:click={addFileHandler}>
          <Icon name="document" />
        </button>
      {:else}
        <!-- if is a file -->
        <button class="bp3-button bp3-minimal" on:click={deleteNodeHandler}>
          <Icon name="trash" />
        </button>
      {/if}
    </span>
  </section>
</div>
<!-- </div> -->

{#if !!children && expanded}
  <ul>
    {#each children as child}
      <li class="pl-1">
        <svelte:self
          tree={child}
          {onClick}
          {addFolder}
          {addFile}
          {deleteNode}
          parent={tree}
        />
      </li>
    {/each}
  </ul>
{/if}

<style>
  .bp3-button {
    padding: 5px 5px;
  }
  .padding-left {
    padding-left: 50px;
  }

  .folder-input {
    border: 1px solid transparent;
    width: 100px;
    @apply rounded-sm px-1;
  }

  .folder-input:focus,
  .folder-input:hover {
    @apply border-blue-400;
  }
  .folder-input:hover {
    @apply border-gray-500;
  }
</style>
