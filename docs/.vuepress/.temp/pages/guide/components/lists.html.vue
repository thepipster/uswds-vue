<template><div><h1 id="lists" tabindex="-1"><a class="header-anchor" href="#lists"><span>Lists <Badge type="green" text="extension"/></span></a></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<div class="mt-3 mb-3">
    <us-list-group>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item class="active">Active List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
    </us-list-group>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Active List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<script>
export default {
    data() {
        return {
            selectedTab: null
        };
    },
    methods: {
    }
}
</script>
