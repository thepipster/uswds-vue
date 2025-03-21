<template>

<!-- -
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
-->

	<router-link
		v-if="to"
		:to="to"
		@click="onSelect"
		:activeClass="activeClass"
		:class="[isActive ? activeClass : '']">
		<a><slot></slot></a>
	</router-link>
	<a v-else-if="href" :href="href" @click="onSelect" :class="[isActive ? activeClass : '']">
		<slot></slot>
	</a>
	<a v-else href="javascript:void(0);" @click="onSelect" :class="[isActive ? activeClass : '']">
		<slot></slot>
	</a>
</template>

<script setup lang="ts">

const emit = defineEmits(['click'])

export type UsLinkProps = {
	href?: string,
	to?: string | object,
	activeClass?: string,
	isActive?: boolean
}

const props = withDefaults(defineProps<UsLinkProps>(), {
	href: "javascript:void(0);",
	activeClass: "usa-current",
	isActive: false
});

function onSelect(){
	emit('click');
}

</script>

