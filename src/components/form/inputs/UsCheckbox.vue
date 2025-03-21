<template>

	<us-form-group ref="comboRef" class="usx-component" :error="isError">

		<!--
		<label v-if="label" class="usa-label" :class="{ 'usa-label--error': isError}" :for="divId">
			{{ label }}
			<abbr v-if="required" title="required" class="usa-hint usa-hint--required">*</abbr>
		</label>

		<span v-if="help" class="usa-hint">
			{{ help }}
		</span>
		-->

		<fieldset class="usa-fieldset">
			<legend class="usa-legend">{{ label }}</legend>
			<div class="usa-checkbox" v-for="(item, index) in options" :key="index">
				<input
					class="usa-checkbox__input"
					type="checkbox"
					:id="`${divId}-id-${index}`"
					:name="`${divId}-name-${index}`"
					:value="item.value"
					@change="onChanged(item, index)"
					:checked="checked[index]"
					/>
				<label class="usa-checkbox__label" :for="`${divId}-id-${index}`">{{item.label}}</label>
			</div>
		</fieldset>

		<!--

		<div v-if="options && options.length > 0" class="usa-checkbox">
			<input class="usa-checkbox__input" v-model="currentValue" :id="`checkbox-${divId}`" type="checkbox"
				:disabled="disabled" :value="true" />
			<label class="usa-checkbox__label" :for="`checkbox-${divId}`">
				<slot name="label">{{label}}</slot>
			</label>
		</div>

		<span v-else>
			<div class="usa-checkbox" v-for="(item, index) in options" :key="index">
				<input class="usa-checkbox__input" v-model="currentValue" v-bind="item" type="checkbox" />
				<label class="usa-checkbox__label" :for="item.id">
					<slot name="label" v-bind:item="item" v-if="item.label">
						<span v-if="item.label">{{item.label}}</span>
						<div class="usx-checkbox-desc" v-if="item.description">{{item.description}}</div>
					</slot>
				</label>
			</div>
		</span>

		-->

	</us-form-group>
</template>
<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';
import {type UsInputProps} from "../FormTypes.ts";
import UsFormGroup from '../UsFormGroup.vue';
import {isArray, uniqueId} from 'lodash';

const emit = defineEmits(['update:modelValue', 'changed'])

const divId = ref<string>('')
const currentValue = ref<string[]>([]);
const checked = ref<boolean[]>([]);
const errors = ref<string[]>([])
const isError = ref<boolean>(false);

const props = withDefaults(defineProps<UsInputProps>(), {
    disabled: false,
    required: false,
    valid: true,
    type: 'checkbox',
    name: '',
    placeholder: '',
    help: '',
    label: '',
    options: []
});

function onChanged(item, index: number) {
	console.log(`onChanged:`, item, index);
	checked.value[index] = !checked.value[index];
	currentValue.value = [];
	for (let i=0; i<checked.value.length; i++) {
		if (checked.value[i]) {
			currentValue.value.push(props.options[i].value);
		}
	}
	emit('update:modelValue', currentValue.value);
	emit('changed', currentValue.value);
}

onMounted(() => {

	// Create a unique div id
	divId.value = uniqueId('id-');

	if (props.modelValue && isArray(props.modelValue)) {
		currentValue.value = props.modelValue;
	}
	else {
		currentValue.value = [];
	}

	if (props.options && props.options.length > 0) {

		for (let j=0; j<currentValue.value.length; j++) {
			console.log(`currentValue.value[j]:`, currentValue.value[j]);
			for (let i=0; i<props.options.length; i++) {
				console.log(`   - props.options[i]:`, props.options[i]);
				if (currentValue.value[j] === props.options[i].value) {
					checked.value[i] = true;
				}
				else {
					checked.value[i] = false;
				}
			}
		}


	}
})


</script>
<style lang="scss">

</style>

