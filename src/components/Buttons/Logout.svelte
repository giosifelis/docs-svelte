<script>
  import { auth, logout } from '../../auth'
  import { Icon } from 'tourlou/Icons'
  import LoggedUser from '../LoggedUser.svelte'

  const handleLogout = async () => logout()
</script>

<LoggedUser>
  <button
    title="logout"
    type="button"
    class="bp3-button bp3-minimal bp3-intent-primary p-1"
    class:bp3-dispabled={!$auth.loginStatus}
    on:click={handleLogout}
    disabled={!$auth.loginStatus}
  >
    <Icon name="log-out" class="fill-primary" />
    <!-- <span class="bp3-button-text">Logout</span> -->
  </button>
</LoggedUser>
