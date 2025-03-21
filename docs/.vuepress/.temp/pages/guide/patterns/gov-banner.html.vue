<template><div><h1 id="official-banner" tabindex="-1"><a class="header-anchor" href="#official-banner"><span>Official Banner</span></a></h1>
<h2 id="the-official-government-website-banner" tabindex="-1"><a class="header-anchor" href="#the-official-government-website-banner"><span>The “official government website” banner</span></a></h2>
<p>We recommend that all federal government sites include the “official government website” banner and a logo or site name. The banner clearly identifies your site as part of the United States government, while a logo or site name helps visitors understand who you are and what you do.</p>
<h3 id="light-variant" tabindex="-1"><a class="header-anchor" href="#light-variant"><span>Light Variant</span></a></h3>
<div>    
    <us-official-header variant="light" class="mt-2"/>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="dark-variant" tabindex="-1"><a class="header-anchor" href="#dark-variant"><span>Dark Variant</span></a></h3>
<div>    
    <us-official-header variant="dark" class="mt-2"/>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="locale" tabindex="-1"><a class="header-anchor" href="#locale"><span>Locale</span></a></h3>
<div>    
    <us-official-header variant="light" :locale="locale" class="mt-2 mb-2"/>
    <us-button v-if="locale == 'en'" variant="primary" @click="locale = 'es'">Change to Spanish</us-button>
    <us-button v-else variant="primary" @click="locale = 'en'">Change to English</us-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-official-header</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="guidance" tabindex="-1"><a class="header-anchor" href="#guidance"><span>Guidance</span></a></h2>
<h2 id="when-to-use-the-banner-component" tabindex="-1"><a class="header-anchor" href="#when-to-use-the-banner-component"><span>When to use the banner component</span></a></h2>
<p>To identify as an official government site. Most government sites should use the banner.
When to consider something else</p>
<p>If you don’t use a .gov/.mil domain and HTTPS. The banner text identifies .gov/.mil domains and HTTPS as indicators that a website is an official government website. Use the banner only if your site uses both the proper TLD and HTTPS.
Any time it would be misleading. The banner should be used to reduce confusion. Avoid using the banner on any site meant only for testing or otherwise not meant to be identified as an official government website.</p>
<h2 id="usability-guidance" tabindex="-1"><a class="header-anchor" href="#usability-guidance"><span>Usability guidance</span></a></h2>
<p>Use the provided text without customization. The banner is most effective as an identifier and a learning tool when its message is consistent across government websites. With only a few exceptions (see Implementation guidance), sites should use the TLD-appropriate text provided, unaltered. Use the Spanish version of the banner for Spanish-language websites.</p>
<p>Use the version appropriate to your website’s TLD. If your project uses a .mil top-level domain, use the .mil banner text.
Show the banner on every page. Use the banner at the top of every page of a site. It can be confusing or misleading if it appears on some pages and not others.</p>
<h2 id="avoid-distraction" tabindex="-1"><a class="header-anchor" href="#avoid-distraction"><span>Avoid distraction.</span></a></h2>
<p>The banner appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the banner.
Keep the text up-to-date. Use the most current version of the banner.</p>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility"><span>Accessibility</span></a></h2>
<p>Use <code v-pre>aria-label</code> to give the banner a useful name. Our default markup uses <code v-pre>aria-label=&quot;official government website&quot;</code> to distinguish the banner header from the main header.</p>
<p>The banner’s accordion uses javascript to set the <code v-pre>aria-hidden</code> value of its content area. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set <code v-pre>aria-hidden=&quot;true&quot;</code>.</p>
<h2 id="using-the-banner-component" tabindex="-1"><a class="header-anchor" href="#using-the-banner-component"><span>Using the banner component</span></a></h2>
<p>Some .mil websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the Official websites use .mil section to use more technically accurate language: “A .mil website operates under the approval authority of the U.S. Department of Defense.”.
The banner should directly follow the skipnav component.
Set the banner background color with $theme-banner-background-color. Banner text will update automatically.</p>
</div></template>

<script>
export default {
    data() {
        return {
            locale: 'en'
        };
    }
}
</script>
