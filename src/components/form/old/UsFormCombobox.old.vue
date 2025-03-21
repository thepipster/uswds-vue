<template>

<us-form-group class="usx-component" :error="!localValid && dirty">

    <label v-if="label" class="usa-label" :class="{ 'usa-label--error': !localValid && dirty}" :for="divId">
        {{ label }}
        <abbr v-if="required" title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>

    <span v-if="helpText" class="usa-hint">
        {{ helpText }}
    </span>

    <div class="usx-component usa-combo-box no-focus" data-enhanced="true" :class="{'usx-error': !localValid && dirty, 'usx-success': localValid && dirty}">

        <!-- Render hidden selector, for screen readers -->

        <select class="usa-select usa-sr-only" v-model="currentValue" :name="name" :id="divId" :disabled="disabled"
            aria-hidden="true">
            <option value>
                <slot name="empty">Select an option</slot>
            </option>
            <option v-for="(opt, index) in options" :key="index" :value="getValue(index, false)">
                <span>{{ getLabel(index, false) }}</span>
            </option>
        </select>

        <!-- Render the actual UI for the selector -->

        <input v-if="filteredOpts" :aria-owns="`usx-combo-{${divId}}`" aria-autocomplete="list"
            :aria-describedby="`usx-combo-${divId}-assistiveHint`" :aria-expanded="isOpen" v-model="currentValueLabel"
            autocapitalize="off" autocomplete="off" :id="divId" @click="isOpen = true" class="usa-combo-box__input"
            type="text" role="combobox" aria-activedescendant="" />

        <span class="usa-combo-box__clear-input__wrapper" tabindex="-1">
            <button type="button" class="usa-combo-box__clear-input no-focus" :class="{ 'd-block': currentValueLabel }"
                @click="onClearInput()" aria-label="Clear the select contents">&nbsp;</button>
        </span>

        <span class="usa-combo-box__input-button-separator">&nbsp;</span>

        <span class="usa-combo-box__toggle-list__wrapper" tabindex="-1">
            <button type="button" tabindex="-1" class="usx-toggle-btn no-focus" aria-label="Toggle the dropdown list"
                @click="isOpen = !isOpen">
                <i v-if="!isOpen" class="fas fa-chevron-down"></i>
                <i v-else class="fas fa-chevron-up"></i>
            </button>
        </span>

        <ul tabindex="-1" :id="`usx-combo-{${divId}}`" class="usa-combo-box__list" role="listbox" :hidden="!isOpen"
            v-if="filteredOpts && filteredOpts.length > 0">
            <li v-for="(opt, index) in filteredOpts" :key="index" :value="getValue(index)" aria-selected="false"
                :aria-setsize="filteredOpts.length" aria-posinset="1" :id="`usx-combo-${divId}-option-${index}`"
                class="usa-combo-box__list-option no-focus" :tabindex="(index == 0) ? 0 : -1" role="option"
                @click="onSelectVal(index)" :data-value="getValue(index)">
                {{ getLabel(index) }}
            </li>
        </ul>
        <ul v-else id="`usx-combo-{${divId}}`" class="usa-combo-box__list" role="listbox" :hidden="!isOpen">
            <li class="usa-combo-box__list-option--no-results">
                No results found
            </li>
        </ul>

        <div class="usa-combo-box__status usa-sr-only" role="status"></div>

        <span :id="`{divId}--assistiveHint`" class="usa-sr-only">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device
            users, explore by touch or with swipe gestures.
        </span>
    </div>

    <span v-for="msg in errors" class="usa-error-message" id="input-error-message" role="alert">{{ msg }}</span>


</us-form-group>

</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import Validator from "./Validator.js";
import UsFormGroup from './UsFormGroup.vue';
import {isArray, debounce} from "lodash";
import { type BaseProps, getFormBase } from "./FormsComposable";

const emit = defineEmits(['update:modelValue', 'changed']);
/*
interface ComboProps extends BaseProps {
    UserId: string;
}

const props = withDefaults(defineProps < BaseProps > (), {
    labelField: string,
    keyField: string,
    options: Array < any >
});

const props = withDefaults(defineProps < ComboProps > (), {
    value: '',
    disabled: false,
    required: false,
    rules: '',
    valid: true,
    type: 'text',
    name: '',
    placeholder: '',
    helpText: '',
    debounce: false,
    label: '',
    validationMode: 'aggressive',
    suppressError: false,
    labelField: 'value',
    keyField: 'id',
    options: []
});
*/

const props = withDefaults(defineProps<BaseProps>(), {
    value: '',
    disabled: false,
    required: false,
    rules: '',
    valid: true,
    type: 'text',
    name: '',
    placeholder: '',
    helpText: '',
    debounce: false,
    label: '',
    validationMode: 'aggressive',
    suppressError: false,
});


const { divId,
    isUpdating,
    currentValue,
    localValid,
    dirty,
    errors,
    validator } = getFormBase(props, emit);

const isOpen = ref < boolean > (false);
const filteredOpts = ref < string > ();
const currentValueLabel = ref < string > ();
const isUpdatingLabel = ref < boolean > (false);

onMounted(() => {
    filteredOpts.value = props.options;
    nextTick(() => {
        __setup();
    });
});

function __setup(){

    filteredOpts.value = props.options;

    if (!props.options || !props.value) {
        currentValueLabel.value = null;
        return;
    }

    // Find the selected item in the array
    let index = -1;

    //console.log('isArray(props.options) = ', isArray(props.options));

    if (isArray(props.options)) {

        //console.log(`labelField = ${props.labelField}, keyField = ${props.keyField}`)

        for (let i = 0; i < props.options.length; i += 1) {
            if (props.keyField) {
                // The value will be the valued of the key field
                //console.log(`keyField = ${props.keyField}, i = ${i}, val = ${props.value}, this = ${props.options[i][props.keyField]}`)
                if (props.value == props.options[i][props.keyField]) {
                    index = i;
                }
            }
            else if (props.labelField) {
                // With no key field, the value will be the entire object.
                // So use the label field to match on
                //console.log(`labelField = ${props.labelField}, i = ${i}, val = ${props.value}, this = ${props.options[i][props.keyField]}`)
                if (props.value[props.labelField] == props.options[i][props.labelField]) {
                    index = i;
                }
                index = i;
            }
            else {
                // Try to match on the whole object
                if (props.value == props.options[i]) {
                    index = i;
                }
            }
        }

    }

    if (index != -1) {
        props.onSelectVal(index);
    }

}

function onSelectVal(index){

    // Flag that we're updating the label so we
    // don't want the filtered options list to update.
    // This is because once a value is selected we want
    // the dropdown to show all options again
    isUpdatingLabel.value = true;

    //props.currentValue = item;
    props.currentValue = props.getValue(index, true);
    currentValueLabel.value = props.getLabel(index, true);
    filteredOpts.value = props.options;

    // Close the dropdown
    isOpen.value = false;

    props.$nextTick(() => {
        isUpdatingLabel.value = false;
    });
}

const __debouncedOnChange = debounce(function () {
    __filterOptions();
}, 250);

function isFiltered(index){
    let re = new RegExp(currentValueLabel.value, 'i');
    let label = props.getLabel(index, true);
    if (label && label.match(re)) {
        //props.$log(`${label} != ${currentValueLabel.value}`)
        return false;
    }
    return true;
}

function __filterOptions(){

    if (!currentValueLabel.value) {
        //props.$log('filteredOpts = ', props.options);
        filteredOpts.value = props.options;
        return;
    }

    let newOpts = [];
    for (let i = 0; i < props.options.length; i += 1) {
        if (!props.isFiltered(i)) {
            newOpts.push(props.options[i]);
        }
    }

    filteredOpts.value = newOpts;
}

function onClearInput(){
    isUpdatingLabel.value = true;
    props.currentValue = null;
    currentValueLabel.value = null;
    filteredOpts.value = props.options;
    props.$nextTick(() => {
        isUpdatingLabel.value = false;
    });
}

function getValue(index, useFiltered = true) {
    let item = null;
    if (useFiltered) {
        item = filteredOpts.value[index];
    }
    else {
        item = props.options[index];
    }

    if (!item) {
        return null;
    }

    if (props.keyField) {
        return item[props.keyField];
    }
    if (item.value) {
        return item.value;
    } else {
        return item;
    }
}

function getLabel(index, useFiltered = true) {

    let item = null;

    if (useFiltered) {
        item = filteredOpts.value[index];
    }
    else {
        item = props.options[index];
    }

    if (!item) {
        return null;
    }

    if (props.labelField) {
        return item[props.labelField];
    }
    else if (item.label) {
        return item.label;
    }
    else {
        return item;
    }
}

</script>
<style lang="scss">
.usa-combo-box {

    .usx-toggle-btn {
        background-color: transparent;
        color: rgb(102, 102, 102);
        background-position: center;
        background-size: auto .75rem;
        border: 0;
        cursor: pointer;
        margin-bottom: 0;
        position: absolute;
        top: 1px;
        text-align: center;
        width: 43px;
        font-size: 1rem;
        line-height: 1rem;
        right: 1px;
        height: 2.25em;
        z-index: 100;
    }

    .usa-combo-box__list-option {
        &:hover {
            background-color: rgba(220, 220, 220, 0.3);
        }
    }

    .no-focus {
        outline: none !important;
    }

    max-width: 100%;

    input {
        // Fix margin bug when using validation classes
        //margin-top: 0;
    }

    &.usx-success {
        input {
            border-width: 0.25rem;
            border-color: #00a91c;
            border-style: solid;
        }
    }

    &.usx-error {
        select {
            border-width: 0.25rem;
            border-color: #b50909;
            border-style: solid;
        }
    }

    .usa-select {
        // Fix height bug in uswds
        height: auto;
        max-width: 100%;
    }
}
</style>
