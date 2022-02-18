<template><h1 id="spacing" tabindex="-1"><a class="header-anchor" href="#spacing" aria-hidden="true">#</a> Spacing</h1>
<p><strong>USWDS-Vue</strong> includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>
<p>Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built using the default USWDS spacing token, of 8px.</p>
<h2 id="notation" tabindex="-1"><a class="header-anchor" href="#notation" aria-hidden="true">#</a> Notation</h2>
<p>Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
<p>The classes are named using the format <code>{property}{sides}-{size}</code> for xs and <code>{property}{sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>
<p>Where property is one of:</p>
<p><code>m</code> - for classes that set margin
<code>p</code> - for classes that set padding</p>
<p>Where sides is one of:</p>
<p><code>t</code> - for classes that set margin-top or padding-top
<code>b</code> - for classes that set margin-bottom or padding-bottom
<code>l</code> - for classes that set margin-left or padding-left
<code>r</code> - for classes that set margin-right or padding-right
<code>x</code> - for classes that set both *-left and *-right
<code>y</code> - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element</p>
<p>Where size is one of:</p>
<p><code>0</code> - for classes that eliminate the margin or padding by setting it to 0
<code>05</code> - for classes that set the margin or padding to $step * 0.5
<code>1</code> - for classes that set the margin or padding to $step * 1
<code>105</code> - for classes that set the margin or padding to $step * 1.5
<code>2</code> - for classes that set the margin or padding to $step * 2
<code>3</code> - for classes that set the margin or padding to $step
<code>4</code> - for classes that set the margin or padding to $step * 1.5
<code>5</code> - for classes that set the margin or padding to $step * 3
<code>auto</code> - for classes that set the margin to auto</p>
<p>(You can add more sizes by adding entries to the $steps Sass map variable.)</p>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3>
<p>Here are some representative examples of these classes:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>
<span class="token selector">.mt-0</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ml-1</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * .1<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.px-2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p-3</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$step * 3<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="horizontal-centering" tabindex="-1"><a class="header-anchor" href="#horizontal-centering" aria-hidden="true">#</a> Horizontal centering</h2>
<p>Additionally, uswds-vue also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.</p>
<p>Centered element</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-auto<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  Centered element
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="negative-margin" tabindex="-1"><a class="header-anchor" href="#negative-margin" aria-hidden="true">#</a> Negative margin</h2>
<p>In CSS, margin properties can utilize negative values (padding cannot). The syntax is nearly the same as the default, positive margin utilities, but with the addition of <code>n</code> before the requested size. Here’s an example class that’s the opposite of <code>.mt-1</code>:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.mt-n1</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -$step <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
