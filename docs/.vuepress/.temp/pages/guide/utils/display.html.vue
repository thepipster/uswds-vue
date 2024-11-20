<template><div><h1 id="display-property" tabindex="-1"><a class="header-anchor" href="#display-property"><span>Display property</span></a></h1>
<p>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it works</span></a></h2>
<p>Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener noreferrer">display property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for display. Classes can be combined for various effects as you need.</p>
<h2 id="notation" tabindex="-1"><a class="header-anchor" href="#notation"><span>Notation</span></a></h2>
<p>Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from <code v-pre>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
<p>As such, the classes are named using the format:</p>
<p><code v-pre>.d-{value}</code> for xs
<code v-pre>.d-{breakpoint}-{value}</code> for <code v-pre>sm</code>, <code v-pre>md</code>, <code v-pre>lg</code>, and <code v-pre>xl</code>.</p>
<p>Where value is one of:</p>
<ul>
<li><code v-pre>none</code></li>
<li><code v-pre>inline</code></li>
<li><code v-pre>inline-block</code></li>
<li><code v-pre>block</code></li>
<li><code v-pre>table</code></li>
<li><code v-pre>table-cell</code></li>
<li><code v-pre>table-row</code></li>
<li><code v-pre>flex</code></li>
<li><code v-pre>inline-flex</code></li>
</ul>
<p>The media queries affect screen widths with the given breakpoint or larger. For example, <code v-pre>.d-lg-none</code> sets <code v-pre>display: none;</code> on both <code v-pre>lg</code> and <code v-pre>xl</code> screens.</p>
<h2 id="hiding-elements" tabindex="-1"><a class="header-anchor" href="#hiding-elements"><span>Hiding elements</span></a></h2>
<p>For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.</p>
<p>To hide elements simply use the .d-none class or one of the .d-{sm,md,lg,xl}-none classes for any responsive screen variation.</p>
<p>To show an element only on a given interval of screen sizes you can combine one .d-<em>-none class with a .d-</em>-* class, for example .d-none .d-md-block .d-xl-none will hide the element for all screen sizes except on medium and large devices.</p>
<table>
<thead>
<tr>
<th>Screen Size</th>
<th>Class</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hidden on all</td>
<td><code v-pre>.d-none</code></td>
</tr>
<tr>
<td>Hidden only on xs</td>
<td><code v-pre>.d-none .d-sm-block</code></td>
</tr>
<tr>
<td>Hidden only on sm</td>
<td><code v-pre>.d-sm-none .d-md-block</code></td>
</tr>
<tr>
<td>Hidden only on md</td>
<td><code v-pre>.d-md-none .d-lg-block</code></td>
</tr>
<tr>
<td>Hidden only on lg</td>
<td><code v-pre>.d-lg-none .d-xl-block</code></td>
</tr>
<tr>
<td>Hidden only on xl</td>
<td><code v-pre>.d-xl-none</code></td>
</tr>
<tr>
<td>Visible on all</td>
<td><code v-pre>.d-block</code></td>
</tr>
<tr>
<td>Visible only on xs</td>
<td><code v-pre>.d-block .d-sm-none</code></td>
</tr>
<tr>
<td>Visible only on sm</td>
<td><code v-pre>.d-none .d-sm-block .d-md-none</code></td>
</tr>
<tr>
<td>Visible only on md</td>
<td><code v-pre>.d-none .d-md-block .d-lg-none</code></td>
</tr>
<tr>
<td>Visible only on lg</td>
<td><code v-pre>.d-none .d-lg-block .d-xl-none</code></td>
</tr>
<tr>
<td>Visible only on xl</td>
<td><code v-pre>.d-none .d-xl-block</code></td>
</tr>
</tbody>
</table>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3>
<div class="mt-3 mb-3">
    <div class="d-inline p-2 bg-primary text-white">d-inline</div>
    <div class="d-inline p-2 bg-dark text-white">d-inline</div>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-inline p-2 bg-primary text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d-inline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-inline p-2 bg-dark text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d-inline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="mt-3 mb-3">
    <span class="d-block p-2 bg-primary text-white">d-block</span>
    <span class="d-block p-2 bg-dark text-white">d-block</span>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-block p-2 bg-primary text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d-block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-block p-2 bg-dark text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d-block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="mt-3 mb-3">
    <div class="d-lg-none">hide on lg and wider screens</div>
    <div class="d-none d-lg-block">hide on screens smaller than lg</div>
</div>
<h3 id="responsive-display-example" tabindex="-1"><a class="header-anchor" href="#responsive-display-example"><span>Responsive display example</span></a></h3>
<p>Change the screen size to see the following examples in action.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-lg-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hide on lg and wider screens<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-none d-lg-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hide on screens smaller than lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h4>
<p>You can use the <code v-pre>us-responsive-info</code> component to help you debug, as this will show which breakpoints are currently active. Change the screen width to see it in action below.</p>
<div>
    <ClientOnly>
        <us-responsive-info />
    </ClientOnly>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-responsive-info</span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The following code shows how this component works to show more advanced usage of this display classes with respect to responsive breakpoints.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-current d-none d-xs-inline-block d-sm-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-current d-none d-sm-inline-block d-md-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-current d-none d-md-inline-block d-lg-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-current d-none d-lg-inline-block d-xl-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-current d-none d-xl-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-visible d-none d-xs-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-hidden d-inline-block d-xs-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-visible d-none d-sm-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-hidden d-inline-block d-sm-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-visible d-none d-md-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-hidden d-inline-block d-md-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-visible d-none d-lg-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-hidden d-inline-block d-lg-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-visible d-none d-xl-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resp-info resp-hidden d-inline-block d-xl-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>resp-help text-muted<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Current breakpoint is </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info d-none d-xs-inline-block d-sm-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>XS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info d-none d-sm-inline-block d-md-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>SM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info d-none d-md-inline-block d-lg-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>MD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info d-none d-lg-inline-block d-xl-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>LG<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info d-none d-xl-inline-block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>XL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.resp-info</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-right</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.resp-help</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.resp-visible</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #70e17b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.resp-current</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #00bde3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.resp-hidden</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> #d3d3d3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0px 0px 5px #707070<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> inset 0px 0px 5px #707070<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0px 0px 5px #707070<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


