<template><div><h1 id="card" tabindex="-1"><a class="header-anchor" href="#card"><span>Card</span></a></h1>
<div class="mt-3 mb-3" style="width: 18rem;">
    <us-card title="This is the title" sub-title="Sub title" class="mb-2">This is a card with some content.</us-card>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This is the title<span class="token punctuation">"</span></span> <span class="token attr-name">sub-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sub title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    This is a card with some content.</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-title-footer-using-slots" tabindex="-1"><a class="header-anchor" href="#custom-title-footer-using-slots"><span>Custom Title &amp; Footer using slots</span></a></h2>
<p>Add custom html content using the <code v-pre>title</code>, and  <code v-pre>footer</code> slots. See the VueJS docs on slots <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank" rel="noopener noreferrer">here</a></p>
<div class="mt-3 mb-3">
    <us-card class="m-2" title="This is a card with a custom footer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>
</div>
<div class="mt-3 mb-3">
    <us-card class="m-2">
        <template #title>
            <h2>A <i>custom</i> <i class="fas fa-rocket"></i> html title</h2>
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>A <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>custom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-rocket<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> html title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
<span class="line">    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </span>
<span class="line">    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </span>
<span class="line">    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>Visit Florida Keys<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images"><span>Images</span></a></h2>
<h3 id="vertical-image-placement" tabindex="-1"><a class="header-anchor" href="#vertical-image-placement"><span>Vertical Image Placement</span></a></h3>
<p>Set the <code v-pre>img-pos</code> prop to either <code v-pre>top</code> or <code v-pre>bottom</code> for vertical image placement.</p>
<div class="mt-3 mb-3">    
    <us-row>
        <us-col>
            <us-card 
                title="Card with media" 
                subTitle="Image Top"
                img-src="https://www.fillmurray.com/640/360"
                img-pos="top"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
                <template #footer>
                    <us-button variant="primary" block>Visit Florida Keys</us-button>
                </template>
            </us-card>         
        </us-col>
        <us-col>
            <us-card 
                title="Card with media" 
                subTitle="Image Bottom"
                img-src="https://www.fillmurray.com/640/360"
                img-pos="bottom"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
                <template #footer>
                    <us-button variant="primary" block>Visit Florida Keys</us-button>
                </template>
            </us-card>           
        </us-col>
    </us-row>  
</div>
<h3 id="horizontal-image-placement" tabindex="-1"><a class="header-anchor" href="#horizontal-image-placement"><span>Horizontal Image Placement</span></a></h3>
<p>Likewise, set the <code v-pre>img-pos</code> prop to either <code v-pre>left</code> or <code v-pre>right</code> for vertical image placement.</p>
<div class="mt-3 mb-3">
    <us-row>
        <us-col>
            <us-card 
                title="Card with media" 
                subTitle="Image Left"
                img-src="https://www.fillmurray.com/640/360"
                img-pos="left"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
                <template #footer>
                    <us-button variant="primary" block>Visit Florida Keys</us-button>
                </template>
            </us-card>           
        </us-col>
        <us-col>
            <us-card 
                title="Card with media" 
                subTitle="Image Right"
                img-src="https://www.fillmurray.com/640/360"
                img-pos="right"
            >
                <template #header>
                    Flag Card
                </template>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
                <template #footer>
                    <us-button variant="primary" block>Visit Florida Keys</us-button>
                </template>
            </us-card>         
        </us-col>
    </us-row>
</div>
<h2 id="card-groups-and-grids" tabindex="-1"><a class="header-anchor" href="#card-groups-and-grids"><span>Card Groups and Grids</span></a></h2>
<p>As <code v-pre>uswds-vue</code> is built on bootstrap now, you can directly use bootstrap to easily group your cards. For example, creating a grid or group is easy and you can see how in the following examples. For more information, see Bootstrap docs on Cards <a href="https://getbootstrap.com/docs/5.1/components/card/" target="_blank" rel="noopener noreferrer">here</a></p>
<h3 id="card-group" tabindex="-1"><a class="header-anchor" href="#card-group"><span>Card Group</span></a></h3>
<div class="card-group">
    <us-card 
        title="Card with media" 
        img-src="https://www.fillmurray.com/640/360"
        img-pos="top"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>                    
    </us-card>   
    <us-card 
        title="Simple card" 
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>                    
    </us-card>           
    <us-card 
        title="Another Simple card" 
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>        
    </us-card>  
  </div>
</div>
<h3 id="card-grid" tabindex="-1"><a class="header-anchor" href="#card-grid"><span>Card Grid</span></a></h3>
<p>Use the Bootstrap grid system and its <code v-pre>.row-cols</code> classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code v-pre>.row-cols-1</code> laying out the cards on one column, and <code v-pre>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</p>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="https://www.fillmurray.com/640/360"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="https://www.fillmurray.com/640/360"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="https://www.fillmurray.com/640/360"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="https://www.fillmurray.com/640/360"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row row-cols-1 row-cols-md-2 g-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span> </span>
<span class="line">        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card in a grid<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.fillmurray.com/640/360<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span> </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span> </span>
<span class="line">        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card in a grid<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.fillmurray.com/640/360<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span> </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span> </span>
<span class="line">        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card in a grid<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.fillmurray.com/640/360<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span> </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-card</span> </span>
<span class="line">        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card in a grid<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">img-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.fillmurray.com/640/360<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-card</span><span class="token punctuation">></span></span> </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants"><span>Contextual variants</span></a></h2>
<div class="mt-3 mb-3">
    <us-card title="A basic card" class="my-2 " style="width: 18rem;">Default Card with <strong>no</strong> variant</us-card>
    <us-card title="A info card" variant="info" class="my-2 " style="width: 18rem;">Card with <strong>info</strong> variant</us-card>
    <us-card title="A primary card" variant="primary" class="my-2 " style="width: 18rem;">Card with <strong>primary</strong> variant</us-card>
    <us-card title="A secondary card" variant="secondary" class="my-2 " style="width: 18rem;">Card with <strong>secondary</strong> variant</us-card>
    <us-card title="A success card" variant="success" class="my-2 " style="width: 18rem;">Card with <strong>success</strong> variant</us-card>
    <us-card title="A warning card" variant="warning" class="my-2 " style="width: 18rem;">Card with <strong>warning</strong> variant</us-card>
    <us-card title="A danger card" variant="danger" class="my-2 " style="width: 18rem;">Card with <strong>danger</strong> variant</us-card>
    <us-card title="A light card" variant="light" class="my-2 " style="width: 18rem;">Card with <strong>light</strong> variant</us-card>
    <us-card title="A dark card" variant="dark" class="my-2 " style="width: 18rem;">Card with <strong>dark</strong> variant</us-card>
</div>
<h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-card" tabindex="-1"><a class="header-anchor" href="#us-card"><span><code v-pre>&lt;us-card&gt;</code></span></a></h3>
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
<td>title</td>
<td>string</td>
<td>null</td>
<td>The card title, or omit for none</td>
</tr>
<tr>
<td>variant</td>
<td>string</td>
<td>info</td>
<td>Applies one of the contextual color variants</td>
</tr>
<tr>
<td>img-src</td>
<td>string</td>
<td>null</td>
<td>Specify a image source</td>
</tr>
<tr>
<td>img-alt</td>
<td>string</td>
<td>null</td>
<td>Image alt text</td>
</tr>
<tr>
<td>img-pos</td>
<td>string</td>
<td>'top'</td>
<td>Specify the image position, can be one of; <code v-pre>top</code>, <code v-pre>left</code>, <code v-pre>right</code>, <code v-pre>bottom</code></td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| title  | none | Content for the header slot |
| footer  | none | Content for the footer slot |</p>
<h3 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h3>
<p>See <a href="https://designsystem.digital.gov/components/card/" target="_blank" rel="noopener noreferrer">Card documentation at USWDS</a>
See <a href="https://getbootstrap.com/docs/5.1/components/card/" target="_blank" rel="noopener noreferrer">Card documentation at Bootstrap</a></p>
</div></template>


