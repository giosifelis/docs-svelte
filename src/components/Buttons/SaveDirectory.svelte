<script>
  import { Icon } from 'tourlou/Icons'
  import { auth } from '../../auth'
  import { fileStore, updateDirectory } from '../../api/docs'

  import LoggedUser from '../LoggedUser.svelte'

  const handleSave = async () => await updateDirectory($fileStore.directory)
</script>

<LoggedUser>
  <button
    title="Save Directory"
    type="button"
    class="bp3-button bp3-minimal bp3-intent-primary"
    class:bp3-disabled={!$auth.loginStatus}
    on:click={handleSave}
    disabled={!$auth.loginStatus}
  >
    <Icon name="save" class="fill-primary" />

    <span class="bp3-button-text">Directory</span>
  </button>
</LoggedUser>
