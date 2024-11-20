<template><div><h1 id="progress" tabindex="-1"><a class="header-anchor" href="#progress"><span>Progress <Badge type="green" text="extension"/></span></a></h1>
<p><code v-pre>USWDS</code> does not provide a progess bar, so here we extend and provide a simple progress bar. For accesability, the relevant aria values are automatically set for screen reader support. These are <code v-pre>aria-valuemin</code>, <code v-pre>aria-valuemax</code> and <code v-pre>aria-valuenow</code>. The role is also set as <code v-pre>role=&quot;progressbar&quot;</code>.</p>
<div class="mt-3 mb-3">
    <us-progress :value="val" show-progress striped animated :max="100"/>
    <us-button class="mt-1" variant="primary" @click="reset()">Randomize</us-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>val<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">animated</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels"><span>Labels</span></a></h2>
<p>Add labels to your progress bars by either enabling <code v-pre>show-progress</code> (percentage of max) or <code v-pre>show-value</code> for the current absolute value. You can also make use of the default slot to add any content into the bar you want. The default slot is also passed the <code v-pre>max</code>, <code v-pre>min</code>, <code v-pre>value</code> and <code v-pre>percent</code> values for convenience. For example;</p>
<div class="mt-3 mb-3">
    <us-progress :value="val" show-progress striped animated :max="100" height="25px">
        <us-tag variant="info">See my Progress!</us-tag>
    </us-progress>
    <us-progress :value="val" show-progress striped animated :max="100" height="25px" class="mt-2">
        <template #default="{max, min, value, percent}">
            <div>
                <us-tag variant="info">{{percent}}%</us-tag>
                <span class="text-small text-white">Max: {{max}}, Min: {{min}}, Value: {{value}}</span>
            </div>
        </template>    
    </us-progress>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3 mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- Example using the default slot --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>val<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">animated</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>See my Progress!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- Example getting the internal props --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>val<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">animated</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25px<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{max, min, value, percent}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-tag</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{percent}}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-tag</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-small text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Max: {{max}}, Min: {{min}}, Value: {{value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maximum-and-minimium" tabindex="-1"><a class="header-anchor" href="#maximum-and-minimium"><span>Maximum and minimium</span></a></h2>
<p>The default max is 100 and min is 0.</p>
<div class="mt-3 mb-3">
    <us-progress :value="-50" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: 100, Value: -50
    </us-progress>
    <us-progress :value="0" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 0
    </us-progress>
    <us-progress :value="50" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 50
    </us-progress>
</div>
<div class="mt-3 mb-3">
    <us-progress :value="460" class="mb-2" show-progress :max="500" :min="250">
        <template #default="{max, min, value, percent}">
            {{percent}}% (Max: {{max}}, Min: {{min}}, Value: {{value}})
        </template>
    </us-progress>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3 mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-50<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        Max: 100, Min: 100, Value: -50</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        Max: 100, Min: -100, Value: 0</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        Max: 100, Min: -100, Value: 50</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3 mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>460<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{max, min, value, percent}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            {{percent}}% (Max: {{max}}, Min: {{min}}, Value: {{value}})</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-progress</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="width-and-height" tabindex="-1"><a class="header-anchor" href="#width-and-height"><span>Width and height</span></a></h2>
<p><code v-pre>&lt;us-progress&gt;</code> will always expand to the maximum with of its parent container. To change the width, place <code v-pre>&lt;us-progress&gt;</code> in a standard Bootstrap column or apply one of the standard Bootstrap width classes.</p>
<div class="mt-3 mb-3">
    <h5 class="mb-1">Default width</h5>
    <us-progress :value="randomVal()" class="mb-3"></us-progress>
    <h5 class="mb-1">Custom widths</h5>
    <us-progress :value="randomVal()" class="w-75 mb-2"></us-progress>
    <us-progress :value="randomVal()" class="w-50 mb-2"></us-progress>
    <us-progress :value="randomVal()" class="w-25"></us-progress>
</div>
<p>The height of the progress bar can be controlled with the <code v-pre>height</code> prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is <code v-pre>1rem</code>.</p>
<div>
    <h5 class="mb-1">Default height</h5>
    <us-progress :value="randomVal()" show-progress class="mb-3"></us-progress>
    <h5 class="mb-1">Custom heights</h5>
    <us-progress height="2rem" :value="randomVal()" show-progress class="mb-2"></us-progress>
    <us-progress height="20px" :value="randomVal()" show-progress class="mb-2"></us-progress>
    <us-progress :height="2" :value="randomVal()"></us-progress>
</div>
<h2 id="variants" tabindex="-1"><a class="header-anchor" href="#variants"><span>Variants</span></a></h2>
<p>The usual variants are supported, and also allow for <code v-pre>striped</code> and <code v-pre>animated</code>.</p>
<div class="mt-3 mb-3">
    <us-row 
        v-for="(variant,index) in [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ]" 
        :key="index"
    >
        <us-col md="1">
            {{variant}}
        </us-col>
        <us-col>
            <us-progress :value="randomVal()" class="mb-3" show-progress striped :variant="variant"/>
        </us-col>
    </us-row>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3 mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-row</span> </span>
<span class="line">        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(variant,index) in [</span>
<span class="line">                'primary',</span>
<span class="line">                'secondary',</span>
<span class="line">                'info',</span>
<span class="line">                'success',</span>
<span class="line">                'danger',</span>
<span class="line">                'warning',</span>
<span class="line">                'light',</span>
<span class="line">                'dark',</span>
<span class="line">                'white',</span>
<span class="line">                'black'</span>
<span class="line">            ]<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-col</span> <span class="token attr-name">md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            {{variant}}</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-col</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-col</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-progress</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>randomVal()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span> <span class="token attr-name">show-progress</span> <span class="token attr-name">:variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-col</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-row</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-progress" tabindex="-1"><a class="header-anchor" href="#us-progress"><span><code v-pre>&lt;us-progress&gt;</code></span></a></h3>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>variant</td>
<td>string</td>
<td>primary</td>
<td>Applies one of the contextual color variants</td>
</tr>
<tr>
<td>value</td>
<td>number</td>
<td>0</td>
<td>The progress bar value, must be between min and max</td>
</tr>
<tr>
<td>min</td>
<td>number</td>
<td>0</td>
<td>The min value for the bar</td>
</tr>
<tr>
<td>max</td>
<td>number</td>
<td>100</td>
<td>The max value for the bar</td>
</tr>
<tr>
<td>striped</td>
<td>boolean</td>
<td>false</td>
<td>Render as a striped bar</td>
</tr>
<tr>
<td>animated</td>
<td>boolean</td>
<td>false</td>
<td>Animate the stripes</td>
</tr>
<tr>
<td>show-percent</td>
<td>boolean</td>
<td>false</td>
<td>Show the percentage value in the bar</td>
</tr>
<tr>
<td>show-value</td>
<td>boolean</td>
<td>false</td>
<td>Show the raw value in the bar</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>number</td>
<td>1rem</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p>| Slot Name | Props | Description |
| -------- | ----- | ------- | ----------- |
| default  | value | The current raw value |
|   | max | The max value set |
|   | min | The min value set |
|   | percent | The computed percentage value of the bar |</p>
</div></template>

<script>
export default {
    data() {
        return {
            val: 46,
            max: 100,        
        };
    },
    methods: {
        reset(){
            this.val = this.randomVal();
        },
        randomVal(){
            return Math.ceil(Math.random() * 100);
        }
    }
};
</script>
