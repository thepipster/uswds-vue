<template><div><h1 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>Header</span></a></h1>
<div>
    <us-header fluid="full">        
        <us-header-brand>Site Name</us-header-brand>
        <us-header-nav>
            <us-nav-item :to="{name:'home'}">Home</us-nav-item>
            <us-nav-item :to="{name:'builder'}">Builder</us-nav-item>
            <us-nav-item :to="{name:'config'}">Config</us-nav-item>
        </us-header-nav>
    </us-header>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header</span> <span class="token attr-name">fluid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>        </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header-brand</span><span class="token punctuation">></span></span>Form Builder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header-brand</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header-nav</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:'home'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:'builder'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Builder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:'config'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header-nav</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="official-u-s-website-header" tabindex="-1"><a class="header-anchor" href="#official-u-s-website-header"><span>Official U.S. Website Header</span></a></h2>
<h3 id="light-variant" tabindex="-1"><a class="header-anchor" href="#light-variant"><span>Light Variant</span></a></h3>
<div>
    <us-container fluid="full">
        <us-official-header variant="light" class="mt-2"/>
    </us-container>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="dark-variant" tabindex="-1"><a class="header-anchor" href="#dark-variant"><span>Dark Variant</span></a></h3>
<us-official-header variant="dark" class="mt-2"/><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="docs-coming-soon" tabindex="-1"><a class="header-anchor" href="#docs-coming-soon"><span>Docs coming soon....</span></a></h2>
</div></template>


