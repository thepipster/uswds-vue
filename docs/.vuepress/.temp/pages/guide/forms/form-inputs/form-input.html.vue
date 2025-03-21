<template><div><h1 id="text-input" tabindex="-1"><a class="header-anchor" href="#text-input"><span>Text Input</span></a></h1>
<p>Your basic <code v-pre>input</code> field for single line text input.</p>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-group label="A basic text field">
        <us-form-input
            name="text-input"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{currentValue}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A basic text field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-input<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input-type" tabindex="-1"><a class="header-anchor" href="#input-type"><span>Input Type</span></a></h2>
<p><code v-pre>&lt;us-form-input&gt;</code> defaults to a text input, but you can set the type prop to one of the supported native browser HTML5 types: text, password, email, number, url, tel, search, date, datetime, datetime-local, month, week, time, range, or color.</p>
<div class="mt-3 mb-3">
    <us-row>
        <us-col md="4" v-for="(type, index) in types" :key="index">
            <us-form-group>
                <template name="label">
                    <div class="usa-label">
                    Type: <span class="text-danger">{{type}}</span>
                    </div>
                </template>
                <us-form-input :type="type" name="text-input"/>
            </us-form-group>        
        </us-col>
    </us-row>
</div>
<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation"><span>Validation</span></a></h2>
<p>You can make use of built-in validation, for example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A basic text field">
            <us-form-input
                name="text-input2"
                v-model="currentValue2"
                :rules="{required:true}"
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
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A basic text field<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-input</span></span>
<span class="line">            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-input2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{required:true}<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Invalid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Valid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dirty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Prestine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h3>
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
</tbody>
</table>
</div></template>

<script>
export default {
    data() {
        return {
            types: ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'range', 'color'],
            currentValue: null,
            currentValue2: null
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>
