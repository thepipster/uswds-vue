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
<style lang="scss">

.usx-component.usx-img {

    //background-color: #8180B2;
    background-color: rgba(50,50,50,0.1);

   &.img-thumbnail {
        padding: .25rem;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(222, 226, 230);
        border-radius: 6px;
        max-width: 100%;
        height: auto;
    }

}


</style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

export type UsImgProps = {
	src?: string,
	alt?:string,
	//width?: string,
	//height?: string,
	fluid?: boolean,
	//fluidGrow?: boolean,
	rounded?: boolean | string,
    roundedSize?: string,
	lazy?: boolean,
	thumbnail?: boolean,
}
const props = withDefaults(defineProps<UsImgProps>(), {
	lazy: false,
	alt: '',
    rounded: false,
    thumbnail: false,
    roundedSize: 'md'
});

const usxImg = ref(null);
const srcLocal = ref<string>("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPceupuPQAHdQLdidmuoAAAAABJRU5ErkJggg==")
//const srcLocal = ref<string>("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAoUlEQVR42u3RAQ0AMAgAoJv8qSxhB7tYwzmoQGT1f6wRQoQgRAhChCBECEKECBGCECEIEYIQIQgRghCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQIUKEIEQIQoQg5LoBxX8eANnZKDcAAAAASUVORK5CYII=")

let observer = null;


// See https://designsystem.digital.gov/utilities/border/


const classes = computed(() => {
    let txt: string = "usx-component usx-img";

    if (props.fluid) {
        txt += ' img-fluid';
    }

    if (props.thumbnail) {
        txt += ' img-thumbnail';
    }
    else if (props.rounded == true) {
        txt += ` rounded`
        /*
        switch(props.rounded){
            case true: txt += ` rounded`; break;
            case 'top': txt += ` rounded-top`; break;
            case 'bottom': txt += ` rounded-bottom`; break;
            case 'left': txt += ` rounded-left`; break;
            case 'right': txt += ` rounded-right`; break;
            case 'circle': txt += ` rounded-circle`; break;
            case '0': txt += ` rounded-0`; break;
            case '1': txt += ` rounded-1`; break;
            case '2': txt += ` rounded-2`; break;
            case '3': txt += ` rounded-3`; break;
            case '4': txt += ` rounded-4`; break;
            case '5': txt += ` rounded-5`; break;
        }
        */

    }
    else if (props.rounded) {
        txt += ` rounded-${props.rounded}`;
    }
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
                    if (usxImg.value){
                        observer.unobserve(usxImg.value);
                    }
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


</script>
