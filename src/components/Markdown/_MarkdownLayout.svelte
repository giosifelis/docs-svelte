<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-navigator'
  import { CONSTANTS } from 'tourlou/CONSTANTS'
  import { parseUrlParams } from 'tourlou/helpers'
  import { notifications } from '../../components/Toast/notifications'

  import url from '../../url'
  import { auth } from '../../auth'
  import { fileStore, selectedFile, readDirectory } from '../../api/docs'

  import LoggedUser from '../LoggedUser.svelte'

  import Content from '../Layout/Content.svelte'
  import Toolbar from './Toolbar.svelte'
  import MarkdownDisplay from './Editor/MarkdownDisplay.svelte'
  import MarkDownEditor from './Editor/MarkDownEditor.svelte'
  import HeaderLinks from './Editor/HeaderLinks.svelte'

  $: markDownContent = ''

  $: urls = parseUrlParams($url.pathname)[0]
  $: if (urls) reloadPage(urls)

  const reloadPage = async (fileId) => {
    if (!$fileStore.directory) await readDirectory(false)

    if (fileId != 'login') {
      const markDownResponse = await getMarkdownFromURL(fileId)

      await selectedFile.set($fileStore.directory, fileId, markDownResponse)

      markDownContent = $fileStore.selectedFile.markDownContent
    }
  }
  const getMarkdownFromURL = async (urlFileId) => {
    const fileUrl = `${CONSTANTS.rootURL}${
      CONSTANTS.rootDir
    }${urlFileId}.md?v=${Date.now()}`

    try {
      const response = await fetch(fileUrl)
      const content = await response.text()

      return content ? content : null
    } catch (error) {
      const msg = CONSTANTS.FILE_DOESNOT_EXIST
      notifications.warning(msg, CONSTANTS.delay.error)
      navigate('/', { replace: true })

      return CONSTANTS.HOME_MD_TEMPLATE
    }
  }

  const createToc = (html) => {
    return html
  }

  onMount(async () => {
    selectedFile.reset()

    const file = !urls ? CONSTANTS.root_HOME_FILE.id : urls
    const directory = !urls ? CONSTANTS.root_HOME_FILE : $fileStore.directory

    const markDownResponse = await getMarkdownFromURL(file)
    await selectedFile.set(directory, file, markDownResponse)
  })
</script>

{#if $fileStore.directory}
  <Content options={{ border: false }}>
    <div slot="toolbar" class="flex-grow">
      <Toolbar />
    </div>
    <div slot="body" class="flex-grow p-4">
      <section class="flex justify-centers">
        <LoggedUser class="flex-auto width-50 mr-1">
          <MarkDownEditor />
        </LoggedUser>
        <div class="{$auth.loginStatus ? 'flex-grow-0' : 'flex-grow'} width-50">
          <article class="flex">
            <div class="flex-grow">
              <MarkdownDisplay {markDownContent} />
            </div>
            {#if !$auth.loginStatus}
              <div class="sticky w-270px">
                <HeaderLinks />
              </div>
            {/if}
          </article>
        </div>
      </section>
    </div>
  </Content>
{/if}

<style>
  .width-50 {
    width: 50%;
  }
  .sticky {
    position: sticky;
    top: 16px;
    align-self: flex-start;
  }
</style>
