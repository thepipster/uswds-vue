<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1>
<p>Vue USWDS component library</p>
<p>This is a front end component library whose aim is to develop <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> implementations of the design patterns defined by the <a href="https://designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">United States Web Design System (USWDS)</a>.</p>
<p>The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.</p>
<p>This library attempts to follow the conventions laid down by <a href="https://getbootstrap.org/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, as these seem entirely sensible!</p>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<p>To install, you need to add <code v-pre>uswds-vue</code> itself and addiationally you'll need the <code v-pre>uswds</code> styles (but not the <code v-pre>uswds</code> javascript).</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment"># With yarn</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> bootstrap</span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> uswds-vue </span>
<span class="line"></span>
<span class="line"><span class="token comment"># With npm</span></span>
<span class="line"><span class="token function">npm</span> i bootstrap</span>
<span class="line"><span class="token function">npm</span> i uswds-vue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can import globally (for example in your <code v-pre>main.js</code> file);</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">// Import bootstrap, or import in your head for SSR builds</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'bootstrap'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Import the vue component library</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UswdsVue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uswds-vue'</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UswdsVue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or import individual components, e.g.;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UsCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uswds-vue'</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UsCard<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To impoprt the <code v-pre>uswds</code> styles, you can add this to you <code v-pre>index.html</code> file;</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~uswds/dist/css/uswds-vue.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or in your sass files;</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token keyword">@import</span> <span class="token string">"~uswds-vue/dist/uswds-vue.css"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="customize-with-sass" tabindex="-1"><a class="header-anchor" href="#customize-with-sass"><span>Customize with SASS</span></a></h2>
<p>Support for SASS is baked in. To use, import the scss style sheets from <code v-pre>USWDS</code> and <code v-pre>uswds-vue</code>;</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token keyword">@import</span> <span class="token string">"~uswds-vue/src/styles/uswds-vue.scss"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="fontawesome" tabindex="-1"><a class="header-anchor" href="#fontawesome"><span>Fontawesome</span></a></h2>
<p><code v-pre>uswds-vue</code> makes use of, and includes, the free version of <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">fontawesome</a>, future versions will include the ability to decouple to decrease the build size.</p>
</div></template>


