<script>
  import { Icon } from 'tourlou/Icons'

  import LoggedUser from '../LoggedUser.svelte'
  import SaveFile from '../Buttons/SaveFile.svelte'

  import { fileStore } from '../../api/docs'
</script>

<LoggedUser>
  {#if $fileStore.selectedFile}
    <nav class="bp3-navbar">
      <div class="bp3-navbar-group bp3-align-left">
        <div class="bp3-form-group bp3-inline">
          <label class="bp3-label" for="form-group-input">File Name</label>
          <div class="bp3-form-content">
            <div class="bp3-input-group">
              <span class="bp3-icon pl-1">
                <Icon name="document" />
              </span>
              <input
                type="text"
                class="bp3-input mx-1"
                placeholder="file name"
                bind:value={$fileStore.selectedFile.label}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bp3-navbar-group bp3-align-right">
        <SaveFile />
      </div>
    </nav>
  {/if}
</LoggedUser>

<style>
  .bp3-navbar {
    background: transparent;
    box-shadow: none;
  }
</style>
