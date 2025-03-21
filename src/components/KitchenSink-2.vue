<template>

    <UsOfficialHeader />

    <UsHeader title="Kitchen Sink" :menu="menu"/>

    <us-container>

        <h1>USWDS Kitchen Sink</h1>

        <h4>Standard Alerts</h4>

        <us-alert v-for="variant in variants"
            :title="`${variant} status`"
            :variant="variant">
            Lorem ipsum dolor sit amet,
                <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a>
                elit, sed do eiusmod.
        </us-alert>

        <h4 class="mt-3">Slim Alert</h4>

        <us-alert :is-slim="true" variant="info">This is a slim alert</us-alert>

        <us-alert is-slim no-icon variant="info">This is a slim alert, with no icon</us-alert>

        <hr/>

        <us-tag>Normal Tag</us-tag>
        <us-tag size="lg">Big Tag</us-tag>

        <hr/>

        <us-form>

        </us-form>

    </us-container>


</template>

<style lang="scss"></style>

<script setup lang="ts">
import UsForm from "./form/UsForm.vue";
import UsHeader from "./header/UsHeader.vue";
import UsOfficialHeader from "./header/UsOfficialHeader.vue";
import UsTag from "./UsTag.vue";
import UsAlert from './UsAlert.vue';
import UsContainer from "./layout/UsContainer.vue";
import UsCol from "./layout/UsCol.vue";
import UsRow from "./layout/UsRow.vue";

const variants = ["info", "warning", "success", "error", "emergency"];

const menu = [
    {to: 'page1', title: 'Page 1', children: [
        {href: '/page1/page1-1', title: 'Page 1 - 1'},
        {href: '/page1/page1-2', title: 'Page 1 - 2'},
        {href: '/page1/page1-3', title: 'Page 1 - 3'},
    ]},
    {to: 'page2', title: 'Page 2', children: [
        {href: '/page1/page2-1', title: 'Page 2 - 1'},
        {to: 'page22', title: 'Page 2 - 2'},
        {href: '/page1/page2-3', title: 'Page 2 - 3'},
    ]},
    {to: 'page3', title: 'Page 3'}
];

</script>
