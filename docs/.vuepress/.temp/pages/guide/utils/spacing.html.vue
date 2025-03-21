<template><div><h1 id="spacing" tabindex="-1"><a class="header-anchor" href="#spacing"><span>Spacing</span></a></h1>
<p><strong>USWDS-Vue</strong> includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it works</span></a></h2>
<p>Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built using the default USWDS spacing token, of 8px.</p>
<h2 id="notation" tabindex="-1"><a class="header-anchor" href="#notation"><span>Notation</span></a></h2>
<p>Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
<p>The classes are named using the format <code v-pre>{property}{sides}-{size}</code> for xs and <code v-pre>{property}{sides}-{breakpoint}-{size}</code> for <code v-pre>sm</code>, <code v-pre>md</code>, <code v-pre>lg</code>, and <code v-pre>xl</code>.</p>
<p>Where property is one of:</p>
<p><code v-pre>m</code> - for classes that set margin
<code v-pre>p</code> - for classes that set padding</p>
<p>Where sides is one of:</p>
<p><code v-pre>t</code> - for classes that set margin-top or padding-top
<code v-pre>b</code> - for classes that set margin-bottom or padding-bottom
<code v-pre>l</code> - for classes that set margin-left or padding-left
<code v-pre>r</code> - for classes that set margin-right or padding-right
<code v-pre>x</code> - for classes that set both *-left and *-right
<code v-pre>y</code> - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element</p>
<p>Where size is one of:</p>
<p><code v-pre>0</code> - for classes that eliminate the margin or padding by setting it to 0
<code v-pre>05</code> - for classes that set the margin or padding to $step * 0.5
<code v-pre>1</code> - for classes that set the margin or padding to $step * 1
<code v-pre>105</code> - for classes that set the margin or padding to $step * 1.5
<code v-pre>2</code> - for classes that set the margin or padding to $step * 2
<code v-pre>3</code> - for classes that set the margin or padding to $step
<code v-pre>4</code> - for classes that set the margin or padding to $step * 1.5
<code v-pre>5</code> - for classes that set the margin or padding to $step * 3
<code v-pre>auto</code> - for classes that set the margin to auto</p>
<p>(You can add more sizes by adding entries to the $steps Sass map variable.)</p>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3>
<p>Here are some representative examples of these classes:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token selector">.mt-0</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.ml-1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * .1<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.px-2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p-3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 3<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="horizontal-centering" tabindex="-1"><a class="header-anchor" href="#horizontal-centering"><span>Horizontal centering</span></a></h2>
<p>Additionally, uswds-vue also includes an <code v-pre>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.</p>
<p>Centered element</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-auto<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  Centered element</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="negative-margin" tabindex="-1"><a class="header-anchor" href="#negative-margin"><span>Negative margin</span></a></h2>
<p>In CSS, margin properties can utilize negative values (padding cannot). The syntax is nearly the same as the default, positive margin utilities, but with the addition of <code v-pre>n</code> before the requested size. Here’s an example class that’s the opposite of <code v-pre>.mt-1</code>:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.mt-n1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> -$step <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


