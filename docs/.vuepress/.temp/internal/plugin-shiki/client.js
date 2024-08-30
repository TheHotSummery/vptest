
import { useCopyCode } from 'F:/vsproject/vue-press/cd-blog/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.90_typescript@5.5.4_vue@3.4.38_typescript@5.5.4__vuep_woujngkdzlzm5dhkbosk6fndie/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'F:/vsproject/vue-press/cd-blog/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.90_typescript@5.5.4_vue@3.4.38_typescript@5.5.4__vuep_woujngkdzlzm5dhkbosk6fndie/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
