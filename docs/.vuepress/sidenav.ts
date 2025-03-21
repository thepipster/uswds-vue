import { type SidebarOptions } from '@vuepress/theme-default';

export const sidebarConfig: SidebarOptions = {
    "/": [
        {
            text: 'Introduction',
            //collapsable: false,
            children: [
                'intro/setup',
                'intro/customization',
                //'utils/breakpoints',
                //'utils/display',
                //'utils/spacing',
                //'utils/layout',
                //'utils/colors',
                //'utils/theme-generator',
                //'utils/typography',
            ]
        },
        {
            text: 'Components',
            //collapsable: false,
            children: [
                //'components/accordion',
                'components/alert',
                'components/button',
                'components/card',
                //'components/image',
                //'components/footer',
                //'components/header',
                //'components/lists',
                //'components/modal',
                //'components/progress',
                'components/step-indicator',
                //'components/table',
                //'components/tabs',
                'components/tag',
            ],
        },
        /*
        {
            text: 'Forms',
            //collapsable: false,
            children: [
                'forms/form',
                'utils/validation',
                'forms/form-inputs/form-input',
                'forms/form-inputs/masked-input',
                'forms/form-inputs/form-checkbox',
                'forms/form-inputs/form-radio',
                'forms/form-inputs/form-combobox',
                'forms/form-inputs/form-date',
                'forms/form-inputs/form-date-picker',
                'forms/form-inputs/form-date-range',
                'forms/form-inputs/form-fileinput',
                'forms/form-inputs/form-slider',
                'forms/form-inputs/form-time',
                'forms/form-inputs/form-boolean',
            ],
        },
        {
            text: 'Patterns',
            collapsable: false,
            children: [
                'patterns/gov-banner',
                //'patterns/footer',
                'patterns/left-nav',
                'patterns/banner',
            ],
        },
        */

    ]

}


