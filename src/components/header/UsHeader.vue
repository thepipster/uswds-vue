<template>

    <header class="usx-component usa-header usa-header--basic">

        <div class="usa-nav-container">

            <div class="usa-navbar">

                <div class="usa-logo">

                    <slot name="brand">

                        <div class="usa-logo__text">
                            <SsaLogo/>
                        </div>
                        <em class="usa-logo__text margin-left-1">
                            {{ title }}
                        </em>

                    </slot>

                </div>

                <button type="button" class="usa-menu-btn">Menu</button>

            </div>

            <nav ref="nav" aria-label="Primary navigation" class="usa-nav">

                <button type="button" class="usa-nav__close">
                    <IconClose role="img" alt="Close" />
                </button>

                <ul class="usa-nav__primary usa-accordion">

                    <li v-for="(item, index) in items" :key="index" class="usa-nav__primary-item">

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
                            <span>{{ item.text }}</span>
                        </button>

						<us-link v-else class='usa-nav-link' :isActive="isSelected(item)" v-bind="item" @click="onSelect(item)">{{ item.text }}</us-link>

						<!--

                        <router-link v-else-if="item.to" :to="item.to" @click="onSelect(item)"
							activeClass="usa-current"
							:class="['usa-nav-link', isSelected(item) ? 'usa-current' : '']">
							<a >{{ item.text }}</a>
                        </router-link>
                        <a
                            v-else-if="item.href"
                            :href="item.href"
                            @click="onSelect(item)"
                            :class="['usa-nav-link', isSelected(item) ? 'usa-current' : '']"
                        >
                            {{ item.text }}
                        </a>
                        <a v-else href="javascript:void(0);" @click="onSelect(item)">
                            {{ item.text }}
                        </a>
						-->

                        <!-- Display child menu drop-down, if the top-level menu is selected -->

                        <ul
                            v-if="item.children && isSelected(item)"
                            id="basic-nav-section-one"
                            class="usa-nav__submenu"
                        >
                            <li v-for="(child, index) in item.children" :key="index" class="usa-nav__submenu-item">

								<us-link v-bind="child"> @click="onSelectChild(child)"{{ item.text }}</us-link>

								<!--
                                <router-link v-if="child.to" :to="child.to" @click="onSelectChild(child)">
                                    <a>{{ child.text }}</a>
                                </router-link>
                                <a v-else-if="child.href" :href="child.href" @click="onSelectChild(child)">
                                    {{ child.text }}
                                </a>
                                <a v-else href="javascript:void(0);" @click="onSelectChild(child)">
                                    {{ child.text }}
                                </a>
								-->
                            </li>
                        </ul>
                    </li>
                </ul>

                <section aria-label="Search component" v-if="search">
                    <form class="usa-search usa-search--small" role="search" @submit.prevent="handleSearchSubmit">
                        <label class="usa-sr-only" for="search-field">Search</label>
                        <input class="usa-input" id="search-field" type="search" name="search" v-model="searchText"/>
                        <button class="usa-button" type="submit">
                            <IconSearch class="usa-search__submit-icon" alt="Search" />
                        </button>
                    </form>
                </section>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
.usx-component {

    &.usa-header {

        .usa-logo {

            display: flex;
            align-items: center;

            img, svg {
                height: 2.875rem;
                max-width: 100%;
            }
        }

        .usa-nav__close {
            //margin-bottom: 0px;
            svg {
                //@extend img;
                width: 1.25rem;
                height: 1.25rem;
            }
        }

        @media (max-width: 63.99em) {
            .usa-nav.is-visible {
                box-shadow: 0px 0px 5px 1px #aaaaaa;
            }
        }

    }

}
</style>

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
import { ref } from 'vue';
import { computed } from 'vue';
import UsLink from "../UsLink.vue";
import { RouterLink } from 'vue-router';
import SsaLogo from '../icons/SsaLogo.vue';
import IconClose from '../icons/IconClose.vue'
import IconSearch from '../icons/IconSearch.vue'
import { onKeyStroke, useMediaQuery, onClickOutside } from '@vueuse/core'

type MenuItem = {
    id?: string,
    text: string
    to?: string
    href?: string
    children?: MenuItem[]
}

interface Props {
	search: boolean
    modelValue: string
    title: string
    items: MenuItem[]
}

const {
    //modelValue = '',
    title = 'Header',
    items = [
        {
            to: 'page1',
            text: 'Page 1',
            children: [
                { href: '/page1/page1-1', text: 'Page 1 - 1' },
                { href: '/page1/page1-2', text: 'Page 1 - 2' },
                { href: '/page1/page1-3', text: 'Page 1 - 3' },
            ],
        },
        {
            to: 'page2',
            text: 'Page 2',
            children: [
                { href: '/page1/page2-1', text: 'Page 2 - 1' },
                { to: 'page22', text: 'Page 2 - 2' },
                { href: '/page1/page2-3', text: 'Page 2 - 3' },
            ],
        },
        { href: '/page3', text: 'Page 3' },
    ],
} = defineProps<Props>()

const selectedItem = ref<string>('');
const nav = ref(null);
const searchText =ref<string>('');
const emit = defineEmits(['update:modelValue', 'onSearch'])


onKeyStroke('Escape', ()=>{closeAll()});
onClickOutside(nav, ()=>{closeAll()});

function closeAll(){
    selectedItem.value = '';
}

function handleSearchSubmit() {
    if (searchText.value != "" && searchText.value.length > 4){
        emit('onSearch', searchText.value);
        // Reset input field
        searchText.value = '';
    }
}

function isSelected(item: MenuItem) {
    if (item.id) {
        return selectedItem.value == item.id;
    }
    else if (item.to) {
        return selectedItem.value == item.to;
    } else if (item.href) {
        return selectedItem.value == item.href;
    } else {
        return false
    }
}

function onSelect(item: MenuItem) {

    const val = item.id ? item.id : (item.to ? item.to : item.href);

    if (!item.children){
        emit('update:modelValue', val);
    }

    if (!val) {
        selectedItem.value = '';
    } else if (selectedItem.value == val) {
        selectedItem.value = '';
    } else {
        selectedItem.value = val;
    }
}

function onSelectChild(item: MenuItem) {
    const val = item.id ? item.id : (item.to ? item.to : item.href);
    closeAll();
    emit('update:modelValue', val);
}





</script>
