<script>
  import { link } from 'svelte-navigator'
  import { Icon } from 'tourlou/Icons'
  import RefreshDirectory from '../Buttons/RefreshDirectory.svelte'
</script>

<nav class="bp3-navbar">
  <div class="bp3-navbar-group bp3-align-left">
    <RefreshDirectory />
    <div class="bp3-input-group w-170px m-1">
      <span class="bp3-icon">
        <Icon name="search" />
      </span>
      <input type="text" class="bp3-input " placeholder="Search" />
      <button
        class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"
      />
    </div>
  </div>
  <div class="bp3-navbar-group bp3-align-right">
    <a href="/" use:link>
      <span class="bp3-button-text">Home</span>
    </a>
  </div>
</nav>
