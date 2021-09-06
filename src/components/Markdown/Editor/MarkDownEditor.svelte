<script>
  import { fileStore } from '../../../api/docs'
  import { resizeTextarea } from 'tourlou/helpers'

  $: rows = $fileStore.selectedFile
    ? resizeTextarea($fileStore.selectedFile.markDownContent) + 5
    : 3
</script>

<section class="markdown-editor bp3-card sticky">
  {#if $fileStore.selectedFile != null}
    <textarea
      {rows}
      class="w-full"
      bind:value={$fileStore.selectedFile.markDownContent}
    />
  {/if}
</section>

<style>
  .markdown-editor {
    font-family: monospace;
    /* height: calc(100vh - 82px); */
  }
  .sticky {
    position: sticky;
    top: 16px;
    align-self: flex-start;
  }
</style>
