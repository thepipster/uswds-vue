<template><h1 id="forms-overview" tabindex="-1"><a class="header-anchor" href="#forms-overview" aria-hidden="true">#</a> Forms Overview</h1>
<p>A form component and helper components that optionally support inline form styles and validation states. Pair them up with other USWDS-Vue form control components for an easy customized, and responsive, layout with a consistent look and feel.</p>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="form-group" tabindex="-1"><a class="header-anchor" href="#form-group" aria-hidden="true">#</a> Form Group</h2>
<p>The <code>&lt;us-form-group&gt;</code> component is the easiest way to add some structure to forms. Its purpose is to pair form controls with a legend or label, and to provide help text and invalid/valid feedback text, as well as visual (color) contextual state feedback.</p>
<h2 id="basic-usage-1" tabindex="-1"><a class="header-anchor" href="#basic-usage-1" aria-hidden="true">#</a> Basic Usage</h2>
<div class="mb-3 mt-3">
    <us-form-group label='Enter your username' help-text='Your username should be 8-16 characters long'>
        <us-form-input name='username' v-model="username"/>
    </us-form-group>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>Enter your username<span class="token punctuation">'</span></span> <span class="token attr-name">help-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>Your username should be 8-16 characters long<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>username<span class="token punctuation">'</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="validation-states" tabindex="-1"><a class="header-anchor" href="#validation-states" aria-hidden="true">#</a> Validation States</h2>
<p>Validation states are handled through the <code>valid</code> prop. You can also pass an error message with the <code>error</code> prop. This will also set the validation state of any child form components automatically, though this can still be done manually.</p>
<div class="mb-3 mt-3">
    <us-form-group label='This is invalid' help-text='Your username should be 8-16 characters long' :valid="false" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>
    <us-form-group label='This is valid' help-text='Your username should be 8-16 characters long' :valid="true" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>
    <us-form-group label='This is indeterminate' help-text='Your username should be 8-16 characters long' :valid="null" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>        
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> 
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>This is invalid<span class="token punctuation">'</span></span> 
    <span class="token attr-name">help-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>Your username should be 8-16 characters long<span class="token punctuation">'</span></span> 
    <span class="token attr-name">:valid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> 
    <span class="token attr-name">error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This is incorrect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text1<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> 
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>This is valid<span class="token punctuation">'</span></span> 
    <span class="token attr-name">help-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>Your username should be 8-16 characters long<span class="token punctuation">'</span></span> 
    <span class="token attr-name">:valid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> 
    <span class="token attr-name">error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This is incorrect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text1<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> 
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>This is indeterminate<span class="token punctuation">'</span></span> 
    <span class="token attr-name">help-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>Your username should be 8-16 characters long<span class="token punctuation">'</span></span> 
    <span class="token attr-name">:valid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> 
    <span class="token attr-name">error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This is incorrect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text1<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="support-for-custom-labels" tabindex="-1"><a class="header-anchor" href="#support-for-custom-labels" aria-hidden="true">#</a> Support for custom labels</h2>
<p>If you need full support for hmtl with your label, then you can use the label slot to fully customize the help text. Similar slots exist for the help text and validation errors.</p>
<div>
    <us-form-group name='username' helpText='Your username should be 8-16 characters long'>
        <template name="label">
            My custom label with a icon <i class="fas fa-robot"></i>
        </template>
        <us-form-input v-model="username"/>
    </us-form-group>
</div>
<h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component Reference</h2>
<h3 id="us-form-group" tabindex="-1"><a class="header-anchor" href="#us-form-group" aria-hidden="true">#</a> <code>&lt;us-form-group&gt;</code></h3>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
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
<td>name</td>
<td>boolean</td>
<td>false</td>
<td>Show page title labels</td>
</tr>
<tr>
<td>help-text</td>
<td>boolean</td>
<td>false</td>
<td>Center page title labels</td>
</tr>
<tr>
<td>col-support</td>
<td>boolean</td>
<td>false</td>
<td>To support column form layouts, break from uswds norms and place help text and error messages <em>below</em> input which looks a lot better as the input fields stay in alignment.</td>
</tr>
<tr>
<td>valid</td>
<td>boolean</td>
<td>null</td>
<td>If true, sets the validation state a valid. False is invalid and null is indeterminate</td>
</tr>
<tr>
<td>error</td>
<td>string</td>
<td>null</td>
<td>Pass in an error message to be displayed</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| label  | none | Allows customization of the label |
| help-text  | error | Allows customization of the help text, with the current error message passed in as a prop |
| validation-error  | none | Allows customization of the error |</p>
</template>

<script>
export default {
    data() {
        return {
            username: null
        };
    }
}
</script>