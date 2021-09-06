<script>
  export let options = {}

  const DEFAULTOPTIONS = {
    leftWidth: '200px',
    leftHidden: false,
    rightHidden: false,
    bgColor: 'bg-white',
    ...options
  }
</script>

<section class="w-full">
  <article class="flex">
    <aside
      style="width:{DEFAULTOPTIONS.leftWidth};"
      class="flex h-screen  {DEFAULTOPTIONS.bgColor} border border-t-0 border-b-0 border-gray-400"
    >
      <slot name="left" />
    </aside>
    <main class="flex-1 h-screen overflow-y-scroll">
      <slot name="right" />
    </main>
  </article>
</section>
