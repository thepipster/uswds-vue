<template><div><h1 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean"><span>Boolean <Badge text="extension"/></span></a></h1>
<p>Sometimes you just need a quick yes/no boolean component, we've got you covered.</p>
<h2 id="as-a-radio-the-default" tabindex="-1"><a class="header-anchor" href="#as-a-radio-the-default"><span>As a radio (the default)</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-group label="A Boolean field">
        <us-form-boolean
            name="yes or no?"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{currentValue}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-a-dropdown" tabindex="-1"><a class="header-anchor" href="#as-a-dropdown"><span>As a dropdown</span></a></h2>
<p>Set the prop <code v-pre>type</code> to 'dropdown' (or 'combobox') to render as a dropdown.</p>
<div class="mt-3 mb-3">
    <us-form-group label="A Boolean field">
        <us-form-boolean
            type='dropdown'
            name="yes or no?"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{currentValue}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>dropdown<span class="token punctuation">'</span></span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-a-toggle-switch" tabindex="-1"><a class="header-anchor" href="#as-a-toggle-switch"><span>As a toggle switch</span></a></h2>
<p>Set the prop <code v-pre>type</code> to 'toggle' for a toggler.</p>
<div class="mt-3 mb-3">
    <us-form-group label="A Boolean field">
        <us-form-boolean
            type='toggle'
            name="yes or no?"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{currentValue}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-checkbox</span></span>
<span class="line">        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>toggle<span class="token punctuation">'</span></span></span>
<span class="line">        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation"><span>Validation</span></a></h2>
<p>You can make use of built-in validation, for example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A basic text field">
            <us-form-boolean
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
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-boolean</span></span>
<span class="line">            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-input2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentValue2<span class="token punctuation">"</span></span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<script>
export default {
    data() {
        return {
            currentValue: true,
            currentValue2: null,
        }
    },
    methods: {
        onSubmit(){

        }
    }    
}
</script>
