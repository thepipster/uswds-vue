<template><div><h1 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>Image <Badge type="green" text="extension"/></span></a></h1>
<p>The <code v-pre>&lt;us-img&gt;</code> provides convenience features for handling images, including responsive behavior (so they never become larger than their parent elements), and optionally adding lightweight styles to them via props.</p>
<p>Thes image components support rounded images, thumbnail styling, alignment, and even the ability to create blank images with an optional solid background color.</p>
<h2 id="responsive-images" tabindex="-1"><a class="header-anchor" href="#responsive-images"><span>Responsive Images</span></a></h2>
<p>Images can be made responsive with the <code v-pre>fluid</code> prop (which sets <code v-pre>max-width: 100%; height: auto;</code>) so that it scales with the parent element - up to the maximum native width of the image.</p>
<div class="mt-5 mus-5">
    <us-img fluid :src="getRandomUrl(1024, 400)" alt="responsive image"/>
</div>
<p>You can also allow an image to grow to the maxium width, but no more, using the <code v-pre>fluid-grow</code> prop. This may result in blurry images if the image has to scale up too far.</p>
<div class="mt-5 mus-5">
    <us-img fluid-grow :src="getRandomUrl(1024, 400)" alt="responsive image"/>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">fluid</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/250/250<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>responsive image<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">fluid-grow</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://picsum.photos/1024/400<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>responsive image<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading"><span>Lazy Loading</span></a></h2>
<p>You can turn on lazy loading by adding a <code v-pre>lazy</code> prop. This will load images in the background and use a blank placeholder image until the image is loaded. The images
are only loaded when the <code v-pre>&lt;img&gt;</code> component is in the view. This can be a hugh performance gain, so recommended.</p>
<p>If possible, set the <code v-pre>width</code> and <code v-pre>height</code> to an absolute value so the background image will be the same size as the image when it loads in.</p>
<p>You can modify the color of the place holder image with the <code v-pre>blankColor</code> prop, setting it to any valid css color, e.g. <code v-pre>blank-color=&quot;#8180B2&quot;</code> or <code v-pre>blank-color=&quot;rgba(120,0,100, 0.5)&quot;</code></p>
<us-img lazy fluid :src="getRandomUrl(5000, 800)" blank-color="#8180B2" width="5000px" height="800px" alt="responsive image"/><h2 id="thumbnails" tabindex="-1"><a class="header-anchor" href="#thumbnails"><span>Thumbnails</span></a></h2>
<p>You can use prop <code v-pre>thumbnail</code> to give an image a rounded light border appearance.</p>
<div class="mt-5 mus-5">
    <us-container fluid class="p-4 bg-dark">
        <us-row>
            <us-col>
                <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 1"></us-img>
            </us-col>
        <us-col>
            <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 2"></us-img>
        </us-col>
        <us-col>
            <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 3"></us-img>
        </us-col>
    </us-row>
</us-container>
</div>
<h2 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color"><span>Background color</span></a></h2>
<us-img blankColor='#777' class="m1" rounded alt="Rounded image"></us-img><h2 id="rounder-corners" tabindex="-1"><a class="header-anchor" href="#rounder-corners"><span>Rounder corners</span></a></h2>
<p>You can control which corners are rounded by setting the rounded prop to one of the following values:</p>
<ul>
<li><code v-pre>true</code> (or prop present with no value): round all corners</li>
<li><code v-pre>false</code> (or prop not present): no explicit rounding or corners (default)</li>
<li><code v-pre>top</code>: round the top corners</li>
<li><code v-pre>right</code>: round the right corners</li>
<li><code v-pre>bottom</code>: round the bottom corners</li>
<li><code v-pre>left</code>: round the left corners</li>
<li><code v-pre>circle</code>: make a circle (if square image) or oval (if not square) border</li>
<li><code v-pre>0,1,2 or 3</code>: explicitly set the relative width of rounded corners. 0 removes them.</li>
</ul>
<div class="mt-5 mus-5">
    <us-img v-bind="mainProps" rounded alt="Rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="top" alt="Top-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="right" alt="Right-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="bottom" alt="Bottom-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="left" alt="Left-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="circle" alt="Circle image"></us-img>
    <us-img v-bind="mainProps" rounded="0" alt="Not rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="1" alt="Rounded 1"></us-img>
    <us-img v-bind="mainProps" rounded="2" alt="Rounded 2"></us-img>
    <us-img v-bind="mainProps" rounded="3" alt="Rounded 32"></us-img>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Top-rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Right-rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Bottom-rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Left-rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Circle image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Not rounded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rounded 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rounded 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-img</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mainProps<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Rounded 32<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-img</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">mainProps</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">blank</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">blankColor</span><span class="token operator">:</span> <span class="token string">'#777'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'75px'</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'75px'</span><span class="token punctuation">,</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'m1'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-img" tabindex="-1"><a class="header-anchor" href="#us-img"><span><code v-pre>&lt;us-img&gt;</code></span></a></h3>
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
<td>src</td>
<td>string</td>
<td>null</td>
<td>This image source</td>
</tr>
<tr>
<td>alt</td>
<td>string</td>
<td>null'</td>
<td>The image alt text</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>null</td>
<td>The image width, e.g. '50px'</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>null</td>
<td>The image height, e.g. '50px'</td>
</tr>
<tr>
<td>fluid</td>
<td>boolean</td>
<td>false</td>
<td>Make image responsive, i.e. max-width of 100%</td>
</tr>
<tr>
<td>fluid-grow</td>
<td>boolean</td>
<td>false'</td>
<td>Make image responsive, but grow to maximum width</td>
</tr>
<tr>
<td>rounded</td>
<td>boolean</td>
<td>string</td>
<td>false</td>
</tr>
<tr>
<td>thumbnaill</td>
<td>boolean</td>
<td>false</td>
<td>Appy styles for thumbnail (set a border)</td>
</tr>
<tr>
<td>blank-color</td>
<td>string</td>
<td>'rgba(50,50,50,0.1)'</td>
<td>Set the background color when the image is blank</td>
</tr>
<tr>
<td>lazy</td>
<td>boolean</td>
<td>false</td>
<td>Lazy load image</td>
</tr>
</tbody>
</table>
</div></template>

<script>
    
export default {
    data() {
        return {
            mainProps: { blank: true, blankColor: '#777', width: '75px', height: '75px', class: 'm1' }
        };
    },
    methods: {
        getRandomInt(){
            return 1 + Math.floor(Math.random() * 400);            
        },
        getRandomUrl(width, height){
            return `https://picsum.photos/${width}/${height}/?cb=${this.getRandomInt()}`;
        }
    }
}
</script>
