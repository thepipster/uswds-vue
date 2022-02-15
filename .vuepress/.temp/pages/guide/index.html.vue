<template><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>Vue USWDS component library</p>
<p>This is a front end component library whose aim is to develop <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js<ExternalLinkIcon/></a> implementations of the design patterns defined by the <a href="https://designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">United States Web Design System (USWDS)<ExternalLinkIcon/></a>.</p>
<p>The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.</p>
<p>This library attempts to follow the conventions laid down by <a href="https://getbootstrap.org/" target="_blank" rel="noopener noreferrer">Bootstrap<ExternalLinkIcon/></a>, as these seem entirely sensible!</p>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
<p>To install, you need to add <code>uswds-vue</code> itself and addiationally you'll need the <code>uswds</code> styles (but not the <code>uswds</code> javascript).</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># With yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> bootstrap
<span class="token function">yarn</span> <span class="token function">add</span> uswds-vue 

<span class="token comment"># With npm</span>
<span class="token function">npm</span> i bootstrap
<span class="token function">npm</span> i uswds-vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Then you can import globally (for example in your <code>main.js</code> file);</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// Import bootstrap, or import in your head for SSR builds</span>
<span class="token keyword">import</span> <span class="token string">'bootstrap'</span>

<span class="token comment">// Import the vue component library</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UswdsVue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uswds-vue'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UswdsVue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or import individual components, e.g.;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UsCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uswds-vue'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UsCard<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>To impoprt the <code>uswds</code> styles, you can add this to you <code>index.html</code> file;</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~uswds/dist/css/uswds-vue.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Or in your sass files;</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">"~uswds-vue/dist/uswds-vue.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="customize-with-sass" tabindex="-1"><a class="header-anchor" href="#customize-with-sass" aria-hidden="true">#</a> Customize with SASS</h2>
<p>Support for SASS is baked in. To use, import the scss style sheets from <code>USWDS</code> and <code>uswds-vue</code>;</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">"~uswds-vue/src/styles/uswds-vue.scss"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="fontawesome" tabindex="-1"><a class="header-anchor" href="#fontawesome" aria-hidden="true">#</a> Fontawesome</h2>
<p><code>uswds-vue</code> makes use of, and includes, the free version of <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">fontawesome<ExternalLinkIcon/></a>, future versions will include the ability to decouple to decrease the build size.</p>
</template>
