<template>
    <us-official-header />

    <us-header title="Kitchen Sink" :items="menu" v-model="selectedPage">
        <template #brand22>
            <div class="usa-logo__text">
                <SsaLogo/>
                SSA Agent
            </div>
        </template>
    </us-header>

    <us-container>
        <h1>USWDS Kitchen Sink | {{ selectedPage }}</h1>

        <div v-if="selectedPage == 'alerts'">
            <h4>Standard Alerts</h4>

            <us-alert v-for="variant in variants" :title="`${variant} status`" :variant="variant">
                Lorem ipsum dolor sit amet,
                <a class="us-link" href="javascript:void(0);">consectetur adipiscing</a>
                elit, sed do eiusmod.
            </us-alert>

            <h4 class="mt-3">Slim Alert</h4>

            <us-alert :is-slim="true" variant="info">This is a slim alert</us-alert>

            <us-alert is-slim no-icon variant="info">This is a slim alert, with no icon</us-alert>

            <h4>Tags</h4>

            <us-tag>Normal Tag</us-tag>
            <us-tag size="lg">Big Tag</us-tag>

            <hr />
        </div>

        <div v-if="selectedPage == 'buttons'">

            <div>
                <us-button
                    v-for="variant in [
                        'default',
                        'secondary',
                        'accent-cool',
                        'accent-warm',
                        'base',
                        'outline',
                        'inverse',
                        'unstyled',
                    ]"
                    :key="variant"
                    :variant="variant"
                >
                    {{ variant }}
                </us-button>
            </div>

            <div class="margin-top-3">
                <us-button variant="default" :loading="true"> Loading </us-button>
            </div>

            <div class="margin-top-3">
                <!--
                <us-form-group label='This is invalid' help-text='Your username should be 8-16 characters long' :valid="false" error="This is incorrect">
                    <us-form-input name='text1' />
                </us-form-group>
                <us-form-group label='This is valid' help-text='Your username should be 8-16 characters long' :valid="true" error="This is incorrect">
                    <us-form-input name='text1' />
                </us-form-group>
                <us-form-group label='This is indeterminate' help-text='Your username should be 8-16 characters long' :valid="null" error="This is incorrect">
                    <us-form-input name='text1' />
                </us-form-group>
                -->
                <us-form-input
                    name='text1'
                    help-text="This is some help text"
                    label="This is the label"
                    :rules="{required:true, alpha:true}"
                />
            </div>

            <div class="margin-top-3">
            </div>

        </div>
    </us-container>
</template>

<style lang="scss">
.usx-component {
    &.usa-header {
        //border-bottom: 1px solid #0b4778;
        -webkit-box-shadow: 0 4px 6px -6px #222;
        -moz-box-shadow: 0 4px 6px -6px #222;
        box-shadow: 0 4px 6px -6px #222;
    }
}
</style>
<script setup lang="ts">
import { ref } from 'vue';

import "../styles/uswds-3.11.0/js/uswds.js";
import SsaLogo from './icons/SsaLogo.vue';
import UsOfficialHeader from './header/UsOfficialHeader.vue'
import UsContainer from './layout/UsContainer.vue'
import UsHeader from './header/UsHeader.vue'
import UsTag from './UsTag.vue';
import UsAlert from './UsAlert.vue';
import UsButton from './UsButton.vue';

import VueUswds from 'vue-uswds/core' // Import only the core library.
import UsaTextInput from "vue-uswds/core";

//import UsForm from "./form/UsForm.vue";
//import UsFormGroup from "./form/UsFormGroup.vue";
import UsFormInput from "./form/UsFormInput.vue";

//import UsCard from "./UsCard.vue";

const variants = ['info', 'warning', 'success', 'error', 'emergency']

const selectedPage = ref<string>('buttons')

const menu = [
    {
        id: 'page1',
        text: 'Basic Components',
        children: [
            { id: 'alerts', text: 'Alerts' },
            { id: 'buttons', text: 'Buttons & Tags' },
        ],
    },
    { id: 'page3', text: 'Page 3' },
]
</script>
