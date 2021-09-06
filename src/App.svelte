<script>
  import { Router, Route } from 'svelte-navigator'
  import { CONSTANTS } from 'tourlou/CONSTANTS'

  import TwoColumn from './components/Layout/TwoColumn.svelte'

  import Login from './routes/Login.svelte'
  import SidebarLayout from './components/Sidemenu/_SidebarLayout.svelte'
  import MarkdownLayout from './components/Markdown/_MarkdownLayout.svelte'

  import Toast from './components/Toast/Toast.svelte'
  export let url = ''
</script>

<svelte:head>
  <title>:: FRANSES DOCS ::</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router {url}>
  <Route path="/login">
    <Login />
  </Route>

  <Route path="/*" primary={false}>
    <TwoColumn options={{ leftWidth: '300px' }}>
      <section slot="left" class="flex-grow">
        <SidebarLayout />
      </section>

      <section slot="right" class="flex-grow">
        <Route path="/">
          <MarkdownLayout />
        </Route>
        <Route path="/:id">
          <MarkdownLayout />
        </Route>
      </section>
    </TwoColumn>
  </Route>
</Router>

<Toast />

<style global lang="postcss">
  :global(body) {
    font-family: Roboto;
    font-size: 14px;
    @apply bg-gray-50;
  }
  :global(ul) {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  :global(footer) {
    @apply bg-teal-500;
  }
  :global(a) {
    @apply p-1;
  }

  :global(h5) {
    @apply text-lg mb-2 font-500 text-blue-700;
  }
</style>
