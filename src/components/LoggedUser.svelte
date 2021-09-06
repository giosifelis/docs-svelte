<script>
  import { fade } from 'svelte/transition'
  import { auth } from '../auth'
</script>

{#if $auth.loginStatus}
  <div in:fade={{ duration: 200 }} {...$$props}>
    <slot />
  </div>
{/if}
