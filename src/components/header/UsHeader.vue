<template>
    <div class="usa-overlay"></div>

    <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
            <div class="usa-navbar">
                <div class="usa-logo">
                    <em class="usa-logo__text">
                        {{ title }}
                    </em>
                </div>

                <button type="button" class="usa-menu-btn">Menu</button>
            </div>

            <nav aria-label="Primary navigation" class="usa-nav">
                <button type="button" class="usa-nav__close">
                    <IconClose role="img" alt="Close" />
                </button>

                <ul class="usa-nav__primary usa-accordion">
                    <li v-for="item in menu" class="usa-nav__primary-item">
                        <!-- Display the top level menu -->

                        <button
                            v-if="item.children"
                            type="button"
                            :class="[
                                'usa-accordion__button usa-nav__link',
                                isSelected(item) ? 'usa-current' : '',
                            ]"
                            :aria-expanded="isSelected(item) ? true : false"
                            aria-controls="basic-nav-section-one"
                            @click="onSelect(item)"
                        >
                            <span>{{ item.title }}</span>
                        </button>

                        <!--
                        <a v-else href="javascript:void(0);"
                            :class="['usa-nav-link', isSelected(item) ? 'usa-current' : '']">
                            &lt;Simple link&gt;
                        </a>


                    -->

                        <router-link v-else-if="item.to"
                            :to="item.to"
                            @click="onSelect(item)"
                            :class="['usa-nav-link', isSelected(item) ? 'usa-current' : '']">
                            {{item.title}}
                        </router-link>

                        <a
                            v-else-if="item.href"
                            :href="item.href"
                            @click="onSelect(item)"
                            :class="['usa-nav-link', isSelected(item) ? 'usa-current' : '']"
                        >
                            {{ item.title }}
                        </a>

                        <!-- Display child menu drop-down, if the top-level menu is selected -->

                        <ul
                            v-if="item.children && isSelected(item)"
                            id="basic-nav-section-one"
                            class="usa-nav__submenu"
                        >
                            <li v-for="child in item.children" class="usa-nav__submenu-item">
                                <router-link v-if="child.to" :to="child.to">
                                    <span>{{ child.title }}</span>
                                </router-link>
                                <a v-else-if="child.href" :href="child.href">
                                    <span>{{ child.title }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <section aria-label="Search component">
                    <form class="usa-search usa-search--small" role="search">
                        <label class="usa-sr-only" for="search-field">Search</label>
                        <input class="usa-input" id="search-field" type="search" name="search" />
                        <button class="usa-button" type="submit">
                            <IconSearch class="usa-search__submit-icon" alt="Search" />
                        </button>
                    </form>
                </section>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
/**
 * USWDS alert component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
import { ref } from 'vue'
import { computed } from 'vue'
import IconClose from '../icons/IconClose.vue'
import IconSearch from '../icons/IconSearch.vue'

type MenuItem = {
    title: string
    to?: string
    href?: string
    children?: MenuItem[]
}

const selectedItem = ref<string>('')

function isSelected(item: MenuItem) {
    if (item.to) {
        return selectedItem.value == item.to
    } else if (item.href) {
        return selectedItem.value == item.href
    } else {
        return false
    }
}

function onSelect(item: MenuItem) {
    const val = item.to ? item.to : item.href

    if (!val) {
        selectedItem.value = ''
    } else if (selectedItem.value == val) {
        selectedItem.value = ''
    } else {
        selectedItem.value = val
    }
}

interface Props {
    title: string
    menu: MenuItem[]
}

const {
    title = 'Header',
    menu = [
        {
            to: 'page1',
            title: 'Page 1',
            children: [
                { href: '/page1/page1-1', title: 'Page 1 - 1' },
                { href: '/page1/page1-2', title: 'Page 1 - 2' },
                { href: '/page1/page1-3', title: 'Page 1 - 3' },
            ],
        },
        {
            to: 'page2',
            title: 'Page 2',
            children: [
                { href: '/page1/page2-1', title: 'Page 2 - 1' },
                { to: 'page22', title: 'Page 2 - 2' },
                { href: '/page1/page2-3', title: 'Page 2 - 3' },
            ],
        },
        { href: '/page3', title: 'Page 3' },
    ],
} = defineProps<Props>()
/*
const props = defineProps({
    title: {
        type: String,
        default: 'Title',
    },
    menu: MenuItem[],
    variant: {
        type: String,
        default: 'light',
    },
    fluid: {
        type: String,
        default: 'none',
    }
});
*/
</script>

<style lang="scss">
/*
// Layer in some styles to help standardize
.usa-nav-container {
    &.fluid {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    &.fluid-full {
        max-width: 100% !important;
    }

    &.fluid-sm {
        //max-width: map-get($grid-breakpoints, 'sm');
    }

    &.fluid-md {
        //max-width: map-get($grid-breakpoints, 'md');
    }

    &.fluid-lg {
        //max-width: map-get($grid-breakpoints, 'lg');
    }

    &.fluid-xl {
        ///max-width: map-get($grid-breakpoints, 'xl');
    }
}
    */
</style>
