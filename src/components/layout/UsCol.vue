<template>
    <div :class="['usx-component', colClass]" v-bind="$props">
        <slot></slot>
    </div>
</template>

<script>
import CoreMixin from '../mixins/CoreMixin';
export default {
    name: 'us-col',
    mixins: [CoreMixin],
    props: {
        fullwidth: {
            type: Boolean,
            default: false
        },
        gutter: {
            type: [Number, String],
            default: null
        },
        sm: {
            type: [Number, String],
            default: null
        },
        md: {
            type: [Number, String],
            default: null
        },
        lg: {
            type: [Number, String],
            default: null
        },
        xl: {
            type: [Number, String],
            default: null
        }
    },
    computed: {
        colClass() {
            let txt = '';
            // Set the fall back to full-width as the USWDS won't do this for us. So if any breakpoint
            // col width is set, we need to set the default. For example, when you go small than mobile-lg
            // and no other breakpoints are active, you can't target any screen width!
            if (this.sm || this.md || this.lg || this.xl) {
                txt += 'col-12 ';
            }
            // Setup so that if only, for example, md width is set then all the sizes bigger than
            // md should inherit md for their size.
            /*
            let sizes = {'sm':this.sm,'md':this.md,'lg':this.lg,'xl':this.xl};
            let lastSz = null;
            for (let i in sizes){
                if (sizes[i]){
                    lastSz = sizes[i];
                }
                sizes[i] = (lastSz) ? lastSz : null;
            }
            */
            const processSz = (size) => {
                
                let propVal = this[size];

                if (!propVal || !size) {
                    return '';
                }

                if (propVal == 'auto') {
                    return `col-${size}-auto `;
                } 
                else if (propVal == 'fill') {
                    return `col-${size}-fill `;
                } 
                else {
                    return `col-${size}-${propVal} `;
                }
            };

            txt += processSz('sm');
            txt += processSz('md');
            txt += processSz('lg');
            txt += processSz('xl');

            if (!txt){
                txt = 'col';
            }
            /*
            // Supports; fill, auto, [1-12]
            if (this.sm && this.sizeMap['md']) {
                txt += `${this.sizeMap['sm']}col-${this.sm} `;
            }
            if (this.md && this.sizeMap['md']) {
                txt += `${this.sizeMap['md']}col-${this.md} `;
            }
            if (this.lg && this.sizeMap['lg']) {
                txt += `${this.sizeMap['lg']}col-${this.lg} `;
            }
            if (this.xl && this.sizeMap['xl']) {
                txt += `${this.sizeMap['xl']}col-${this.xl} `;
            }
            */
            return txt;
        }
    }
};
</script>
