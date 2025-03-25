<template>
    <img
        v-bind="$attrs"
        ref="usxImg"
        :class="classes"
        :src="srcLocal"
        :data-src="src"
        :alt="alt"
    />
    <!--
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPceupuPQAHdQLdidmuoAAAAABJRU5ErkJggg==">
-->
</template>

<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
import { uniqueId } from 'lodash';

//const placeholder: string = "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg";

export type UsImgProps = {
	src?: string,
	alt?:string,
	//width?: string,
	//height?: string,
	fluid?: boolean,
	//fluidGrow?: boolean,
	rounded?: boolean | string,
	lazy?: boolean,
	thumbnail?: boolean,
	//blankColor?: string,
	//blank?: boolean
}

const usxImg = ref(null);
//const divId = ref<string>(uniqueId("img_"));
const srcLocal = ref<string>("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPceupuPQAHdQLdidmuoAAAAABJRU5ErkJggg==")
//const srcLocal = ref<string>("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAoUlEQVR42u3RAQ0AMAgAoJv8qSxhB7tYwzmoQGT1f6wRQoQgRAhChCBECEKECBGCECEIEYIQIQgRghCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQIUKEIEQIQoQg5LoBxX8eANnZKDcAAAAASUVORK5CYII=")

        //const divId: `img_${uuid()}`,
let observer = null;
//const imgSrc: this.src,
//const threshold: 0.1,
//const isLoading: true

const props = withDefaults(defineProps<UsImgProps>(), {
	lazy: false,
	alt: '',
    rounded: false,
    thumbnail: false
});

// See https://designsystem.digital.gov/utilities/border/

/*
        :class="[
            {
                'img-fluid':fluid,
                'img-thumbnail':thumbnail,
                'img-fluid w-100':fluidGrow,
                'rounded-top': rounded && rounded == 'top',
                'rounded-right': rounded && rounded == 'right',
                'rounded-left': rounded && rounded == 'left',
                'rounded-bottom': rounded && rounded == 'bottom',
                'rounded-circle': rounded && rounded == 'circle',
                'rounded-0': rounded && rounded == '0',
                'rounded-1': rounded && rounded == '1',
                'rounded-2': rounded && rounded == '2',
                'rounded-3': rounded && rounded == '3',
                'rounded': rounded === true
            }

*/
const classes = computed(() => {
    let txt: string = "usx-component usx-img";

    if (props.fluid) {
        txt += ' img-fluid';
    }

    if (props.thumbnail) {
        txt += ' img-thumbnail';
    }
    else if (props.rounded) {
        switch(props.rounded){
            case 'sm': txt += ' radius-sm'; break;
            case 'md': txt += ' radius-md'; break;
            case 'lg': txt += ' radius-lg'; break;
            case 'xl': txt += ' radius-pill'; break;
            case 'top': txt += ' radius-top-lg'; break;
            case 'bottom': txt += ' radius-bottom-lg'; break;
            case 'right': txt += ' radius-right-lg'; break;
            case 'left': txt += ' radius-left-lg'; break;
            case 'top-sm': txt += ' radius-top-sm'; break;
            case 'top-md': txt += ' radius-top-md'; break;
            case 'top-lg': txt += ' radius-top-lg'; break;
            case 'top-xl': txt += ' radius-top-pill'; break;
            case 'bottom-sm': txt += ' radius-bottom-sm'; break;
            case 'bottom-md': txt += ' radius-bottom-md'; break;
            case 'bottom-lg': txt += ' radius-bottom-lg'; break;
            case 'bottom-xl': txt += ' radius-bottom-pill'; break;
            case 'left-sm': txt += ' radius-left-sm'; break;
            case 'left-md': txt += ' radius-left-md'; break;
            case 'left-lg': txt += ' radius-left-lg'; break;
            case 'left-xl': txt += ' radius-left-pill'; break;
            case 'right-sm': txt += ' radius-right-sm'; break;
            case 'right-md': txt += ' radius-right-md'; break;
            case 'right-lg': txt += ' radius-right-lg'; break;
            case 'right-xl': txt += ' radius-right-pill'; break;
            default: txt += ' radius-lg';
        }

    }

    // radius-sm, radius-lg, radius-pill

    return txt;
});




onMounted(() => {

    if (!props.src){
        return
    }
   else if (!props.lazy){
        srcLocal.value = props.src;
    }
    else if (props.lazy){

        //this.divId = `img_${uuid()}`;
        //var ref = this.$refs[this.divId];
        //let ref = props.$el

        const options = {
            // root:this.$el,
            // root: document.querySelector("#scrollArea"),
            // rootMargin: "0px",
            threshold: 1.0,
        };

        observer = new IntersectionObserver(entries => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    if (props.src){
                        srcLocal.value = props.src;
                    }
                    //var image = entry.target;
                    //image.src = image.dataset.src;
                    //image.classList.remove("lazy");
                    //this.isLoading = false;
                    //this.observer.unobserve(ref);
                    //this.$log(`Loaded ${image.dataset.src}`);
                }
            });

        }, options);

        if (usxImg.value) {
            observer.observe(usxImg.value);
        }
        else {
            console.error('usxImg is not initialized.');
        }

    }

});




/*



import uuid from '../utils/uuid';

export default {
    name: 'us-img',
    props: {

        fluidGrow: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: [Boolean, String],
            default: false
        },
        lazy: {
            type: Boolean,
            default: false
        },
        thumbnail: {
            type: Boolean,
            default: false
        },
        blankColor: {
            type: String,
            default: null
        },
        blank: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        style(){
            let txt =  (this.blankColor) ? `background-color: ${this.blankColor}` : '';
            if (this.width){
                txt += `; width: ${this.width}`;
            }
            if (this.height){
                txt +=`; height: ${this.height}`;
            }
            return txt;
        }
    },
    data() {
        return {
            divId: `img_${uuid()}`,
            observer: null,
            imgSrc: this.src,
            threshold: 0.1,
            isLoading: true
        }
    },
    mounted() {

        if (!this.src){
            return;
        }
        else if (this.lazy){
            //this.divId = `img_${uuid()}`;
            //var ref = this.$refs[this.divId];
            var ref = this.$el

            const options = {
                //root:this.$el,
                //threshold: this.threshold
            };

            this.observer = new IntersectionObserver(entries => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove("lazy");
                        this.isLoading = false;
                        this.observer.unobserve(ref);
                        //this.$log(`Loaded ${image.dataset.src}`);
                    }
                });

            }, options);

            this.observer.observe(ref);
        }
        else {
             this.$el.src = this.imgSrc;
        }


    }
*/

</script>
<style lang="scss">
.usx-img {
    //background-color: #8180B2;
    background-color: rgba(50,50,50,0.1);
}
</style>
