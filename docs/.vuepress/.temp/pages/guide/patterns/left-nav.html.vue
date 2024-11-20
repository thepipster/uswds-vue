<template><div><h1 id="side-navigation" tabindex="-1"><a class="header-anchor" href="#side-navigation"><span>Side Navigation</span></a></h1>
<div class="mt-3 mb-4 usx-component">
    <us-row>
        <us-col>
            <div class="mb-4">
                Example of a simple menu. <br/>Current Page:
                <span v-if="selected1" class="text-primary">{{selected1.name}}</span>
            </div>
            <us-side-nav v-model="selected1" :links="menu1"/>
        </us-col>
        <us-col>
            <div class="mb-4">
                Example of a menu 2 levels deep. <br/>Current Page:
                <span v-if="selected2" class="text-primary">{{selected2.name}}</span>
            </div>            
            <us-side-nav v-model="selected2" :links="menu2"/>
        </us-col>     
        <us-col>
            <div class="mb-4">
                Example of a menu 3 levels deep. <br/>Current Page:
                <span v-if="selected3" class="text-primary">{{selected3.name}}</span>
            </div>            
            <us-side-nav v-model="selected3" :links="menu3"/>
        </us-col>                
    </us-row>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3 mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-side-nav</span> <span class="token attr-name">:links</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token literal-property property">menu3</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Child Page A'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page 2'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Child Page A'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Child Page C'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Grand Child I'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Grand Child II'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Grand Child III'</span><span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="icons" tabindex="-1"><a class="header-anchor" href="#icons"><span>Icons</span></a></h2>
<p>Icons are supported using <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">font-awesome</a>, simply pass in the icon class you want in a <code v-pre>icon</code> field in your menu defintion. See this example;</p>
<div class="mt-3 mb-3 usx-component w-25">
    <us-side-nav :links="[
        {name: 'Page 1', icon: 'fal fa-database'},
        {name: 'Page 2', active: true, icon: 'far fa-file-alt'},
        {name: 'Page 3', icon: 'fal fa-users'},
    ]"/>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-side-nav</span> <span class="token attr-name">:links</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">    {name: 'Page 1', icon: 'fal fa-database'},</span>
<span class="line">    {name: 'Page 2', active: true, icon: 'far fa-file-alt'},</span>
<span class="line">    {name: 'Page 3', icon: 'fal fa-users'},</span>
<span class="line">]<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2>
<p>Support for dynamic routing using <code v-pre>&lt;vue-router&gt;</code> is built in. Simply add a <code v-pre>to</code> field to the menu item and set to whatever value
you would pass to a <code v-pre>&lt;router-link&gt;</code> tag. That is, this behaves just like other links in the <code v-pre>uswds-vue</code> framework.</p>
<p>You can also use a <code v-pre>href</code> for external pages.</p>
<p>Alternatively, the <code v-pre>v-model</code> is bound to the currently selected page, and returns the page object given in your menu definition.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'page-1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page 2'</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'https://va.gov'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page 3'</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'page-3'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2>
<p>Inherited for all form inputs;</p>
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
<td>v-model</td>
<td>object</td>
<td>null</td>
<td>Emits the currently selected page</td>
</tr>
<tr>
<td>links</td>
<td>array</td>
<td>null</td>
<td>Array of pages, with a <code v-pre>name</code>, <code v-pre>to</code>, <code v-pre>chilren</code>, <code v-pre>href</code> and <code v-pre>active</code> fields, see example above.</td>
</tr>
</tbody>
</table>
</div></template>

<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            selected: {},
            selected1: null,
            selected2: null,
            selected3: null,
            
            menu3: [
                {name: 'Page 1', active: true, children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},
                {name: 'Page 2', children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B', children: [
                        {name: 'Grand Child I'},
                        {name: 'Grand Child II'}
                    ]}
                ]}
            ],


             menu2: [
                {name: 'Page 1', active: true, children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},
                {name: 'Page 2', children: [
                    {name: 'Child Page A'},
                    {name: 'Child Page B'},
                    {name: 'Child Page C'}
                ]},                
                {name: 'Page 3'}
            ],
            
            menu1: [
                {name: 'Page 1', active: true},
                {name: 'Page 2'},                
                {name: 'Page 3'},
                {name: 'Page 4'},
                {name: 'Page 5'}
            ]                

        };
    }
}
</script>
