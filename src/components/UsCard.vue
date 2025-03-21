<template>
<div class="usa-card">
	<div class="usa-card__container">
		<div class="usa-card__header">
			<h4 class="usa-card__heading" v-if="title">{{title}}</h4>
		</div>
		<div class="usa-card__body">
			<slot></slot>
		</div>
		<!--
		<div class="usa-card__footer">
			<slot name="footer"/>
			<a href="#" class="usa-button">Visit Florida Keys</a>
		</div>
		-->
	</div>
</div>

	<!--

    <div class="usx-component usx-card card" :class="[`bg-${variant}`, `text-${variant}-contrast`]">

        <img v-if="imgSrc && imgPos == 'top'" :src="imgSrc" class="card-img-top" :alt="imgAlt"/>

        <div class="row g-0" v-if="imgPos=='right'">
            <div class="col-md-8 d-flex flex-column pb-3">
                <div class="card-body">
                    <slot name="title"><h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5></slot>
                    <h6 class="card-subtitle mb-2 text-muted" v-if="subTitle">{{subTitle}}</h6>
                    <p class="card-text"><slot name="default"/></p>
                </div>
                <div class="card-footer">
                    <slot name="footer"/>
                </div>
            </div>
            <div class="col-md-4">
                <img v-if="imgSrc" :src="imgSrc" class="usx-card-fluid-img rounded-start" :alt="imgAlt"/>
            </div>
        </div>

        <div class="row g-0" v-else-if="imgPos=='left'">
            <div class="col-md-4">
                <img v-if="imgSrc" :src="imgSrc" class="usx-card-fluid-img rounded-start" :alt="imgAlt"/>
            </div>
            <div class="col-md-8 d-flex flex-column pb-3">
                <div class="card-body">
                    <slot name="title"><h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5></slot>
                    <h6 class="card-subtitle mb-2 text-muted" v-if="subTitle">{{subTitle}}</h6>
                    <p class="card-text"><slot name="default"/></p>
                </div>
                <div class="card-footer">
                    <slot name="footer"/>
                </div>
            </div>
        </div>


        <div class="card-body" v-else>
            <slot name="title"><h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5></slot>
            <h6 class="card-subtitle mb-2 text-muted" v-if="subTitle">{{subTitle}}</h6>
            <p class="card-text"><slot name="default"/></p>
        </div>

        <div class="card-footer" v-if="!imgSrc || imgPos=='bottom' || imgPos=='top'">
            <slot name="footer"/>
        </div>

        <img v-if="imgSrc && imgPos == 'bottom'" :src="imgSrc" class="card-img-bottom" :alt="imgAlt"/>

    </div>
-->
</template>

<script setup lang="ts">

export type UsCardProps = {
	title?: string,
	subTitle?:string,
	variant?: string,
	imgSrc?: string,
	imgAlt?: string,
	imgPos?: string, // top
	imgInset?: boolean, // false
	overflow?: boolean, // false
	cardExdent?: boolean, // false
}

const props = withDefaults(defineProps<UsCardProps>(), {
	imgInset: false,
	overflow: false,
	cardExdent: false
});
 /*
import CoreMixin from '../../mixins/CoreMixin';

export default {
    name: 'us-card',
    mixins: [CoreMixin],
    props: {
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: 'none'
        },
        imgSrc: {
            type: String,
            default: null
        },
        imgAlt: {
            type: String,
            default: null
        },
        imgPos: {
            type: String,
            default: 'top'
        },
        imgInset: {
            type: Boolean,
            default: false
        },
        overflow: {
            type: Boolean,
            default: false
        },
        cardExdent: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hasHeader: null,
            hasFooter: null,
            hasBody: null,
        }
    },
    mounted(){
        this.hasHeader = this.hasChild('us-card-header');
        this.hasFooter = this.hasChild('us-card-footer');
        this.hasBody = this.hasChild('us-card-body');
        //this.init();
       //this.kids.defaultSlot = this.hasSlot('body');
    },
    methods: {

    }
};
*/

</script>
<style lang="scss">

.usx-card {

    .usx-card-fluid-img {
        display: block;
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-footer {
        border: none;
        background: none;
    }
}


</style>
