<template><div><h1 id="date-input" tabindex="-1"><a class="header-anchor" href="#date-input"><span>Date Input</span></a></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-group label="Enter your date of birth" help-text="For example: 4 28 1986">
        <us-form-date
            name="text-input"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{currentValue}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter your date of birth<span class="token punctuation">"</span></span> <span class="token attr-name">help-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>For example: 4 28 1986<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-date</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-input<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="passing-in-a-v-model-value" tabindex="-1"><a class="header-anchor" href="#passing-in-a-v-model-value"><span>Passing in a <code v-pre>v-model</code> value</span></a></h2>
<p>If the value passed into <code v-pre>v-model</code> is already set, <code v-pre>&lt;us-form-date&gt;</code>  will attempt to decode and set it's internal state appropriatly. If the <code v-pre>valueAsDate</code> prop is set, it'll expect a Date object otherwise it'll expect a string with the format <code v-pre>YYYY-MM-DD</code> (or current format if changed from default).</p>
<div class="mt-3 mb-3">
    <us-form-group label="A validated date field">
        <us-form-date
            :min-year="2019"
            :max-year="2021"
            v-model="presetVal"
            :required="true"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{presetVal}}</div>
</div>
<h2 id="v-model-return-value" tabindex="-1"><a class="header-anchor" href="#v-model-return-value"><span><code v-pre>v-model</code> return value</span></a></h2>
<p>By default, <code v-pre>&lt;us-form-date&gt;</code> returns dates as a string in the <code v-pre>YYYY-MM-DD</code> format, which is the same format returned by native browser <code v-pre>&lt;input type=&quot;date&quot;&gt;</code> controls. You can have <code v-pre>&lt;us-form-date&gt;</code> return a Date object (with no time portion) as the v-model value instead by setting the value-as-date prop.</p>
<p>If no date is selected, <code v-pre>&lt;us-form-date&gt;</code> returns an empty string '', or returns null if the value-as-date prop is set.</p>
<p>Note that when value-as-date prop is set, the returned Date object will be in the browser's default timezone.</p>
<p>If <code v-pre>&lt;us-form-date&gt;</code> has a value set for the name prop, a hidden input will be created which will have its name attribute set to the value of the name prop, and the value attribute will be set to the selected date as a <code v-pre>YYYY-MM-DD</code> string (or current format if changed from default). This will allow the <code v-pre>&lt;us-form-date&gt;</code> selected value to be submitted via native browser form submission.</p>
<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation"><span>Validation</span></a></h2>
<p>You can make use of built-in validation. As this compoment is more complex, it differs from others in that it doesn't have a <code v-pre>rules</code> prop, instead just set a <code v-pre>required</code> prop to true to turn on validation.</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A validated date field">
            <us-form-date
                v-model="currentValue2"
                :required="true"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{currentValue2}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span> <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{isValid, isDirty}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A validated date field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-date</span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Invalid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Valid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dirty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Prestine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="min-and-max-years" tabindex="-1"><a class="header-anchor" href="#min-and-max-years"><span>Min and max years</span></a></h3>
<p>You can set a min and max year with the <code v-pre>min-year</code> and <code v-pre>max-year</code> props, which expect a integer value. For example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A validated date field">
            <us-form-date
                :min-year="2019"
                :max-year="2021"
                v-model="currentValue2"
                :required="true"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{currentValue2}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span> <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{isValid, isDirty}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A validated date field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-date</span></span>
<span class="line">            <span class="token attr-name">:min-year</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2019<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:max-year</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2021<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-form-date" tabindex="-1"><a class="header-anchor" href="#us-form-date"><span><code v-pre>&lt;us-form-date&gt;</code></span></a></h3>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h3>
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
<td>Date</td>
<td>null</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td>false</td>
<td>Disable the control</td>
</tr>
<tr>
<td>required</td>
<td>boolean</td>
<td>false</td>
<td>Set to true to turn on validations</td>
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
<td>max-year</td>
<td>number</td>
<td>9999</td>
<td>The max year required, only used if <code v-pre>required</code> is set to true</td>
</tr>
<tr>
<td>min-year</td>
<td>number</td>
<td>0</td>
<td>The min year required, only used if <code v-pre>required</code> is set to true</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>null</td>
<td>The title</td>
</tr>
<tr>
<td>value-as-date</td>
<td>string</td>
<td>info</td>
<td>Applies one of the contextual color variants</td>
</tr>
<tr>
<td>format</td>
<td>string</td>
<td>'YYYY-MM-DD'</td>
<td>The date format, see (momentjs docs)[https://momentjs.com/docs/#/parsing/] for more.</td>
</tr>
</tbody>
</table>
<h3 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h3>
<p>See <a href="https://designsystem.digital.gov/components/form-controls/#date-input" target="_blank" rel="noopener noreferrer">date picker documentation at USWDS</a></p>
</div></template>

<script>
export default {
    data() {
        return {
            currentValue: null,
            currentValue2: null,
            presetVal: '2018-04-01'
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>
