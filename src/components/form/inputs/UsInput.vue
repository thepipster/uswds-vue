<template>
    <us-form-group class="usx-component" :error="isError">

        <label v-if="label" class="usa-label" :class="{ 'usa-label--error': isError}" :for="divId">
            {{ label }}
            <abbr v-if="required" title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>

        <span v-if="help" class="usa-hint">
            {{ help }}
        </span>

		<!--
        <input
            v-if="mask"
            id="ssn"
            inputmode="numeric"
            name="ssn"
            placeholder="___ __ ____"
            pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$"
            class="usa-input usa-masked"
            aria-describedby="ssnHint"
        />
		-->

        <input
            class="usx-component usa-input"
            :name="name"
            :id="divId"
            v-model="currentValue"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
			:aria-describedby="name"
            :class="{
                'usa-input--error': isError,
                'usa-input--success': isSuccess,
            }"
        />

<!--
		<div>Error: {{ isError }}</div>
		<div>Success: {{ isSuccess }}</div>
		<div>Dirty: {{ dirty }}</div>
		-->

        <span v-for="(msg, index) in errors" :key="index" class="usa-error-message" id="input-error-message" role="alert">
			{{ msg }}
		</span>


    </us-form-group>
</template>

<style lang="scss">
//.usa-input {
//    max-width: 100%;
//}
</style>

<script setup lang="ts">
import { defineEmits } from 'vue';
import UsFormGroup from '../UsFormGroup.vue';
import {getFormBase } from "./FormsComposable.js";
import {type UsInputProps} from "../FormTypes.ts";
const emit = defineEmits(['update:modelValue', 'changed'])

const props = withDefaults(defineProps<UsInputProps>(), {
    modelValue: '',
    disabled: false,
    //required: false,
    valid: true,
    type: 'text',
    name: '',
    placeholder: '',
    help: '',
    debounce: false,
    label: '',
    validationMode: 'aggressive',
    suppressError: false,
});

const { divId,
        currentValue,
        dirty,
        errors,
        isSuccess,
		isError } = getFormBase(props, emit);

</script>
