<template><div><h1 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>Alert</span></a></h1>
<p>An alert keeps users informed of important and sometimes time-sensitive changes.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<us-alert show dismissible title="Info">This is a info message</us-alert><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-alert</span> <span class="token attr-name">show</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    This is a info message</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-alert</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alert-size" tabindex="-1"><a class="header-anchor" href="#alert-size"><span>Alert Size</span></a></h2>
<us-alert show variant="info" size="sm" class="mb-3">This is a small alert</us-alert><us-alert show variant="info" class="mb-3">This is a normal size alert</us-alert><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-alert</span> <span class="token attr-name">show</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    This is a small alert</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-alert</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-alert</span> <span class="token attr-name">show</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    This is a normal size alert</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-alert</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="no-icon" tabindex="-1"><a class="header-anchor" href="#no-icon"><span>No Icon</span></a></h2>
<us-alert show variant="info" no-icon>This is a alert with no icon</us-alert><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-alert</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">no-icon</span><span class="token punctuation">></span></span></span>
<span class="line">    This is a alert with no icon</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-alert</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contextual-variants" tabindex="-1"><a class="header-anchor" href="#contextual-variants"><span>Contextual variants</span></a></h2>
<p>For proper styling of <code v-pre>&lt;us-alert&gt;</code>, use one of the contextual variants by setting the variant prop to one of the following: info, success, warning or danger. The default is info.</p>
<span v-for="(variant,index) in ['info','primary','success','danger','warning']" :key="index">
    <us-alert show :variant="variant" class="mb-0 mt-0">This is a <strong>{{variant}}</strong> message</us-alert><br/>
</span>
<h2 id="dismissible-alerts" tabindex="-1"><a class="header-anchor" href="#dismissible-alerts"><span>Dismissible alerts</span></a></h2>
<p>Using the <code v-pre>dismissible</code> prop it's possible to dismiss any <code v-pre>&lt;us-alert&gt;</code> inline. This will add a close X button. Use the dismiss-label prop to change the hidden label text associated with the dismiss button.</p>
<div class="mt-3 mb-3">
    <us-alert :show="showAlert1" variant="danger" dismissible @onDismissed="onDismissed(1)">You can dismiss this alert</us-alert>
    <b-button class="mt-1" variant="primary" @click="showAlert1 = true" v-if="!showAlert1">Show</b-button>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>us-alert</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showAlert<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">dismissible</span> <span class="token attr-name">@onDismissed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onDismissed(1)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>You can dismiss this alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>us-alert</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-1<span class="token punctuation">"</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>variant = true<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!variant<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">showAlert</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">onDismissed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>showAlert <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span>        </span>
<span class="line">    <span class="token punctuation">}</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="when-to-use-the-alert-component" tabindex="-1"><a class="header-anchor" href="#when-to-use-the-alert-component"><span>When to use the alert component <Badge text="uswds"/></span></a></h2>
<p><strong>System status messages.</strong> As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.</p>
<p><strong>Validation messages.</strong> As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.</p>
<h2 id="when-to-consider-something-else" tabindex="-1"><a class="header-anchor" href="#when-to-consider-something-else"><span>When to consider something else <Badge text="uswds"/></span></a></h2>
<p><strong>Long forms.</strong> On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.</p>
<p><strong>Destructive actions.</strong> If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.</p>
<h2 id="usability-guidance" tabindex="-1"><a class="header-anchor" href="#usability-guidance"><span>Usability guidance <Badge text="uswds"/></span></a></h2>
<p><strong>Consider next steps.</strong> When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.</p>
<p><strong>Be polite.</strong> Be polite in error messages — don’t blame the user.</p>
<p><strong>Alerts are an opportunity.</strong> Users will read a message that helps them resolve an error even if they generally won’t read documentation; include some educational material in your error message.</p>
<p><strong>Don’t overdo it</strong>. Too many notifications will either overwhelm or annoy the user and are likely to be ignored.</p>
<p><strong>Allow a user to dismiss a notification wherever approp+iate.</strong></p>
<p><strong><strong><strong>Understand the user’s context.</strong> </strong></strong> Don’t include notifications that aren’t related to the user’s current goal.</p>
<h2 id="vanilla-html" tabindex="-1"><a class="header-anchor" href="#vanilla-html"><span>Vanilla HTML</span></a></h2>
<p>And of course, as this component is built from Bootstrap you can just use vanilla html if you like.</p>
<div class="usx-component alert alert-info" role="alert">
  A simple primary alert—check it out!
</div>
<div class="usx-component alert alert-info d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle" ></i>
    <div>A simple primary alert—check it out!</div>
</div>
<div class="usx-component alert alert-info d-flex align-items-start" role="alert">
    <h4><i class="fas fa-exclamation-triangle"></i></h4>
    <div>
        <h4 class="p-0 m-0">Example Title</h4>
        An example alert with an icon
    </div>
</div>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-primary<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  A simple primary alert—check it out!</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-primary d-flex align-items-start<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-exclamation-triangle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        An example alert with an icon</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>usx-component alert alert-info d-flex align-items-start<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-exclamation-triangle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-0 m-0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Example Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span></span>
<span class="line">        An example alert with an icon</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference"><span>Component Reference</span></a></h2>
<h3 id="us-alert" tabindex="-1"><a class="header-anchor" href="#us-alert"><span><code v-pre>&lt;us-alert&gt;</code></span></a></h3>
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
<td>no-icon</td>
<td>boolean</td>
<td>false</td>
<td>When set, do not display a icon</td>
</tr>
<tr>
<td>no-border</td>
<td>boolean</td>
<td>false</td>
<td>When set, no border is rendered</td>
</tr>
<tr>
<td>dismissible</td>
<td>boolean</td>
<td>false</td>
<td>When set, the modal will display a <code v-pre>x</code> button for dismissig the modal</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td>lg</td>
<td>Specify the size, can be 'lg' or 'sm'</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>none</td>
<td>Set a title for the alert</td>
</tr>
<tr>
<td>show</td>
<td>boolean</td>
<td>true</td>
<td>Use to dynamically hide or show the alert</td>
</tr>
<tr>
<td>time</td>
<td>number</td>
<td>null</td>
<td>If set, the alert will auto-dismiss after this many seconds</td>
</tr>
<tr>
<td>show-countdown</td>
<td>boolean</td>
<td>false</td>
<td>If <code v-pre>time</code> is set, this will turn on a progress bar to show the countdown</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3>
<p>| Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| is-dismissed  | none | Called when the alert is dismissed. |</p>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p>| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- |
| title  | none | Content for the header slot |</p>
<h3 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h3>
<p>See <a href="https://designsystem.digital.gov/components/alert/" target="_blank" rel="noopener noreferrer">Alert documentation at USWDS</a></p>
</div></template>

<script>
export default {
    data() {
        return {
            showAlert1: true,
            showAlert2: true
        };
    },
    methods: {
        onDismissed(val){
            if (val == 2){
                this.showAlert2 = false;
            }
            else {
                this.showAlert1 = false;
            }
        }        
    }    
};
</script>
