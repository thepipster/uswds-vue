<template><h1 id="modal" tabindex="-1"><a class="header-anchor" href="#modal" aria-hidden="true">#</a> Modal <Badge type="green" text="extension"/></h1>
<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2>
<div class="mt-3 mb-3">    
    <us-modal v-model="showModal" title="A simple modal" @ok="" @cancel="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-modal>
    <us-button v-if="!showModal" variant="primary" @click="showModal = true">Show</us-button>
    <us-button v-else variant="primary" @click="showModal = false">Hide</us-button>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A simple modal<span class="token punctuation">"</span></span> <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-modal</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!showModal<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">v-else</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModal = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component Reference</h2>
<h3 id="us-modal" tabindex="-1"><a class="header-anchor" href="#us-modal" aria-hidden="true">#</a> <code>&lt;us-modal&gt;</code></h3>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
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
<td>show</td>
<td>boolean</td>
<td>false</td>
<td>This prop is used to hide and show the modal</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>'Confirm'</td>
<td>The modal title</td>
</tr>
<tr>
<td>btn-ok</td>
<td>string</td>
<td>'Ok'</td>
<td>The affirmative button content</td>
</tr>
<tr>
<td>btn-cancel</td>
<td>string</td>
<td>'Cancel'</td>
<td>The cancel button content</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| ok  | none | Emitted when the affirmative button is clicked |
| cancel  | none | Emitted when the cancel button is clicked |</p>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| title  | none | Content for the header slot |
| buttons  | onAffirmative, onCancel | Replace the standard buttons, passed the <code>onAffirmative</code> and <code>onCancel</code> functions|</p>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        onToggleModal(){
            this.showModal = !this.showModal;
            //this.$usxModal.show('#test-modal');
        }
    }
};
</script>
