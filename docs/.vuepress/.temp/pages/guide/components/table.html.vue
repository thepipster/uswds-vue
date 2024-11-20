<template><div><h1 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>Table</span></a></h1>
<p>For displaying tabular data, <code v-pre>&lt;us-table&gt;</code>. <strong>Coming soon:</strong> support for pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data.</p>
<h2 id="fields-as-a-simple-array" tabindex="-1"><a class="header-anchor" href="#fields-as-a-simple-array"><span>Fields as a simple array</span></a></h2>
<p>Fields can be a simple array, for defining the order of the columns, and which columns to display:</p>
<p>Example: Using <code v-pre>array</code> fields definition</p>
<div class="mt-3 mb-3">
    <us-table 
        hover
        caption="Fields as a simple array"
        :items="[
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]">
    </us-table>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-table</span> </span>
<span class="line">    <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Fields as a simple array<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },</span>
<span class="line">        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },</span>
<span class="line">        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },</span>
<span class="line">        { age: 38, first_name: 'Jami', last_name: 'Carney' }</span>
<span class="line">    ]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fields-as-an-array-of-objects" tabindex="-1"><a class="header-anchor" href="#fields-as-an-array-of-objects"><span>Fields as an array of objects</span></a></h2>
<p>Fields can be a an array of objects, providing additional control over the fields (such as sorting, formatting, etc.). Only columns (keys) that appear in the fields array will be shown:</p>
<div class="mt-3 mb-3">
    <us-table 
        caption="Example: Using array of objects fields definition"
        striped 
        hover 
        :fields="[
                { key: 'last_name'},
                { key: 'first_name'},
                { key: 'age', label: 'Person age'}            
        ]" 
        :items="[
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]"
    >
    </us-table>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-table</span> <span class="token attr-name">striped</span> <span class="token attr-name">hover</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fields<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-table</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// Note 'isActive' is left out and will not appear in the rendered table</span></span>
<span class="line">            <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'last_name'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'first_name'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Person age'</span><span class="token punctuation">}</span>            </span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">first_name</span><span class="token operator">:</span> <span class="token string">'Dickerson'</span><span class="token punctuation">,</span> <span class="token literal-property property">last_name</span><span class="token operator">:</span> <span class="token string">'Macdonald'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token literal-property property">first_name</span><span class="token operator">:</span> <span class="token string">'Larsen'</span><span class="token punctuation">,</span> <span class="token literal-property property">last_name</span><span class="token operator">:</span> <span class="token string">'Shaw'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token literal-property property">first_name</span><span class="token operator">:</span> <span class="token string">'Geneva'</span><span class="token punctuation">,</span> <span class="token literal-property property">last_name</span><span class="token operator">:</span> <span class="token string">'Wilson'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token literal-property property">first_name</span><span class="token operator">:</span> <span class="token string">'Jami'</span><span class="token punctuation">,</span> <span class="token literal-property property">last_name</span><span class="token operator">:</span> <span class="token string">'Carney'</span> <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="borderless" tabindex="-1"><a class="header-anchor" href="#borderless"><span>Borderless</span></a></h2>
<p>To render a borderless table, add the prop <code v-pre>borderless</code>.</p>
<div class="mt-3 mb-3">
    <us-table 
        borderless
        :items="[
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]">
    </us-table>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-table</span> </span>
<span class="line">    <span class="token attr-name">borderless</span></span>
<span class="line">    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },</span>
<span class="line">        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },</span>
<span class="line">        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },</span>
<span class="line">        { age: 38, first_name: 'Jami', last_name: 'Carney' }</span>
<span class="line">    ]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-cell-rendering" tabindex="-1"><a class="header-anchor" href="#custom-cell-rendering"><span>Custom cell rendering</span></a></h2>
<p>Scoped field slots give you greater control over how the record data appears. You can use scoped slots to provided custom rendering for a particular field. If you want to add an extra field which does not exist in the records, just add it to the fields array, and then reference the field(s) in the scoped slot(s). Scoped field slots use the following naming syntax: <code v-pre>'cell(' + field key + ')'</code>.</p>
<p>Example: Custom data rendering with scoped slots</p>
<div class="mt-3 mb-3">
    <us-table :fields="fields" :items="items">
        <!-- A custom formatted column --> 
        <template v-slot:cell(name)="{cell}">
            <b class="text-info">{{ cell.last.toUpperCase() }}</b>, <b>{{ cell.first }}</b>
        </template>
        <!-- A virtual column -->
        <template #cell(index)="{index}">
            {{ index + 1 }}
        </template>
        <!-- A virtual composite column -->
        <template #cell(nameage)="{item}">
            {{ item.name.first }} is {{ item.age }} years old
        </template> 
    </us-table>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-table</span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fields<span class="token punctuation">"</span></span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- A custom formatted column --></span> </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>cell(name)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{cell}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ cell.last.toUpperCase() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>{{ cell.first }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- A virtual column --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#cell(index)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{index}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            {{ index + 1 }}</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- A virtual composite column --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#cell(nameage)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{row}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            {{ row.name.first }} is {{ row.age }} years old</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span> </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-table</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token comment">// A virtual column that doesn't exist in items</span></span>
<span class="line">                <span class="token string">'index'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// A column that needs custom formatting</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Full Name'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// A regular column</span></span>
<span class="line">                <span class="token string">'age'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// A regular column</span></span>
<span class="line">                <span class="token string">'sex'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// A virtual column made up from two fields</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'nameage'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'First name and age'</span> <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Doe'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'Male'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'Jane'</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Doe'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'Female'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'Rubin'</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Kincade'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'Male'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">73</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'Shirley'</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">'Partridge'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'Female'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">62</span> <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The slot's scope variable (data in the above sample) will have the following properties:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>index</td>
<td>Number</td>
<td>The row number (indexed from zero) relative to the displayed rows</td>
</tr>
<tr>
<td>item</td>
<td>Object</td>
<td>The entire raw record data (i.e. <code v-pre>items[index]</code>) for this row</td>
</tr>
<tr>
<td>key</td>
<td>String</td>
<td>The cell's column key</td>
</tr>
<tr>
<td>cell</td>
<td>Object</td>
<td>The raw data for this cell, i.e. <code v-pre>item[key]</code></td>
</tr>
</tbody>
</table>
<p><code v-pre>index</code> will not always be the actual row's index number, as it is computed after filtering, sorting and pagination have been applied to the original table data. The index value will refer to the displayed row number. This number will align with the indexes from the optional v-model bound variable.</p>
<p>When using the new Vue 2.6 v-slot syntax, note that slot names cannot contain spaces, and when using in-browser DOM templates the slot names will always be lower cased. To get around this, you can pass the slot name using Vue's dynamic slot names.</p>
</div></template>

<script>
export default {
    data() {
        return {
            fields: [
                // A virtual column that doesn't exist in items
                'index',
                // A column that needs custom formatting
                { key: 'name', label: 'Full Name' },
                // A regular column
                'age',
                // A regular column
                'sex',
                // A virtual column made up from two fields
                { key: 'nameage', label: 'First name and age' }
            ],
            items: [
                { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
                { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
                { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
                { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
            ]
        };
    }
};
</script>
