//import Logger from "./utils/Logger"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import UsAlert from "./components/UsAlert.vue"

import UsAccordion from "./components/accordion/UsAccordion.vue"
import UsAccordionItem from "./components/accordion/UsAccordionItem.vue"
import UsCard from "./components/cards/UsCard.vue"
import UsForm from "./components/form/UsForm.vue"
import UsFormInput from "./components/form/UsFormInput.vue"
import UsFormInputMasked from "./components/form/UsFormInputMasked.vue"
import UsFormTextarea from "./components/form/UsFormTextarea.vue"
import UsFormGroup from "./components/form/UsFormGroup.vue"
import UsFormCombobox from "./components/form/UsFormCombobox.vue"
import UsFormDate from "./components/form/UsFormDate.vue"
//import UsFormDateRange from "./components/form/UsFormDateRange.vue"
//import UsFormDatePicker from "./components/form/UsFormDatePicker.vue"
import UsFormRadio from "./components/form/UsFormRadio.vue"
import UsFormBoolean from "./components/form/UsFormBoolean.vue"
import UsFormCheckbox from "./components/form/UsFormCheckbox.vue"
import UsStepIndicator from "./components/form/UsStepIndicator.vue"
import UsButton from "./components/UsButton.vue"
import UsButtonGroup from "./components/UsButtonGroup.vue"
//import UsButtonGroup from "./components/UsButtonGroup.vue"
import UsBadge from "./components/UsBadge.vue"
import UsImg from "./components/UsImg.vue"
import UsHeader from "./components/header/UsHeader.vue"
import UsFooter from "./components/UsFooter.vue"
import UsNavItem from "./components/header/UsNavItem.vue"
import UsHeaderNav from "./components/header/UsHeaderNav.vue"
import UsSideNavItem from "./components/side-nav/UsSideNavItem.vue"
import UsSideNav from "./components/side-nav/UsSideNav.vue"
import UsHeaderBrand from "./components/header/UsHeaderBrand.vue"
import UsOfficialHeader from "./components/header/UsOfficialHeader.vue"
import UsContainer from "./components/layout/UsContainer.vue"
import UsRow from "./components/layout/UsRow.vue"
import UsCol from "./components/layout/UsCol.vue"
import UsTab from "./components/tabs/UsTab.vue"
import UsTabs from "./components/tabs/UsTabs.vue"
import UsListGroup from "./components/lists/UsListGroup.vue"
import UsListGroupItem from "./components/lists/UsListGroupItem.vue"
import UsTable from "./components/UsTable.vue"
import UsModal from "./components/UsModal.vue"
import UsProgress from "./components/UsProgress.vue"

// Debug components
import UsResponsiveInfo from "./components/debug/UsResponsiveInfo.vue"

export const Components = {
  UsAlert,

  UsAccordion,
  UsAccordionItem,
  UsSideNav,
  UsSideNavItem,
  UsRow,
  UsCol,
  UsTab,
  UsTabs,
  UsBadge,
  UsTag: UsBadge,
  UsCard,
  UsButton,
  UsButtonGroup,
  UsForm,
  UsFormInput,
  UsFormInputMasked,
  UsFormTextarea,
  UsFormGroup,
  UsFormCombobox,
  UsFormSelect: UsFormCombobox,
  UsFormCheckbox,
  UsFormRadio,
  UsFormDate,
  //UsFormDatePicker,
  //UsFormDateRange,
  UsFormBoolean,
  UsImg,
  UsHeader,
  UsNavItem,
  UsHeaderNav,
  UsContainer,
  UsOfficialHeader,
  UsHeaderBrand,
  UsFooter,
  UsResponsiveInfo,
  UsListGroup,
  UsListGroupItem,
  UsStepIndicator,
  UsTable,
  UsModal,
  UsProgress,
}

/**
 * Install function to enable global install;
 * import { UswdsVue } from "uswds-vue";
 * Vue.use(UswdsVue);
 *
 * @param {*} Vue
 * @param {*} config
 */
const UswdsVue = {
  install(Vue, _config: object = {}) {
    //if (document){
    //    require("bootstrap");
    // }

    //if (!Vue.$log) {
    //  Vue.use(Logger)
    // }

    Object.keys(Components).forEach((name) => {
      //console.log("REGISTERING COMPONENT: " + name)
      Vue.component(name, Components[name])
    })

    //if (config.bootstrap) {
    // Layer in bootstrap utility styles...
    // }
  },
}

export { UswdsVue }

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(UswdsVue)
}

// Export utils
import Validator from "./utils/Validator"
export { Validator }
