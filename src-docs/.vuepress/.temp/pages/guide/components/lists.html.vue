<template><h1 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists <Badge type="green" text="extension"/></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2>
<div class="mt-3 mb-3">
    <us-list-group>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item class="active">Active List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
    </us-list-group>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Active List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-list-group-item</span><span class="token punctuation">></span></span>List item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-list-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>

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