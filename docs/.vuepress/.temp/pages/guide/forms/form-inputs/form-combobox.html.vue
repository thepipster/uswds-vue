<template><h1 id="select-dropdown" tabindex="-1"><a class="header-anchor" href="#select-dropdown" aria-hidden="true">#</a> Select (dropdown)</h1>
<p>In USWDS this is called the combo-box, but is more widely known as a <code>select</code> component. The Component is also aliased to <code>&lt;us-form-select&gt;</code> for backwards compatability.</p>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2>
<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-select
            name="select historical figure"
            :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-select</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span>
        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[<span class="token punctuation">'</span>Sojourner Truth<span class="token punctuation">'</span>, <span class="token punctuation">'</span>Frederick Douglass<span class="token punctuation">'</span>, <span class="token punctuation">'</span>Booker T. Washington<span class="token punctuation">'</span>, <span class="token punctuation">'</span>George Washington Carver<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="setting-key-and-label-fields-with-complex-data" tabindex="-1"><a class="header-anchor" href="#setting-key-and-label-fields-with-complex-data" aria-hidden="true">#</a> Setting key and label fields with complex data</h2>
<p>You can specify the key field and label fields using the <code>key-field</code> and <code>label-field</code> prop.</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-select
                name="select historical figure"
                key-field="id"
                label-field="name"
                :options="[
                    { id: 1, name: 'Sojourner Truth'},
                    { id: 2, name: 'Frederick Douglass'},
                    { id: 3, name: 'Booker T. Washington'}, 
                    { id: 4, name: 'George Washington Carver'}
                ]"
                v-model="checkedValues3"
            />
        </us-form-group>
    </us-form>
    <div class="mt-2">You checked: {{checkedValues3}}</div>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span> <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{isValid, isDirty}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-select</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span>
            <span class="token attr-name">key-field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
            <span class="token attr-name">label-field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
            <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
                { id: 1, name: <span class="token punctuation">'</span>Sojourner Truth<span class="token punctuation">'</span>},
                { id: 2, name: <span class="token punctuation">'</span>Frederick Douglass<span class="token punctuation">'</span>},
                { id: 3, name: <span class="token punctuation">'</span>Booker T. Washington<span class="token punctuation">'</span>}, 
                { id: 4, name: <span class="token punctuation">'</span>George Washington Carver<span class="token punctuation">'</span>}
            ]<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>You checked: {{checkedValues}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h2>
<p>You can make use of built-in validation, for example;</p>
<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-select
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
    <div class="mt-2">You checked: {{checkedValues2}}</div>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form</span> <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit()<span class="token punctuation">"</span></span> <span class="token attr-name">:validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{isValid, isDirty}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select any historical figure<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-form-select</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select historical figure<span class="token punctuation">"</span></span>
            <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
            <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{required:true}<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkedValues<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-select</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form-group</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Invalid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isValid === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Valid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dirty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isDirty === false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Prestine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>

<script>
export default {
    data() {
        return {
            checkedValues: 'Sojourner Truth',
            checkedValues2: null,
            checkedValues3: null,
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
                    disabled:true
                }
            ]                        
        }
    },
    methods: {
        onSubmit(){

        }
    } 
}
</script>
