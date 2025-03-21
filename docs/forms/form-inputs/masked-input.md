# Masked Input

A version of the `<us-form-input>` exists with masking, this allows for guided user input for things that require specific struct. For example; phone numbers, zip codes, social security numbers, etc.

This component uses the 3rd party library [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/), and supports any of the masks shown [here](https://vuejs-tips.github.io/vue-the-mask/). 

<div class="mb-3 mt-3">
    <us-form :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A basic text field">
            <us-form-input-masked
                mask="(###)-###-####"
                placeholder="Enter phone number"
                :rules="{required:true}"
                v-model="testPhone"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{testPhone}}</div>
</div>

## Examples

<div class="mb-3 mt-3">
<div v-for="mask in masks" :key="mask.id">
<us-form-group :label="mask.name" :help-text="`Using the mask ${mask.mask}`">
    <us-form-input-masked
        :mask="mask.mask"
        :placeholder="mask.placeholder"
        v-model="mask.val"
    />
</us-form-group>
</div>
</div>



## Tokens

The follow tokens are allowed by default, though you can fully customize (see below). You can mix and match these to create more complex
masks.

| Character | Description  | Pattern |
| -------- | ----- | ------- | 
| # | Only numbers | {pattern: /\d/} |
| X | Only letters or numbers | { pattern: /[0-9a-zA-Z]/ } |
| S | Only letters | {pattern: /[a-zA-Z]/} |
| A | Only letters, and convert to uppercase | {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUppperCase()} |
| a | Only letters, and convert to lowercase | {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()} |
| ! | Escape, allows you to escape the following masked character | { escape: true } |

## Custom tokens

You can also pass in other tokens, and even pass a custom transformer to customize how the the user input is converted. For example;

<div class="mb-3 mt-3">
    <us-form>
        <us-form-group label="You can only enter hex!">
            <us-form-input-masked
                mask="FFFFF"
                placeholder="Enter a hex value"
                :tokens="hexTokens"
                v-model="testToken"
            />
        </us-form-group>
    </us-form>
    <div class="mt-2">You entered: {{testPhone}}</div>
</div>

```vue
<us-form-input-masked mask="FFFFF" placeholder="Enter a hex value"
    :tokens="{
        F: {
            pattern: /[0-9a-fA-F]/,
            transform: v => v.toLocaleUpperCase()
        }
    }"
    v-model="testToken"
/>
```

### Properties 

Inherited for all form inputs;

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| v-model  | string | null | The v-model prop |
| disabled  | boolean | false | Disable the control |
| name  | string | null | The input name |
| placeholder  | string | null | The input name |
| debounce  | boolean | false | Set to true to debounce input (to wait for a user to stop typing) |
| description  | string | null | The input description |
| rules  | object | null | Validation rules (see form validation docs) |
| valid  | boolean | null | Allows you to manually control validation state |
| validation-mode  | string | 'aggressive' | Validation mode, see validation docs for details. |
| supress-error  | boolean | false | Allow you to turn of the error string being displayed by validation |

Additonal properties specific to this component;

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| type  | string | 'text'' | The input type |
| mask | string | null | The mask to apply |
| tokens | object | see tokens section | Allows you to use a custom token and transformer |

<script>
export default {
    data() {
        return {
            testPhone: null,
            testToken: null,
            testMasks: null,
            selectedMask: null,
            masks: [
                {id: 1, mask: '###-##-####', name: 'Social Security Number', placeholder: "XXX-XX-XXXX", val: null},
                {id: 2, mask: '#####', name: 'Zip (US)', placeholder: "", val: null},
                {id: 3, mask: '#####-####', name: 'Zip +4 (US)', placeholder: "", val: null},
                {id: 4, mask: '##/##/#### ##:##:##', name: 'Date and time', placeholder: "dd/mm/yyyy hh:mm:ss", val: null},
                {id: 5, mask: 'S#S #S#"', name: 'Canada Zip', placeholder: "", val: null},
                {id: 6, mask: 'XX.XX.XXXXX.X.X.XXXXXX', name: 'Vehicle Identification', placeholder: "Enter VIN", val: null}
            ],
            hexTokens: {
                "F": {
                    pattern: /[0-9a-fA-F]/,
                    transform: v => v.toLocaleUpperCase()
                }
            }
        };
    }
}
</script>
