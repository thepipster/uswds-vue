export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/config/", { loader: () => import(/* webpackChunkName: "config_index.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/config/index.html.js"), meta: {"title":"Config"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Introduction"} }],
  ["/guide/components/accordion.html", { loader: () => import(/* webpackChunkName: "guide_components_accordion.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/accordion.html.js"), meta: {"title":"Accordion"} }],
  ["/guide/components/alert.html", { loader: () => import(/* webpackChunkName: "guide_components_alert.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/alert.html.js"), meta: {"title":"Alert"} }],
  ["/guide/components/badge.html", { loader: () => import(/* webpackChunkName: "guide_components_badge.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/badge.html.js"), meta: {"title":"Badges & Pills"} }],
  ["/guide/components/button.html", { loader: () => import(/* webpackChunkName: "guide_components_button.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/button.html.js"), meta: {"title":"Button"} }],
  ["/guide/components/card.html", { loader: () => import(/* webpackChunkName: "guide_components_card.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/card.html.js"), meta: {"title":"Card"} }],
  ["/guide/components/header.html", { loader: () => import(/* webpackChunkName: "guide_components_header.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/header.html.js"), meta: {"title":"Header"} }],
  ["/guide/components/image.html", { loader: () => import(/* webpackChunkName: "guide_components_image.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/image.html.js"), meta: {"title":"Image"} }],
  ["/guide/components/lists.html", { loader: () => import(/* webpackChunkName: "guide_components_lists.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/lists.html.js"), meta: {"title":"Lists"} }],
  ["/guide/components/modal.html", { loader: () => import(/* webpackChunkName: "guide_components_modal.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/modal.html.js"), meta: {"title":"Modal"} }],
  ["/guide/components/progress.html", { loader: () => import(/* webpackChunkName: "guide_components_progress.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/progress.html.js"), meta: {"title":"Progress"} }],
  ["/guide/components/step-indicator.html", { loader: () => import(/* webpackChunkName: "guide_components_step-indicator.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/step-indicator.html.js"), meta: {"title":"Step Indicator"} }],
  ["/guide/components/table.html", { loader: () => import(/* webpackChunkName: "guide_components_table.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/table.html.js"), meta: {"title":"Table"} }],
  ["/guide/components/tabs.html", { loader: () => import(/* webpackChunkName: "guide_components_tabs.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/tabs.html.js"), meta: {"title":"Tabs"} }],
  ["/guide/components/tag.html", { loader: () => import(/* webpackChunkName: "guide_components_tag.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/components/tag.html.js"), meta: {"title":"Tags & Pills"} }],
  ["/guide/forms/form.html", { loader: () => import(/* webpackChunkName: "guide_forms_form.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form.html.js"), meta: {"title":"Forms Overview"} }],
  ["/guide/patterns/banner.html", { loader: () => import(/* webpackChunkName: "guide_patterns_banner.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/banner.html.js"), meta: {"title":"Header Navigation"} }],
  ["/guide/patterns/footer.html", { loader: () => import(/* webpackChunkName: "guide_patterns_footer.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/footer.html.js"), meta: {"title":"Official Footer"} }],
  ["/guide/patterns/form-builder.html", { loader: () => import(/* webpackChunkName: "guide_patterns_form-builder.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/form-builder.html.js"), meta: {"title":"Form Builder"} }],
  ["/guide/patterns/gov-banner.html", { loader: () => import(/* webpackChunkName: "guide_patterns_gov-banner.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/gov-banner.html.js"), meta: {"title":"Official Banner"} }],
  ["/guide/patterns/left-nav.html", { loader: () => import(/* webpackChunkName: "guide_patterns_left-nav.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/patterns/left-nav.html.js"), meta: {"title":"Side Navigation"} }],
  ["/guide/utils/breakpoints.html", { loader: () => import(/* webpackChunkName: "guide_utils_breakpoints.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/breakpoints.html.js"), meta: {"title":"Responsive Breakpoints"} }],
  ["/guide/utils/colors.html", { loader: () => import(/* webpackChunkName: "guide_utils_colors.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/colors.html.js"), meta: {"title":"Colors and Theming"} }],
  ["/guide/utils/display.html", { loader: () => import(/* webpackChunkName: "guide_utils_display.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/display.html.js"), meta: {"title":"Display property"} }],
  ["/guide/utils/layout.html", { loader: () => import(/* webpackChunkName: "guide_utils_layout.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/layout.html.js"), meta: {"title":"Layout"} }],
  ["/guide/utils/spacing.html", { loader: () => import(/* webpackChunkName: "guide_utils_spacing.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/spacing.html.js"), meta: {"title":"Spacing"} }],
  ["/guide/utils/theme-generator.html", { loader: () => import(/* webpackChunkName: "guide_utils_theme-generator.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/theme-generator.html.js"), meta: {"title":"Theme Generator"} }],
  ["/guide/utils/typography.html", { loader: () => import(/* webpackChunkName: "guide_utils_typography.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/typography.html.js"), meta: {"title":"Typography"} }],
  ["/guide/utils/validation.html", { loader: () => import(/* webpackChunkName: "guide_utils_validation.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/utils/validation.html.js"), meta: {"title":"Form Validation"} }],
  ["/guide/forms/form-inputs/form-boolean.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-boolean.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-boolean.html.js"), meta: {"title":"Boolean"} }],
  ["/guide/forms/form-inputs/form-checkbox.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-checkbox.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-checkbox.html.js"), meta: {"title":"Checkbox"} }],
  ["/guide/forms/form-inputs/form-combobox.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-combobox.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-combobox.html.js"), meta: {"title":"Select (dropdown)"} }],
  ["/guide/forms/form-inputs/form-date-picker.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-date-picker.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-date-picker.html.js"), meta: {"title":"Date Picker"} }],
  ["/guide/forms/form-inputs/form-date-range.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-date-range.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-date-range.html.js"), meta: {"title":"Date Range Picker"} }],
  ["/guide/forms/form-inputs/form-date.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-date.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-date.html.js"), meta: {"title":"Date Input"} }],
  ["/guide/forms/form-inputs/form-fileinput.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-fileinput.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-fileinput.html.js"), meta: {"title":"File Input"} }],
  ["/guide/forms/form-inputs/form-input.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-input.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-input.html.js"), meta: {"title":"Text Input"} }],
  ["/guide/forms/form-inputs/form-radio.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-radio.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-radio.html.js"), meta: {"title":"Radio"} }],
  ["/guide/forms/form-inputs/form-slider.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-slider.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-slider.html.js"), meta: {"title":"Range Slider"} }],
  ["/guide/forms/form-inputs/form-time.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_form-time.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/form-time.html.js"), meta: {"title":"Time Picker"} }],
  ["/guide/forms/form-inputs/masked-input.html", { loader: () => import(/* webpackChunkName: "guide_forms_form-inputs_masked-input.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/guide/forms/form-inputs/masked-input.html.js"), meta: {"title":"Masked Input"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mike/Projects/SSA/uswds-vue/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
