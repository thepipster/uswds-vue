import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-fffb8e28","/guide/",{"title":"Introduction"},["/guide/index.html","/guide/index.md"]],
  ["v-75b10249","/guide/forms/form.html",{"title":"Forms Overview"},["/guide/forms/form","/guide/forms/form.md"]],
  ["v-ea2abd84","/guide/components/accordion.html",{"title":"Accordion"},["/guide/components/accordion","/guide/components/accordion.md"]],
  ["v-63beafac","/guide/components/alert.html",{"title":"Alert"},["/guide/components/alert","/guide/components/alert.md"]],
  ["v-c7ca2b7a","/guide/components/badge.html",{"title":"Badges & Pills"},["/guide/components/badge","/guide/components/badge.md"]],
  ["v-02b3375a","/guide/components/button.html",{"title":"Button"},["/guide/components/button","/guide/components/button.md"]],
  ["v-65559efc","/guide/components/card.html",{"title":"Card"},["/guide/components/card","/guide/components/card.md"]],
  ["v-a5e77ade","/guide/components/footer.html",{"title":"Footer"},["/guide/components/footer","/guide/components/footer.md"]],
  ["v-9bb34642","/guide/components/header.html",{"title":"Header"},["/guide/components/header","/guide/components/header.md"]],
  ["v-05aeaf8b","/guide/components/image.html",{"title":"Image"},["/guide/components/image","/guide/components/image.md"]],
  ["v-b2396cde","/guide/components/lists.html",{"title":"Lists"},["/guide/components/lists","/guide/components/lists.md"]],
  ["v-058d6179","/guide/components/modal.html",{"title":"Modal"},["/guide/components/modal","/guide/components/modal.md"]],
  ["v-2d7f707f","/guide/components/progress.html",{"title":"Progress"},["/guide/components/progress","/guide/components/progress.md"]],
  ["v-7cadf4be","/guide/components/step-indicator.html",{"title":"Step Indicator"},["/guide/components/step-indicator","/guide/components/step-indicator.md"]],
  ["v-0201acf8","/guide/components/table.html",{"title":"Table"},["/guide/components/table","/guide/components/table.md"]],
  ["v-0915fb4e","/guide/components/tabs.html",{"title":"Tabs"},["/guide/components/tabs","/guide/components/tabs.md"]],
  ["v-dcf6e028","/guide/components/tag.html",{"title":"Tags & Pills"},["/guide/components/tag","/guide/components/tag.md"]],
  ["v-571e6501","/guide/utils/breakpoints.html",{"title":"Responsive Breakpoints"},["/guide/utils/breakpoints","/guide/utils/breakpoints.md"]],
  ["v-cf86dcc2","/guide/utils/colors.html",{"title":"Colors and Theming"},["/guide/utils/colors","/guide/utils/colors.md"]],
  ["v-dd81a03e","/guide/utils/display.html",{"title":"Display property"},["/guide/utils/display","/guide/utils/display.md"]],
  ["v-bfb84fb6","/guide/utils/layout.html",{"title":"Layout"},["/guide/utils/layout","/guide/utils/layout.md"]],
  ["v-88c92600","/guide/utils/spacing.html",{"title":"Spacing"},["/guide/utils/spacing","/guide/utils/spacing.md"]],
  ["v-509ff2f4","/guide/utils/theme-generator.html",{"title":"Theme Generator"},["/guide/utils/theme-generator","/guide/utils/theme-generator.md"]],
  ["v-b0cc6380","/guide/utils/typography.html",{"title":"Typography"},["/guide/utils/typography","/guide/utils/typography.md"]],
  ["v-4f990d94","/guide/utils/validation.html",{"title":"Form Validation"},["/guide/utils/validation","/guide/utils/validation.md"]],
  ["v-ea5ee226","/guide/patterns/banner.html",{"title":"Header Navigation"},["/guide/patterns/banner","/guide/patterns/banner.md"]],
  ["v-c6409b72","/guide/patterns/form-builder.html",{"title":"Form Builder"},["/guide/patterns/form-builder","/guide/patterns/form-builder.md"]],
  ["v-de1a27a4","/guide/patterns/gov-banner.html",{"title":"Official Banner"},["/guide/patterns/gov-banner","/guide/patterns/gov-banner.md"]],
  ["v-2ac8925c","/guide/patterns/left-nav.html",{"title":"Side Navigation"},["/guide/patterns/left-nav","/guide/patterns/left-nav.md"]],
  ["v-79783411","/guide/forms/form-inputs/form-boolean.html",{"title":"Boolean"},["/guide/forms/form-inputs/form-boolean","/guide/forms/form-inputs/form-boolean.md"]],
  ["v-cfb866d4","/guide/forms/form-inputs/form-checkbox.html",{"title":"Checkbox"},["/guide/forms/form-inputs/form-checkbox","/guide/forms/form-inputs/form-checkbox.md"]],
  ["v-5c2599c8","/guide/forms/form-inputs/form-combobox.html",{"title":"Select (dropdown)"},["/guide/forms/form-inputs/form-combobox","/guide/forms/form-inputs/form-combobox.md"]],
  ["v-9a65b868","/guide/forms/form-inputs/form-date-picker.html",{"title":"Date Picker"},["/guide/forms/form-inputs/form-date-picker","/guide/forms/form-inputs/form-date-picker.md"]],
  ["v-1d30a6db","/guide/forms/form-inputs/form-date-range.html",{"title":"Date Range Picker"},["/guide/forms/form-inputs/form-date-range","/guide/forms/form-inputs/form-date-range.md"]],
  ["v-cbfaf8ea","/guide/forms/form-inputs/form-date.html",{"title":"Date Input"},["/guide/forms/form-inputs/form-date","/guide/forms/form-inputs/form-date.md"]],
  ["v-afb71faa","/guide/forms/form-inputs/form-fileinput.html",{"title":"File Input"},["/guide/forms/form-inputs/form-fileinput","/guide/forms/form-inputs/form-fileinput.md"]],
  ["v-165255af","/guide/forms/form-inputs/form-input.html",{"title":"Text Input"},["/guide/forms/form-inputs/form-input","/guide/forms/form-inputs/form-input.md"]],
  ["v-78e6dfc4","/guide/forms/form-inputs/form-radio.html",{"title":"Radio"},["/guide/forms/form-inputs/form-radio","/guide/forms/form-inputs/form-radio.md"]],
  ["v-00524b90","/guide/forms/form-inputs/form-slider.html",{"title":"Range Slider"},["/guide/forms/form-inputs/form-slider","/guide/forms/form-inputs/form-slider.md"]],
  ["v-a9f18868","/guide/forms/form-inputs/form-time.html",{"title":"Time Picker"},["/guide/forms/form-inputs/form-time","/guide/forms/form-inputs/form-time.md"]],
  ["v-4ddf1470","/guide/forms/form-inputs/masked-input.html",{"title":"Masked Input"},["/guide/forms/form-inputs/masked-input","/guide/forms/form-inputs/masked-input.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
