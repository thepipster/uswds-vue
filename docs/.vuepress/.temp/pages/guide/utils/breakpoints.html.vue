<template><div><h1 id="responsive-breakpoints" tabindex="-1"><a class="header-anchor" href="#responsive-breakpoints"><span>Responsive Breakpoints</span></a></h1>
<p>USWDS uses the responsive classes <code v-pre>card</code>, <code v-pre>card-lg</code>, <code v-pre>mobile</code>, <code v-pre>mobile-lg</code>, <code v-pre>tablet</code>, <code v-pre>tablet-lg</code>, <code v-pre>desktop-lg</code> and <code v-pre>widescreen</code> (see <a href="https://designsystem.digital.gov/design-tokens/spacing-units/" target="_blank" rel="noopener noreferrer">here</a>). However, <strong>USWDS-Vue</strong> takes a slightly different philosophy and has adopted the terminology in common use by other css frameworks such as <a href="https://getbootstrap.com/docs/4.5/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap</a> and <a href="https://get.foundation/" target="_blank" rel="noopener noreferrer">Foundation</a> which instead use t-shirt sizing, <code v-pre>small</code>, <code v-pre>medium</code>, <code v-pre>large</code> etc.</p>
<p>The reasoning is two-fold, first is that it's generally considered best-practice to not consider the target <em>device</em>, but rather target the screen size (especially given the diverse range of mobile device screen sizes). Second, it's just simpler to think in terms of <em>small</em>, <em>medium</em>, <em>large</em> rather than the target device - that way there is no confusion in cases where a tablet screen is actually bigger than a desktop screen.</p>
<p>You can see the breakpointsin action below, try resizing the browser and see the effect using the debug <code v-pre>us-responsive-info</code> component.</p>
<div>
    <ClientOnly>
      <us-responsive-info />
    </ClientOnly>
</div>
<h2 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values"><span>Default Values</span></a></h2>
<p>The default values are shown in the following <em>sass</em> code. You can change these value by overriding in your own sass, but make sure you include those new values before you import the <strong>USWDS-Vue</strong> styles.
Here we are simplu mapping the existing USWDS breakpoints to the new ones. And note the breakpoint <code v-pre>xs</code> is just a default that covers everything from a screen size of 0 up t the first breakpoint (<code v-pre>sm</code>) to give complete coverage.</p>
<div class="language-sass line-numbers-mode" data-highlighter="prismjs" data-ext="sass" data-title="sass"><pre v-pre><code><span class="line"><span class="token comment">// The uswds breakpoints</span></span>
<span class="line"><span class="token variable-line"><span class="token variable">$theme-utility-breakpoints</span><span class="token punctuation">:</span> (</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'card'</span><span class="token punctuation">:</span> 160px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'card-lg'</span><span class="token punctuation">:</span> 240px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'mobile'</span><span class="token punctuation">:</span> 320px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'mobile-lg'</span><span class="token punctuation">:</span> 480px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'tablet'</span><span class="token punctuation">:</span> 640px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'tablet-lg'</span><span class="token punctuation">:</span> 800px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'desktop'</span><span class="token punctuation">:</span> 1040px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'desktop-lg'</span><span class="token punctuation">:</span> 1200px, <span class="token operator">/</span><span class="token operator">/</span> 1200px,</span></span>
<span class="line"><span class="token property-line">  <span class="token property">'widescreen'</span><span class="token punctuation">:</span> 1400px, <span class="token operator">/</span><span class="token operator">/</span> 1400px</span></span>
<span class="line"><span class="token selector">) !default;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Map breakpoints to a simpler scheme, sm/md/lg/xl that we'll use in the components</span></span>
<span class="line"><span class="token variable-line"><span class="token variable">$usx-breakpoint-mapping</span><span class="token punctuation">:</span> (</span></span>
<span class="line"><span class="token property-line">  <span class="token property">sm</span><span class="token punctuation">:</span> 'mobile-lg',</span></span>
<span class="line"><span class="token property-line">  <span class="token property">md</span><span class="token punctuation">:</span> 'tablet',</span></span>
<span class="line"><span class="token property-line">  <span class="token property">lg</span><span class="token punctuation">:</span> 'desktop',</span></span>
<span class="line"><span class="token property-line">  <span class="token property">xl</span><span class="token punctuation">:</span> 'desktop-lg'</span></span>
<span class="line"><span class="token selector">) !default;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


