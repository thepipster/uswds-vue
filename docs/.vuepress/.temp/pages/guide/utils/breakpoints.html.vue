<template><h1 id="responsive-breakpoints" tabindex="-1"><a class="header-anchor" href="#responsive-breakpoints" aria-hidden="true">#</a> Responsive Breakpoints</h1>
<p>USWDS uses the responsive classes <code>card</code>, <code>card-lg</code>, <code>mobile</code>, <code>mobile-lg</code>, <code>tablet</code>, <code>tablet-lg</code>, <code>desktop-lg</code> and <code>widescreen</code> (see <a href="https://designsystem.digital.gov/design-tokens/spacing-units/" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>). However, <strong>USWDS-Vue</strong> takes a slightly different philosophy and has adopted the terminology in common use by other css frameworks such as <a href="https://getbootstrap.com/docs/4.5/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap<ExternalLinkIcon/></a> and <a href="https://get.foundation/" target="_blank" rel="noopener noreferrer">Foundation<ExternalLinkIcon/></a> which instead use t-shirt sizing, <code>small</code>, <code>medium</code>, <code>large</code> etc.</p>
<p>The reasoning is two-fold, first is that it's generally considered best-practice to not consider the target <em>device</em>, but rather target the screen size (especially given the diverse range of mobile device screen sizes). Second, it's just simpler to think in terms of <em>small</em>, <em>medium</em>, <em>large</em> rather than the target device - that way there is no confusion in cases where a tablet screen is actually bigger than a desktop screen.</p>
<p>You can see the breakpointsin action below, try resizing the browser and see the effect using the debug <code>us-responsive-info</code> component.</p>
<div>
    <ClientOnly>
      <us-responsive-info />
    </ClientOnly>
</div>
<h2 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values" aria-hidden="true">#</a> Default Values</h2>
<p>The default values are shown in the following <em>sass</em> code. You can change these value by overriding in your own sass, but make sure you include those new values before you import the <strong>USWDS-Vue</strong> styles.
Here we are simplu mapping the existing USWDS breakpoints to the new ones. And note the breakpoint <code>xs</code> is just a default that covers everything from a screen size of 0 up t the first breakpoint (<code>sm</code>) to give complete coverage.</p>
<div class="language-sass ext-sass line-numbers-mode"><pre v-pre class="language-sass"><code><span class="token comment">// The uswds breakpoints</span>
<span class="token variable-line"><span class="token variable">$theme-utility-breakpoints</span><span class="token punctuation">:</span> (</span>
<span class="token property-line">  <span class="token property">'card'</span><span class="token punctuation">:</span> 160px,</span>
<span class="token property-line">  <span class="token property">'card-lg'</span><span class="token punctuation">:</span> 240px,</span>
<span class="token property-line">  <span class="token property">'mobile'</span><span class="token punctuation">:</span> 320px,</span>
<span class="token property-line">  <span class="token property">'mobile-lg'</span><span class="token punctuation">:</span> 480px,</span>
<span class="token property-line">  <span class="token property">'tablet'</span><span class="token punctuation">:</span> 640px,</span>
<span class="token property-line">  <span class="token property">'tablet-lg'</span><span class="token punctuation">:</span> 800px,</span>
<span class="token property-line">  <span class="token property">'desktop'</span><span class="token punctuation">:</span> 1040px,</span>
<span class="token property-line">  <span class="token property">'desktop-lg'</span><span class="token punctuation">:</span> 1200px, <span class="token operator">/</span><span class="token operator">/</span> 1200px,</span>
<span class="token property-line">  <span class="token property">'widescreen'</span><span class="token punctuation">:</span> 1400px, <span class="token operator">/</span><span class="token operator">/</span> 1400px</span>
<span class="token selector">) !default;</span>

<span class="token comment">// Map breakpoints to a simpler scheme, sm/md/lg/xl that we'll use in the components</span>
<span class="token variable-line"><span class="token variable">$usx-breakpoint-mapping</span><span class="token punctuation">:</span> (</span>
<span class="token property-line">  <span class="token property">sm</span><span class="token punctuation">:</span> 'mobile-lg',</span>
<span class="token property-line">  <span class="token property">md</span><span class="token punctuation">:</span> 'tablet',</span>
<span class="token property-line">  <span class="token property">lg</span><span class="token punctuation">:</span> 'desktop',</span>
<span class="token property-line">  <span class="token property">xl</span><span class="token punctuation">:</span> 'desktop-lg'</span>
<span class="token selector">) !default;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
