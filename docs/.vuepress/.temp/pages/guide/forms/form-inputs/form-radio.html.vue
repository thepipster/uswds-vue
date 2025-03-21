<template><div><h1 id="radio" tabindex="-1"><a class="header-anchor" href="#radio"><span>Radio</span></a></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-radio
            name="select historical figure"
            :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-radio</span></span>
<span class="line">            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-radio
            name="select historical figure"
            :options="options2"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-radio</span></span>
<span class="line">            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">                {value: 'sojourner-truth', label: 'Sojourner Truth', default:true},</span>
<span class="line">                {value: 'frederick-douglass', label: 'Frederick Douglass'},</span>
<span class="line">                {value: 'booker-washington', label: 'Booker T. Washington'},</span>
<span class="line">                {value: 'george-washington-carver', label: 'George Washington Carver', disabled:true}</span>
<span class="line">            ]<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation"><span>Validation</span></a></h2>
<p>You can make use of built-in validation, for example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-radio
                name="select historical figure"
                :options="options"
                v-model="checkedValues2"
                :rules="{required:true}"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{checkedValues2}}</div>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<script>
export default {
    data() {
        return {
            checkedValues: null,
            checkedValues2: null,
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
