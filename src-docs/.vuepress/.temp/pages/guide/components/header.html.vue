<template><h1 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h1>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header</span> <span class="token attr-name">fluid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header-brand</span><span class="token punctuation">></span></span>Form Builder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header-brand</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-header-nav</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>home<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>builder<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Builder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-nav-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>config<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-nav-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header-nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="official-u-s-website-header" tabindex="-1"><a class="header-anchor" href="#official-u-s-website-header" aria-hidden="true">#</a> Official U.S. Website Header</h2>
<h3 id="light-variant" tabindex="-1"><a class="header-anchor" href="#light-variant" aria-hidden="true">#</a> Light Variant</h3>
<div>
    <us-container fluid="full">
        <us-official-header variant="light" class="mt-2"/>
    </us-container>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="dark-variant" tabindex="-1"><a class="header-anchor" href="#dark-variant" aria-hidden="true">#</a> Dark Variant</h3>
<us-official-header variant="dark" class="mt-2"/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="docs-coming-soon" tabindex="-1"><a class="header-anchor" href="#docs-coming-soon" aria-hidden="true">#</a> Docs coming soon....</h2>
</template>
