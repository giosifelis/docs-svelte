<script>
  import url from '../../../url'
  import { onMount } from 'svelte'
  import { fileStore } from '../../../api/docs'

  $: if ($fileStore.selectedFile) {
    const { id } = $fileStore.selectedFile
    const markDownElement = document.getElementById(id)
    createToc(markDownElement)
  }

  $: TOC = []

  const createToc = (el) => {
    TOC = []
    if (el) {
      const elNodes = el.children

      for (var i = 0; i < elNodes.length; i++) {
        const elem = elNodes[i]

        if (elem.hasAttribute('id')) {
          const link = {
            link: `#${elem.getAttribute('id')}`,
            text: elem.textContent
          }
          TOC = [...TOC, link]
        }
      }
    }

    // console.log('T', TOC)

    return el
  }

  onMount(() => {
    if ($fileStore.selectedFile) {
      const { id } = $fileStore.selectedFile
      const markDownElement = document.getElementById(id)
      createToc(markDownElement)
    }

    // console.log('TOC', TOC, $fileStore.selectedFile)
  })
</script>

<section>
  <h2 class="mb-1">Table Of Content</h2>
  <article class="TOC max-height overflow-auto p-2">
    <ul>
      {#each TOC as item}
        <li
          class="flex transition-all hover:bg-gray-100 rounded-sm border border-l-3 border-0 border-transparent
          {$url.hash === item.link
            ? 'border-l-3 border-green-500 bg-gray-100'
            : ''}
          "
          class:border={$url.hash === item.link}
        >
          <!-- class:border={$url.hash === item.link} -->
          <!-- href={item.link} -->
          <a
            href={item.link}
            class="transition-all w-full hover:text-green-800 {$url.hash ===
            item.link
              ? 'text-green-700'
              : ''}"
          >
            {item.text}
            <!-- {item.text} -->
          </a>
        </li>
      {/each}
    </ul>
  </article>
</section>

<style>
  .max-height {
    height: calc(100vh - 82px);
  }

  .TOC::-webkit-scrollbar {
    width: 3px;
  }
  .TOC::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }
  .TOC::-webkit-scrollbar-thumb {
    @apply bg-red-400;
  }
</style>
