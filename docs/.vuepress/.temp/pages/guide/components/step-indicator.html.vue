<template><div><h1 id="step-indicator" tabindex="-1"><a class="header-anchor" href="#step-indicator"><span>Step Indicator</span></a></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2>
<p>A step indicator updates users on their progress through a multi-step process.</p>
<div class="mb-3 mt-3">
    <us-step-indicator :step="step" :steps="steps"/>
    <div>
        <p>Test it!</p>
        <us-button variant="primary" size="sm" @click="onPrev()"><i class="fas fa-chevron-circle-left"></i> Prev</us-button>
        <us-button variant="primary" size="sm" @click="onNext()"><i class="fas fa-chevron-circle-right"></i> Next</us-button>
    </div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> </span>
<span class="line">    <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">        'Personal information', </span>
<span class="line">        'Household status', </span>
<span class="line">        'Supporting documents', </span>
<span class="line">        'Signature', </span>
<span class="line">        'Review and submit']<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels"><span>Labels</span></a></h2>
<p>You can opt to display the page labels.</p>
<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="true"/><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="step-numbers" tabindex="-1"><a class="header-anchor" href="#step-numbers"><span>Step Numbers</span></a></h2>
<p>Display the the step numbers.</p>
<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="true" :show-step-numbers="true"/><us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="false" :show-step-numbers="true"/><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-step-numbers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">:show-step-numbers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes"><span>Sizes</span></a></h3>
<p>Change the step number sizes with the <code v-pre>size</code> prop.</p>
<us-step-indicator class="mb-3 mt-3" size="sm" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/><us-step-indicator class="mb-3 mt-3" size="lg" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:show-step-numbers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:show-step-numbers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="center-labels" tabindex="-1"><a class="header-anchor" href="#center-labels"><span>Center Labels</span></a></h2>
<p>Center the step labels with a <code v-pre>center-labels</code> prop.</p>
<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :center-labels="true" :show-labels="true" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-step-indicator</span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step<span class="token punctuation">"</span></span> <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span> <span class="token attr-name">:center-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:show-labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-step-indicator" tabindex="-1"><a class="header-anchor" href="#us-step-indicator"><span><code v-pre>&lt;us-step-indicator&gt;</code></span></a></h3>
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
<td>show-labels</td>
<td>boolean</td>
<td>false</td>
<td>Show page title labels</td>
</tr>
<tr>
<td>center-labels</td>
<td>boolean</td>
<td>false</td>
<td>Center page title labels</td>
</tr>
<tr>
<td>show-step-numbers</td>
<td>boolean</td>
<td>false</td>
<td>Show the page step numbers</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>'sm'</td>
<td>The size of the page step numbers, can be 'sm' or 'lg'</td>
</tr>
<tr>
<td>step</td>
<td>number</td>
<td>0</td>
<td>The current step (0 referenced)</td>
</tr>
<tr>
<td>steps</td>
<td>array</td>
<td>null</td>
<td>An array of step titles, can be a simple array of strings or array of objects with a title key</td>
</tr>
</tbody>
</table>
</div></template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            step: 1,
            steps: [
                'Personal information', 'Household status', 'Supporting documents', 'Signature', 'Review and submit'
            ]
        };
    },
    methods: {
        onNext(){
            if (this.step < this.steps.length-1){
                this.step += 1;
            }
            else {
                this.step = 0;
            }
        },
        onPrev(){
            if (this.step > 0){
                this.step -= 1;
            }
            else {
                this.step = this.steps.length-1;
            }
        }
    }
}
</script>
