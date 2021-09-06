<script>
  import { auth } from '../auth'
</script>

{#if $auth.loginStatus}
  Logged In
{:else}
  NOT Logged In
{/if}
