<template>
    <section class="usa-banner" aria-label="Official website of the United States government">
        <div class="usa-accordion">
            <header class="usa-banner__header">
                <div class="usa-banner__inner">
                    <div class="grid-col-auto">
                        <IconFlag aria-hidden="true" class="usa-banner__header-flag"/>
                    </div>
                    <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                        <p class="usa-banner__header-text">
                            An official website of the United States government
                        </p>
                        <p class="usa-banner__header-action">Here’s how you know</p>
                    </div>
                    <button
                        @click="isOpen = !isOpen"
                        type="button"
                        class="usa-accordion__button usa-banner__button"
                        aria-expanded="false"
                        aria-controls="gov-banner-default"
                    >
                        <span class="usa-banner__button-text">Here’s how you know</span>
                    </button>
                </div>
            </header>

            <div
                class="usa-banner__content usa-accordion__content"
                id="gov-banner-default"
                v-if="isOpen"
            >
                <div class="grid-row grid-gap-lg">
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <IconDotGov
                            class="usa-banner__icon usa-media-block__img"
                            role="img"
                            aria-hidden="true"
                        />
                        <div class="usa-media-block__body">
                            <p>
                                <strong>Official websites use .gov</strong><br />A
                                <strong>.gov</strong> website belongs to an official government
                                organization in the United States.
                            </p>
                        </div>
                    </div>
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <IconHttps
                            class="usa-banner__icon usa-media-block__img"
                            role="img"
                            aria-hidden="true"
                        />
                        <div class="usa-media-block__body">
                            <p>
                                <strong>Secure .gov websites use HTTPS</strong><br />A
                                <strong>lock</strong> (
                                <span class="icon-lock"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="52"
                                        height="64"
                                        viewBox="0 0 52 64"
                                        class="usa-banner__lock-image"
                                        role="img"
                                        aria-labelledby="banner-lock-description-default"
                                        focusable="false"
                                    >
                                        <title id="banner-lock-title-default">Lock</title>
                                        <desc id="banner-lock-description-default">
                                            Locked padlock icon
                                        </desc>
                                        <path
                                            fill="#000000"
                                            fill-rule="evenodd"
                                            d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                                        />
                                    </svg> </span
                                >) or <strong>https://</strong> means you’ve safely connected to the
                                .gov website. Share sensitive information only on official, secure
                                websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--




        <header class="usx-component usx-banner" aria-label="Official government website" :class="`bg-${variant}`">

            <us-container>

                <p class="usx-banner-text">
                    <icon-flag class="usx-flag"/>
                    An official website of the United States government
                    <span class="usx-banner-toggle" @click="isOpen = !isOpen">
                        Here’s how you know
                        <i v-if="!isOpen" class="fas fa-chevron-down"></i>
                        <i v-else class="fas fa-chevron-up"></i>
                    </span>
                </p>


                <div class="mt-2" v-if="isOpen">

                    <us-row fluid class="usx-banner-info-container">
                        <us-col>
                            <icon-dot-gov class="usx-banner-icon" />
                            <p class="usx-banner-info-text">
                                <strong>Official websites use {{domain}}</strong><br />
                                A <strong>{{domain}}</strong> website belongs to an official government organization in the United States.
                            </p>
                        </us-col>
                        <us-col>
                            <icon-https class="usx-banner-icon"/>
                            <p class="usx-banner-info-text">
                                <strong>Secure {{domain}} websites use HTTPS</strong><br />
                                A <strong>lock</strong> (<i class="fas fa-lock"></i>) or <strong>https://</strong> means you’ve safely connected to the {{domain}} website.
                                Share sensitive information only on official, secure websites.
                            </p>
                        </us-col>
                    </us-row>
                </div>

            </us-container>

        </header>

-->
</template>

<script setup>
import { ref } from 'vue'
import IconFlag from '../icons/IconFlag.vue'
import IconDotGov from '../icons/IconDotGov.vue'
import IconHttps from '../icons/IconHttps.vue'
//import TranslateMixin from '../../mixins/translation/TranslateMixin'

const isOpen = ref(false);

//const props = defineProps(['foo'])

defineProps({
    variant: {
        type: String,
        default: 'dark',
    },
    fluid: {
        type: String,
        default: 'none',
    },
    domain: {
        type: String,
        default: '.gov',
    },
    locale: {
        type: String,
        default: 'en', // "es", "es-XX"
    },
    translations: {
        type: Object,
        default() {
            return {
                en: {
                    title: 'An official website of the United States government',
                    subTitle: 'Official websites use',
                    home_1: 'website belongs to an official government organization in the United States',
                    link: 'Here’s how you know',
                },
                es: {
                    title: 'Un sitio oficial del Gobierno de Estados Unidos',
                    subTitle: 'Los sitios web oficiales usan',
                    home_1: 'pertenece a una organización oficial del Gobierno de Estados Unidos',
                    link: 'Así es como usted puede verificarlo',
                },
            }
        },
    }
});
</script>

<style lang="scss">
/*
.usx-banner {
    padding-top: 3px;
    padding-bottom: 3px;

    .usx-banner-icon {
        margin-top: 4px;
        width: 40px;
        height: 40px;
        float: left;
    }

    .fa-lock {
        font-size: 0.9em;
        margin-left: 2px;
        margin-right: 2px;
    }

    .usx-banner-text {
        margin-bottom: 0;
        margin-top: 0;
        font-size: 0.75rem;
        line-height: 1.2rem;

        .usx-flag {
            margin-bottom: 0.1rem;
            margin-right: 0.2rem;
            line-height: inherit;
            height: inherit;
        }

        .usx-banner-toggle {
            color: #adadad;
            text-decoration: underline;
            padding: 0px;
            padding-left: 8px;
            &:hover {
                color: #ccc;
            }
        }
    }

    &.bg-dark {
        color: white;
    }

    .usx-banner-info-text {
        padding-left: 50px;
        font-size: 0.94rem;
    }
}
*/


/*
@import "../../styles/variables.scss";

.usa-banner {
    .usa-banner__button-text,
    .usa-banner__button,
    .usa-banner__button-text {
        color: inherit !important;
        &::after {
            background-color: gray !important;
        }
    }

}

.usa-banner__inner {

    &.fluid-full {
        max-width: 100% !important;
    }

    &.fluid-sm {
        max-width: map-get($grid-breakpoints, "sm");
    }

    &.fluid-md {
        max-width: map-get($grid-breakpoints, "md");
    }

    &.fluid-lg {
        max-width: map-get($grid-breakpoints, "lg");
    }

    &.fluid-xl {
        max-width: map-get($grid-breakpoints, "xl");
    }
}

*/
</style>
