import { ref, watch, nextTick, onMounted, computed } from 'vue';
import Validator from "../validation/Validator";
import {uniqueId} from 'lodash';
import { type UsInputProps } from '../FormTypes';

// by convention, composable function names start with "use"
export function getFormBase( props: UsInputProps, emit:any ) {

    // state encapsulated and managed by the composable
    const divId = ref<string>('')
    const isUpdating = ref<boolean>(false)
    const currentValue = ref<string>('')
    const localValid = ref<boolean | null>(true)
    const dirty = ref<boolean>(false)
    const errors = ref<string[]>([])
    let validator:Validator;

    // If the value has been changed, and is valid, return true
    const isSuccess = computed(() => {return props.rules && localValid.value && dirty.value});
    // If the value has been changed, and is NOT valid, return true
    const isError = computed(() => {return !localValid.value && dirty.value});

    watch(() => props.modelValue, (newVal, oldVal) => {

		if (newVal == oldVal){
			return;
		}

        if (!isUpdating.value) {
            __updateVal(newVal);
        }
    })

    watch(currentValue, (newVal, oldVal) => {

		console.log('FormsComposable.watch(currentValue) - Changed!')
		if (newVal == oldVal){
			return;
		}

        //_.debounce((newVal) => {

            // Set the field as dirty
            dirty.value = true

            if (props.validationMode == 'aggressive') {
                validate()
            }

            // allows us to use v-model on our input.
            emit('update:modelValue', newVal);
            emit('changed', newVal);
        //}, 500);
    })

    function __updateVal(newVal: string){

		isUpdating.value = true;
		currentValue.value = newVal;

        nextTick(() => {
            isUpdating.value = false;
        });

    };

    async function validate() {

		//console.log(`Entering validate`, props.rules)
        //let errors: string[] = [];
        errors.value = [];
		localValid.value = true;

        if (props.rules && validator) {

            localValid.value = await validator.run(currentValue.value);
            errors.value = validator.getErrors();

            if (props.suppressError) {
                errors.value = [];
            }
			//console.log(`Ran validation, result = ${localValid.value}`)

        } else {
            //console.log('NO VALIDATION: ', props.rules)
            // TODO check, we made to set this to mull
            localValid.value = true
        }

        //updateParentValidState(errors);

        return localValid.value;
    }

    // a composable can also hook into its owner component's
    // lifecycle to setup and teardown side effects.
    onMounted(() => {

        // Create a unique div id
        divId.value = uniqueId('id-');

        // Set the internal value to the v-model value (i.e. copy the
        // data passed in from parent component as the v-model prop to
        // a local value so we can mutated it.)
        __updateVal(props.modelValue);

        // Instantiate a validator class
        if (props.rules) {
            validator = new Validator(props.rules)
        }
    })

    // expose managed state as return value
    return {
        divId,
        currentValue,
        dirty,
        errors,
        isSuccess,
        isError
    }
}
