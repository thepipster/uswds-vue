<template><div><h1 id="button" tabindex="-1"><a class="header-anchor" href="#button"><span>Button</span></a></h1>
<p>Custom <code v-pre>&lt;us-button&gt;</code> component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, as well as programtic navigation.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<us-button variant="primary" class="mt-4">This is a button</us-button><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    This is a button</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>Links</span></a></h2>
<p>The component has built-in support href, simply add a href property to use;</p>
<us-button variant="info" href="https://news.bbc.co.uk" target="_blank" class="mb-1">Go somewhere</us-button><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://news.bbc.co.uk<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Go somewhere</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="focus-indication" tabindex="-1"><a class="header-anchor" href="#focus-indication"><span>Focus Indication</span></a></h2>
<p>USWDS, by default, applies a blue rectangle around a button to show focus. This can break some UI, so you have the option to toggle this on or off. But be mindful of accessability implications.</p>
<div class="mt-3 mb-3">
    <us-button variant="primary" :no-focus="false">Click me to see focus indicator</us-button>
    <us-button variant="primary" :no-focus="true">Click me, but you won't see that focus indicator</us-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:no-focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>click me to see focus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:no-focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>click me, but you won't see focus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="progmatic-navigation" tabindex="-1"><a class="header-anchor" href="#progmatic-navigation"><span>Progmatic navigation</span></a></h2>
<p>The component has built-in support for <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-router</a>, simply add a <code v-pre>to</code> property to any button such as;</p>
<div class="mt-3 mb-3">
<us-button variant="danger" :to="{name: 'nowhere'}" class="mb-1">Go somewhere</us-button>
<us-button variant="link" :to="{name: 'nowhere'}" class="mb-1">Go somewhere with a link variant</us-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name: 'nowhere'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Take me home</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes"><span>Sizes</span></a></h2>
<p>There are 3 button sizes; small, regular and large. This is controlled by adding the prop <code v-pre>size</code> with values of <code v-pre>lg</code>, <code v-pre>sm</code> or just omit for a regular size button.</p>
<div class="mt-3 mb-3">
    <us-button variant="primary" size="sm" class="mb-1">A small button</us-button>
    <us-button variant="primary" class="mb-1">A regular size button</us-button>
    <us-button variant="primary" size="lg" class="mb-1">A large button</us-button>
</div>
<h2 id="loading-animation" tabindex="-1"><a class="header-anchor" href="#loading-animation"><span>Loading animation</span></a></h2>
<p>Set the <code v-pre>isLoading</code> property to display a loading spinner, this will also put the button into a disabled state so it can not be clicked again.</p>
<div class="mt-3 mb-3">
<us-button variant="primary" class="mr-3" :is-loading="isLoading">Submit</us-button>
<us-button size="sm" variant="link" @click="isLoading = !isLoading">Toggle Loading Flag</us-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:is-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Submit</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- Button to toggle isLoading flag for testing --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading = !isLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Toggle Loading Flag</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants"><span>Contextual variants</span></a></h2>
<p>For proper styling of <code v-pre>&lt;us-button&gt;</code>, use one of the contextual variants by setting the variant prop to one of the following: primary,
secondary,info, success, danger, warning, outline-primary, outline-secondary, outline-info, outline-success, outline-danger,
outline-warning, inverse, link. The default is info.</p>
<div class="mt-3 mb-3">
    <!--<us-button v-for="variant in btnVariants" :key="variant" :variant="variant" class="mr-2 mb-1">{{variant}}</us-button>-->
    <div>
        <us-button variant="primary" class="mr-1 mb-2">Primary</us-button>
        <us-button variant="secondary" class="mr-1 mb-2">Secondary</us-button>
        <us-button variant="info" class="mr-1 mb-2">info</us-button>
        <us-button variant="success" class="mr-1 mb-2">success</us-button>
        <us-button variant="danger" class="mr-1 mb-2">danger</us-button>
        <us-button variant="warning" class="mr-1 mb-2">warning</us-button>
        <us-button variant="dark" class="mr-1 mb-2">dark</us-button>
        <us-button variant="light" class="mr-1 mb-2">light</us-button>
    </div>
    <div>
        <us-button variant="outline-primary" class="mr-1 mb-2">outline-primary</us-button>
        <us-button variant="outline-secondary" class="mr-1 mb-2">outline-secondary</us-button>
        <us-button variant="outline-info" class="mr-1 mb-2">outline-info</us-button>
        <us-button variant="outline-success" class="mr-1 mb-2">outline-success</us-button>
        <us-button variant="outline-danger" class="mr-1 mb-2">outline-danger</us-button>
        <us-button variant="outline-warning" class="mr-1 mb-2">outline-warning</us-button>
        <us-button variant="outline-dark" class="mr-1 mb-2">outline-dark</us-button>
        <us-button variant="outline-light" class="mr-1 mb-2">outline-light</us-button>
    </div>
    <div>
        <us-button variant="link" class="mb-1 mb-1">A link</us-button>
    </div>
</div>
<h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-button" tabindex="-1"><a class="header-anchor" href="#us-button"><span><code v-pre>&lt;us-button&gt;</code></span></a></h3>
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
<td>info</td>
<td>Applies one of the contextual color variants</td>
</tr>
<tr>
<td>block</td>
<td>string</td>
<td>null</td>
<td>Creates the button as a block element</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>'button'</td>
<td>Sets the type, such as 'button' or 'submit'</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>null</td>
<td>Sets the title prop, for hover over text</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>null</td>
<td>The size, supports 'lg' and omit for normal</td>
</tr>
<tr>
<td>aria-expanded</td>
<td>string</td>
<td>null</td>
<td>Support for arial-expanded</td>
</tr>
<tr>
<td>aria-controls</td>
<td>string</td>
<td>null</td>
<td>Support for arial-controls</td>
</tr>
<tr>
<td>aria-Label</td>
<td></td>
<td>string</td>
<td>null</td>
</tr>
<tr>
<td>no-focus</td>
<td>boolean</td>
<td>true</td>
<td>Turn focus indication on or off</td>
</tr>
<tr>
<td>href</td>
<td>string</td>
<td>null</td>
<td>If set, creates a link</td>
</tr>
<tr>
<td>target</td>
<td>string</td>
<td>null</td>
<td>If href is set, this can be one of the href targets so as '_self'</td>
</tr>
<tr>
<td>to</td>
<td>string/object</td>
<td>null</td>
<td>Support for vue-router programtic navigation</td>
</tr>
<tr>
<td>disabled</td>
<td>boolean</td>
<td>null</td>
<td>Disables button</td>
</tr>
<tr>
<td>is-loading</td>
<td>boolean</td>
<td>false</td>
<td>If set, display a loading animation and disable button</td>
</tr>
</tbody>
</table>
</div></template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'outline-primary',
                'outline-secondary',
                'outline-info',
                'outline-success',
                'outline-danger',
                'outline-warning',
                'outline-light',
                'outline-dark'             
            ]
        };
    }
}
</script>
