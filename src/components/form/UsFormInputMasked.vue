<template>
<span>
    <the-mask 
        class="usa-input"
        :name="name"
        :mask="mask" 
        :masked="false"     
        :tokens="tokens"    
        :id="divId"
        v-model="currentValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--error': isValid === false || parentValid === false,
            'usa-input--success': isValid === true || parentValid === true
        }"             
        >
    </the-mask>
</span>
</template>

<script>
import {TheMask} from 'vue-the-mask'
import FormInputMixins from "./FormInputMixin";

export default {
    name: 'us-form-input-masked',
    components: {
        TheMask
    },
    mixins: [FormInputMixins],
    props: {
        type: {
            type: String,
            default: 'text'
        },        
        mask: {
            type: String,
            default: null
        },
        tokens: {
            type: Object,
            default() {
                return {
                    '#': { pattern: /\d/ },
                    X: { pattern: /[0-9a-zA-Z]/ },
                    S: { pattern: /[a-zA-Z]/ },
                    A: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
                    a: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() },
                    '!': { escape: true }
                }
            }
        }
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {};
    },    
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
