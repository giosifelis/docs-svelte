<script>
  export let options = {}

  const DEFAULTOPTIONS = {
    leftWidth: '200px',
    leftHidden: false,
    rightHidden: false,
    border: 'border border-t-0 border-r-0 border-l-0',
    ...options
  }
</script>

<article class="flex flex-col h-screen">
  <!-- <div class="flex p-1 {DEFAULTOPTIONS.border} h-10 items-center"> -->
  <div>
    <slot name="toolbar" />
  </div>
  <div class="flex-grow overflow-y-scroll px-2">
    <slot name="body" />
  </div>
  <div>
    <slot name="footer" />
  </div>
</article>
