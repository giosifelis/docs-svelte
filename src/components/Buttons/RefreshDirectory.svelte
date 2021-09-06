<script>
  import { Icon } from 'tourlou/Icons'
  import { readDirectory } from '../../api/docs'

  $: spin = 'false'

  const serverRequest = async () => {
    spin = 'spin'
    await readDirectory()
    spin = 'false'
  }
</script>

<button class="bp3-button bp3-minimal mr-1" on:click={serverRequest}>
  <Icon name="refresh" class="fill-gray-700 {spin}" />
</button>
