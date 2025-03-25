import type { App, Plugin } from 'vue';

//import VueUswds from 'vue-uswds/core' // Import only the core library.
//import VueUswds from 'vue-uswds';

//import KitchenSink from './components/KitchenSink.vue'
import UsContainer from './components/layout/UsContainer.vue';
import UsImg from './components/UsImg.vue';
import UsRow from './components/layout/UsRow.vue';
import UsCol from './components/layout/UsCol.vue';
import UsOfficialHeader from './components/header/UsOfficialHeader.vue'
import UsHeader from './components/header/UsHeader.vue'
import UsSideNav from './components/side-nav/UsSideNav.vue';
import UsCard from './components/UsCard.vue';
import UsTag from './components/UsTag.vue';
import UsAlert from './components/UsAlert.vue';
import UsButton from './components/UsButton.vue';
import UsForm from './components/form/UsForm.vue';
import UsFormGroup from './components/form/UsFormGroup.vue';
import UsInput from './components/form/inputs/UsInput.vue';
import UsComboBox from './components/form/inputs/UsComboBox.vue';
import UsCheckbox from './components/form/inputs/UsCheckbox.vue';
//import UsFormAddress from './components/form/UsFormAddress.vue';

import UsStepIndicator from './components/form/UsStepIndicator.vue';

import SsaLogo from './components/icons/SsaLogo.vue';

export const UswdsVue: Plugin = {
    install: (app: App, options: any) => {

        //app.use(VueUswds)

        // Layout components
        app.component('UsContainer', UsContainer);
        app.component('UsRow', UsRow);
        app.component('UsCol', UsCol);
        app.component('UsOfficialHeader', UsOfficialHeader);
        app.component('UsHeader', UsHeader);
        app.component('UsSideNav', UsSideNav);
        app.component('UsCard', UsCard);

        // Basic components
        app.component('UsTag', UsTag);
        app.component('UsAlert', UsAlert);
        app.component('UsButton', UsButton);

        // Forms
		app.component('UsStepIndicator', UsStepIndicator);
        app.component('UsForm', UsForm);
        app.component('UsFormGroup', UsFormGroup);
        app.component('UsInput', UsInput);
        app.component('UsComboBox', UsComboBox);
        app.component('UsCheckbox', UsCheckbox);

        // SSA Specific
        app.component('SsaLogo', SsaLogo);

        app.component('UsImg', UsImg);

        //app.config.globalProperties.$translation = (key: string) => {
        //    const keys = key.split('.')
        //    return keys.reduce((o: any, i) => {
        //        if (o) return o[i]
        //    }, options)
        //}
    },
}

// Export type4s
export {type UsInputProps, type UsValidationRule} from "./components/form/FormTypes";

