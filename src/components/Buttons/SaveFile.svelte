<script>
  import { auth } from '../../auth'
  import { fileStore, updateDirectory, updateDocument } from '../../api/docs'
  import { getNodeFromTree, updateNodeInTree } from 'tourlou/helpers'

  import { Icon } from 'tourlou/Icons'
  export let iconClass = 'fill-primary'
  const handleSave = async () => {
    const { id, label, markDownContent } = $fileStore.selectedFile
    let dirFile = getNodeFromTree($fileStore.directory, 'id', id)
    dirFile = { ...dirFile, label }
    let updatedDocumentValue = { id, markDownContent }

    try {
      const { error, msg } = await updateDocument(updatedDocumentValue)
      await updateNodeInTree($fileStore.directory, id, dirFile)
      // if (error) return
      if (error) throw new Error(`SaveFile: ${msg}`)

      $fileStore.directory = $fileStore.directory
      updateDirectory($fileStore.directory)
    } catch (error) {
      console.log(`SaveFile: ${error}`)
    }
  }
</script>

<button
  title="Save File"
  type="button"
  class="bp3-button bp3-intent-primary bp3-minimal margin-right"
  class:bp3-disabled={!$auth.loginStatus}
  on:click={handleSave}
  disabled={!$auth.loginStatus}
>
  <Icon name="save" class={iconClass} />
  <span class="bp3-button-text">File</span>
</button>

<style>
  .margin-right {
    margin-right: 7px;
  }
</style>
