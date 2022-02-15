<template><h1 id="masked-input" tabindex="-1"><a class="header-anchor" href="#masked-input" aria-hidden="true">#</a> Masked Input</h1>
<p>A version of the <code>&lt;us-form-input&gt;</code> exists with masking, this allows for guided user input for things that require specific struct. For example; phone numbers, zip codes, social security numbers, etc.</p>
<p>This component uses the 3rd party library <a href="https://vuejs-tips.github.io/vue-the-mask/" target="_blank" rel="noopener noreferrer">vue-the-mask<ExternalLinkIcon/></a>, and supports any of the masks shown <a href="https://vuejs-tips.github.io/vue-the-mask/" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
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
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
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
<h2 id="tokens" tabindex="-1"><a class="header-anchor" href="#tokens" aria-hidden="true">#</a> Tokens</h2>
<p>The follow tokens are allowed by default, though you can fully customize (see below). You can mix and match these to create more complex
masks.</p>
<table>
<thead>
<tr>
<th>Character</th>
<th>Description</th>
<th>Pattern</th>
</tr>
</thead>
<tbody>
<tr>
<td>#</td>
<td>Only numbers</td>
<td>{pattern: /\d/}</td>
</tr>
<tr>
<td>X</td>
<td>Only letters or numbers</td>
<td>{ pattern: /[0-9a-zA-Z]/ }</td>
</tr>
<tr>
<td>S</td>
<td>Only letters</td>
<td>{pattern: /[a-zA-Z]/}</td>
</tr>
<tr>
<td>A</td>
<td>Only letters, and convert to uppercase</td>
<td>{pattern: /[a-zA-Z]/, transform: v =&gt; v.toLocaleUppperCase()}</td>
</tr>
<tr>
<td>a</td>
<td>Only letters, and convert to lowercase</td>
<td>{pattern: /[a-zA-Z]/, transform: v =&gt; v.toLocaleLowerCase()}</td>
</tr>
<tr>
<td>!</td>
<td>Escape, allows you to escape the following masked character</td>
<td>{ escape: true }</td>
</tr>
</tbody>
</table>
<h2 id="custom-tokens" tabindex="-1"><a class="header-anchor" href="#custom-tokens" aria-hidden="true">#</a> Custom tokens</h2>
<p>You can also pass in other tokens, and even pass a custom transformer to customize how the the user input is converted. For example;</p>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input-masked</span> <span class="token attr-name">mask</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>FFFFF<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter a hex value<span class="token punctuation">"</span></span>
    <span class="token attr-name">:tokens</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        F: {
            pattern: /[0-9a-fA-F]/,
            transform: v => v.toLocaleUpperCase()
        }
    }<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testToken<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<p>Inherited for all form inputs;</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>v-model</td>
<td>string</td>
<td>null</td>
<td>The v-model prop</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td>false</td>
<td>Disable the control</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>null</td>
<td>The input name</td>
</tr>
<tr>
<td>placeholder</td>
<td>string</td>
<td>null</td>
<td>The input name</td>
</tr>
<tr>
<td>debounce</td>
<td>boolean</td>
<td>false</td>
<td>Set to true to debounce input (to wait for a user to stop typing)</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>null</td>
<td>The input description</td>
</tr>
<tr>
<td>rules</td>
<td>object</td>
<td>null</td>
<td>Validation rules (see form validation docs)</td>
</tr>
<tr>
<td>valid</td>
<td>boolean</td>
<td>null</td>
<td>Allows you to manually control validation state</td>
</tr>
<tr>
<td>validation-mode</td>
<td>string</td>
<td>'aggressive'</td>
<td>Validation mode, see validation docs for details.</td>
</tr>
<tr>
<td>supress-error</td>
<td>boolean</td>
<td>false</td>
<td>Allow you to turn of the error string being displayed by validation</td>
</tr>
</tbody>
</table>
<p>Additonal properties specific to this component;</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>string</td>
<td>'text''</td>
<td>The input type</td>
</tr>
<tr>
<td>mask</td>
<td>string</td>
<td>null</td>
<td>The mask to apply</td>
</tr>
<tr>
<td>tokens</td>
<td>object</td>
<td>see tokens section</td>
<td>Allows you to use a custom token and transformer</td>
</tr>
</tbody>
</table>
</template>

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
