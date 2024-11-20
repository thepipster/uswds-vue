<template><div><h1 id="typography" tabindex="-1"><a class="header-anchor" href="#typography"><span>Typography</span></a></h1>
<h2 id="font-family" tabindex="-1"><a class="header-anchor" href="#font-family"><span>Font Family</span></a></h2>
<p>Coming soon...</p>
<div>
    <h1>This is a H1</h1>
    <h2>This is a H2</h2>
    <h3>This is a H3</h3>
    <h4>This is a H4</h4>
    <p>This is a paragraph, p tag</p>
    <a href="#">This is a link</a>
</div>
<h2 id="text-colors" tabindex="-1"><a class="header-anchor" href="#text-colors"><span>Text colors</span></a></h2>
<p>You can set the text color using one of the variants with the css class <code v-pre>text-{variant}</code>. For example, <code v-pre>text-primary</code>.</p>
<div class="mt-3 mb-3">
    <div v-for="(variant,index) in btnVariants" :key="index" :class="`text-${variant}`">
        <h4 class="m-0 p-0">text-{{variant}}</h4>
    </div>
</div>
<h3 id="background-text-colors" tabindex="-1"><a class="header-anchor" href="#background-text-colors"><span>Background text colors</span></a></h3>
<p>If you use the <code v-pre>bg-{variant}</code> class to color the background, the font color will adapt so that it remains readable (unless you over-ride with a <code v-pre>text-{variant}</code> class).</p>
<div class="mt-3 mb-3">
    <div style="width:200px">
        <div v-for="(variant,index) in btnVariants" :key="index" class="mb-1">
            <h4 class="m-0 p-0" :class="`bg-${variant}`">bg-{{variant}}</h4>
        </div>
    </div>
</div>
</div></template>

<script>
export default {
    data() {
        return {
            txtShort: 'Lorem ipsum dolor sit amet, consectetur...',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                'white',
                'black'
            ]
        };
    }
}
</script>
