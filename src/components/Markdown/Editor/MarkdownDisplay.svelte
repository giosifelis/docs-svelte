<script>
  import { fileStore } from '../../../api/docs'
  import MarkdownIt from 'markdown-it'
  import MarkdownItFootnote from 'markdown-it-footnote'
  import MarkdownItVideo from 'markdown-it-video'
  import MarkHTML from 'markdown-it-mark'
  import MarkItTaskLists from 'markdown-it-task-lists'
  import ItIns from 'markdown-it-ins'
  import Deflist from 'markdown-it-deflist'
  import Abbr from 'markdown-it-abbr'
  import MarkSub from 'markdown-it-sub'
  import MarkSup from 'markdown-it-sup'
  import MarkDetails from 'markdown-it-collapsible'
  import Anchor from 'markdown-it-anchor'

  // import Sanitaze from 'markdown-it-sanitizer'
  // import TOC from 'markdown-it-toc-and-anchor'

  let md = new MarkdownIt()
    // .use(Sanitaze)
    .use(Anchor)
    // .use(TOC, {
    //   // THIS IS WORKING GOOD
    //   tocCallback: function (tocMarkdown, tocArray, tocHtml) {
    //     // console.log('tocHTML', tocHtml)
    //     // console.log('tocMarkdown', tocMarkdown)
    //     console.log('tocArray', tocArray)
    //   }
    // })
    .use(MarkDetails)
    .use(MarkSup)
    .use(MarkSub)
    .use(MarkHTML)
    .use(MarkItTaskLists)
    .use(MarkdownItFootnote)
    .use(ItIns)
    .use(Abbr)
    .use(Deflist)
    .use(MarkdownItVideo, {
      // youtube: { width: 640, height: 390 }
      youtube: { width: 450, height: 300 }
    })
  export let markDownContent = ''
  $: htmlFromMarkdown = ''
  $: markDownId = ''

  $: if ($fileStore.selectedFile) {
    const { id } = $fileStore.selectedFile
    markDownContent = $fileStore.selectedFile.markDownContent

    const html = md.render(markDownContent)

    htmlFromMarkdown = html
    markDownId = id
  }
</script>

<article id={markDownId} class="markdown-body">
  {@html htmlFromMarkdown}
</article>

<style>
  /* markdown style is defined in src/css/Markdown/markdown.less */
</style>
