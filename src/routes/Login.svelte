<script>
  import { login } from '../auth'

  let loginFields = {
    userName: '',
    password: ''
  }

  const handleLogin = async (payload) => await login(payload)
</script>

<main class="flex flex-col apply min-h-screen ">
  <div class="grid place-items-center flex-grow h-100">
    <div>
      <div class="flex justify-between">
        <section class="bp3-card bp3-elevation-2">
          <h5>Login</h5>

          <form on:submit|preventDefault={() => handleLogin(loginFields)}>
            <article class="bp3-form-group bp3-inline">
              <label class="bp3-label w-16" for="form-group-input">
                Username
              </label>
              <div class="bp3-form-content">
                <div class="bp3-input-group">
                  <input
                    id="userName"
                    type="text"
                    class="bp3-input"
                    style="width: 200px;"
                    placeholder="username..."
                    bind:value={loginFields.userName}
                    dir="auto"
                  />
                </div>
              </div>
            </article>

            <article class="bp3-form-group bp3-inline">
              <label class="bp3-label w-16" for="form-group-input">
                Password
              </label>
              <div class="bp3-form-content">
                <div class="bp3-input-group">
                  <input
                    id="password"
                    type="password"
                    class="bp3-input"
                    style="width: 200px;"
                    placeholder="password..."
                    bind:value={loginFields.password}
                    dir="auto"
                  />
                </div>
              </div>
            </article>

            <article class="flex justify-end">
              <button type="submit" class="bp3-button bp3-intent-primary">
                <span class="bp3-button-text">Submit</span>
              </button>
            </article>
          </form>
        </section>
      </div>
    </div>
  </div>
</main>

<style>
</style>
