<template>


<!--
    <router-link
        v-if="item.to"
        :to="item.to"
        tag="a"
        class="usx-component usx-sidenav-item nav-link"
        :class="[{'active':active, 'usx-sidenav-top': depth == 1}, `depth-${depth}`]"
        @click="onClick">
        <i v-if="item.icon" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </router-link>
-->
	<router-link v-if="item.to" v-slot="routerProps" :to="item.to" custom>
		<a :href="routerProps.href" v-bind="props.action" @click="routerProps.navigate">
			{{item.text}}
		</a>
	</router-link>


	<a v-else
		:href="item.href"
		:class="[{'usa-current':active, 'usx-sidenav-top': depth == 1}, `depth-${depth}`]"
		@click="onClick">
		{{item.text}}
	</a>

	<!--
    <li v-else
        class="usx-component usx-sidenav-item nav-link"
        :class="[{'active':active, 'usx-sidenav-top': depth == 1}, `depth-${depth}`]"
        :href="item.href"
        @click="onClick">
        <i v-if="item.icon" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </li>
-->
</template>

<script setup lang="ts">

import {type UsSideNavItemType} from "./UsSideNav.vue";
import {RouterLink} from 'vue-router';

const emit = defineEmits(['click',])

export type UsSideNavProps = {
	active?: boolean,
	depth?: number,
	item?: UsSideNavItemType
}

const props = withDefaults(defineProps<UsSideNavProps>(), {
	depth: 1
});

function onClick(item){
	emit('click', item);
}

/*


// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-side-nav-item',
    components: {
        RouterLink
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        depth: {
            default: 1,
        },
        item: {
            type: Object,
            default(){
                return {};
            }
        }
    },
    methods: {
        onClick(item){
            this.$emit('click', item);
        }
    }
};
*/
</script>
