<script>
  import { link } from 'svelte-navigator'
  import SaveDirectory from '../Buttons/SaveDirectory.svelte'
  import Logout from '../Buttons/Logout.svelte'
</script>

<scipt />

<nav class="bp3-navbar">
  <div class="bp3-navbar-group bp3-align-left">
    <a href="/login" use:link>
      <span class="bp3-button-text">Admin</span>
    </a>
  </div>

  <div class="bp3-navbar-group bp3-align-right">
    <SaveDirectory />
    <Logout />
  </div>
</nav>
