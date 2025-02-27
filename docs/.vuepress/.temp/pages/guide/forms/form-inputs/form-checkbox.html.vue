<template><div><h1 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox"><span>Checkbox</span></a></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-checkbox v-model="checkedVal" label="I have read, understood, and accept the legal terms"/>
    <div class="mt-2">Value: {{checkedVal}}</div>
</div>
<h2 id="usage-with-options" tabindex="-1"><a class="header-anchor" href="#usage-with-options"><span>Usage with options</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checkbox-group-options-array" tabindex="-1"><a class="header-anchor" href="#checkbox-group-options-array"><span>Checkbox group options array</span></a></h2>
<p>The checkbox items are specificed by the <code v-pre>options</code> prop, and is an array of strings or objects (or both). For objects, the available fields are;</p>
<ul>
<li><code v-pre>value</code> The selected value which will be set on v-model</li>
<li><code v-pre>label</code> Display text, rendered as basic text. If you require html, use the <code v-pre>label</code> slot (see below)</li>
<li><code v-pre>description</code> (optional) Add text that is rendered as a second line (see multi-line support below)</li>
<li><code v-pre>disabled</code> (optional) Disables item for selection</li>
<li><code v-pre>checked</code> (optional) Specifies the initial state (is checked or not)</li>
</ul>
<p>For example;</p>
<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">            {value: 1, label: 'Sojourner Truth', default:true},</span>
<span class="line">            {value: 2, label: 'Frederick Douglass'},</span>
<span class="line">            {value: 3, label: 'Booker T. Washington'},</span>
<span class="line">            {value: 4, label: 'George Washington Carver', disabled:true}</span>
<span class="line">        ]<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If an array entry is a string, it will be used for both the generated value and text fields. You can mix using strings and objects in the array.</p>
<h2 id="mutli-line-labels" tabindex="-1"><a class="header-anchor" href="#mutli-line-labels"><span>Mutli-Line labels</span></a></h2>
<div class="mt-3 mb-3">
    <div>You selected: {{checkedValues}}</div>
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options2"
            v-model="checkedValues"
        />
    </us-form-group>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">            {value: 1, label: 'Sojourner Truth', description: 'Born Isabella Belle Baumfre....', default:true},</span>
<span class="line">            {value: 2, label: 'Frederick Douglass', description: 'Frederick Douglass...' },</span>
<span class="line">            {value: 3, label: 'Booker T. Washington', description: 'Booker Taliaferro Washington...'},</span>
<span class="line">            {value: 4, label: 'George Washington Carver', description: 'George Washington Carver...', disabled:true}</span>
<span class="line">        ]<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="support-for-custom-labels" tabindex="-1"><a class="header-anchor" href="#support-for-custom-labels"><span>Support for custom labels</span></a></h2>
<p>You can customize the labels any way you want using the <code v-pre>label</code> slot. The slot is given the item as a prop,
which will contain the specific item in the options data that you passed in.</p>
<div class="mt-3 mb-3">
    <div>You selected: {{checkedValues}}</div>
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options2"
            v-model="checkedValues">
            <template v-slot:label="{item}">
                <div style="display: inline-block; text-indent: 0">
                    <us-tag variant="primary" pill>{{item.label}}</us-tag> 
                </div>
            </template>
        </us-form-checkbox>
    </us-form-group>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">            {value: 1, label: 'Sojourner Truth', description: 'Born Isabella Belle Baumfre....', default:true},</span>
<span class="line">            {value: 2, label: 'Frederick Douglass', description: 'Frederick Douglass...' },</span>
<span class="line">            {value: 3, label: 'Booker T. Washington', description: 'Booker Taliaferro Washington...'},</span>
<span class="line">            {value: 4, label: 'George Washington Carver', description: 'George Washington Carver...', disabled:true}</span>
<span class="line">        ]<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{item}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token property">text-indent</span><span class="token punctuation">:</span> 0</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">pill</span><span class="token punctuation">></span></span>{{item.label}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span> </span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-checkbox</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation"><span>Validation</span></a></h2>
<p>You can make use of built-in validation, for example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-checkbox
                name="select historical figure"
                :options="options2"
                :rules="{required:true}"
                v-model="checkedValues2">
            </us-form-checkbox>
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You checked: {{checkedValues2}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span> <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{isValid, isDirty}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{required:true}<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-checkbox</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Invalid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Valid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dirty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Prestine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-form-checkbox" tabindex="-1"><a class="header-anchor" href="#us-form-checkbox"><span><code v-pre>&lt;us-form-checkbox&gt;</code></span></a></h3>
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
<td>options</td>
<td>array</td>
<td>[]</td>
<td>An array of items describing you checkbox items, see above</td>
</tr>
<tr>
<td>valid</td>
<td>boolean</td>
<td>null</td>
<td>If true, sets the validation state a valid. False is invalid and null is indeterminate, or if wrapped in a us-form-group you can let that handle this.</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| label  | none | Allows customization of the label |
| help-text  | error | Allows customization of the help text, with the current error message passed in as a prop |
| validation-error  | none | Allows customization of the error |</p>
</div></template>

<script>
export default {
    data() {
        return {
            checkedValues: null,
            checkedValues2: null,
            checkedVal: null,
            options: [
                {value: 'sojourner-truth', label: 'Sojourner Truth', default:true},
                {value: 'frederick-douglass', label: 'Frederick Douglass'},
                {value: 'booker-washington', label: 'Booker T. Washington'},
                {value: 'george-washington-carver', label: 'George Washington Carver', disabled:true}
            ],
            options2: [
                {   
                    value: 'sojourner-truth', 
                    label: 'Sojourner Truth', 
                    description: 'Born Isabella "Belle" Baumfree; c. 1797 – November 26, 1883) was an American abolitionist and women\'s rights activist', 
                    default:true
                },
                {
                    value: 'frederick-douglass', 
                    label: 'Frederick Douglass', 
                    description: 'Frederick Douglass (born Frederick Augustus Washington Bailey; c. February 1818 – February 20, 1895) was an American social reformer, abolitionist, orator, writer, and statesman'},
                {
                    value: 'booker-washington', 
                    label: 'Booker T. Washington', 
                    description: 'Booker Taliaferro Washington (April 18, 1856 – November 14, 1915) was an American educator, author, orator, and adviser to multiple presidents of the United States'},
                {
                    value: 'george-washington-carver', 
                    label: 'George Washington Carver', 
                    description: 'George Washington Carver (1860s – January 5, 1943) was an American agricultural scientist and inventor who promoted alternative crops to cotton and methods to prevent soil depletion.', 
                    disabled:true}
            ]              
        }
    },
    methods: {
        onSubmit(){

        }
    } 
}
</script>
