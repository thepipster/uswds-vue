import "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/mike/Projects/SSA/platform-web/uswds-vue/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
