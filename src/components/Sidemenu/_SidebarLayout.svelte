<script>
  import Content from '../Layout/Content.svelte'
  import Toolbar from './Toolbar.svelte'
  import Directory from './Directory.svelte'
  import Footer from './Footer.svelte'
</script>

<Content>
  <div slot="toolbar" class="flex-grow">
    <Toolbar />
  </div>
  <div slot="body" class="flex-grow">
    <Directory />
  </div>
  <div slot="footer" class="flex-grow">
    <Footer />
  </div>
</Content>
