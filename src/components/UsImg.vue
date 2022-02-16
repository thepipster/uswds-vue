<template>
    <img    
        :ref="divId" 
        class="usx-component usx-img" 
        :data-src="imgSrc"
        src="../assets/placeholder-1x1.png"
        :alt="alt"
        :style="style"
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
        ]"/>
</template>

<script>

import uuid from '../utils/uuid';

export default {
    name: 'us-img',
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: false
        },
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

    /*
<svg xmlns='http://www.w3.org/2000/svg'  width='400' height='400' viewBox='0 0 800 800'><rect fill='#330033' width='800' height='800'/><g fill='none' stroke='#404'  stroke-width='1'><path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/><path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/><path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/><path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/><path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/></g><g  fill='#505'><circle  cx='769' cy='229' r='5'/><circle  cx='539' cy='269' r='5'/><circle  cx='603' cy='493' r='5'/><circle  cx='731' cy='737' r='5'/><circle  cx='520' cy='660' r='5'/><circle  cx='309' cy='538' r='5'/><circle  cx='295' cy='764' r='5'/><circle  cx='40' cy='599' r='5'/><circle  cx='102' cy='382' r='5'/><circle  cx='127' cy='80' r='5'/><circle  cx='370' cy='105' r='5'/><circle  cx='578' cy='42' r='5'/><circle  cx='237' cy='261' r='5'/><circle  cx='390' cy='382' r='5'/></g></svg>
<svg xmlns='http://www.w3.org/2000/svg' width='100%'><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(261,1270,645)'><stop offset='0'  stop-color='#8180B2'/><stop offset='1'  stop-color='#565595'/></linearGradient><pattern patternUnits='userSpaceOnUse' id='b'  width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'><g fill-opacity='0.09'><polygon fill='#444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='#AAA' points='270 150 360 0 180 0'/><polygon fill='#DDD' points='450 150 360 300 540 300'/><polygon fill='#999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='#DDD' points='630 150 720 0 540 0'/><polygon fill='#444' points='810 150 720 300 900 300'/><polygon fill='#FFF' points='810 150 900 0 720 0'/><polygon fill='#DDD' points='990 150 900 300 1080 300'/><polygon fill='#444' points='990 150 1080 0 900 0'/><polygon fill='#DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='#666' points='270 450 180 600 360 600'/><polygon fill='#AAA' points='270 450 360 300 180 300'/><polygon fill='#DDD' points='450 450 360 600 540 600'/><polygon fill='#999' points='450 450 540 300 360 300'/><polygon fill='#999' points='630 450 540 600 720 600'/><polygon fill='#FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='#DDD' points='810 450 900 300 720 300'/><polygon fill='#AAA' points='990 450 900 600 1080 600'/><polygon fill='#444' points='990 450 1080 300 900 300'/><polygon fill='#222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='#DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='#444' points='630 750 720 600 540 600'/><polygon fill='#AAA' points='810 750 720 900 900 900'/><polygon fill='#666' points='810 750 900 600 720 600'/><polygon fill='#999' points='990 750 900 900 1080 900'/><polygon fill='#999' points='180 0 90 150 270 150'/><polygon fill='#444' points='360 0 270 150 450 150'/><polygon fill='#FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='#222' points='0 300 -90 450 90 450'/><polygon fill='#FFF' points='0 300 90 150 -90 150'/><polygon fill='#FFF' points='180 300 90 450 270 450'/><polygon fill='#666' points='180 300 270 150 90 150'/><polygon fill='#222' points='360 300 270 450 450 450'/><polygon fill='#FFF' points='360 300 450 150 270 150'/><polygon fill='#444' points='540 300 450 450 630 450'/><polygon fill='#222' points='540 300 630 150 450 150'/><polygon fill='#AAA' points='720 300 630 450 810 450'/><polygon fill='#666' points='720 300 810 150 630 150'/><polygon fill='#FFF' points='900 300 810 450 990 450'/><polygon fill='#999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='#666' points='0 600 90 450 -90 450'/><polygon fill='#AAA' points='180 600 90 750 270 750'/><polygon fill='#444' points='180 600 270 450 90 450'/><polygon fill='#444' points='360 600 270 750 450 750'/><polygon fill='#999' points='360 600 450 450 270 450'/><polygon fill='#666' points='540 600 630 450 450 450'/><polygon fill='#222' points='720 600 630 750 810 750'/><polygon fill='#FFF' points='900 600 810 750 990 750'/><polygon fill='#222' points='900 600 990 450 810 450'/><polygon fill='#DDD' points='0 900 90 750 -90 750'/><polygon fill='#444' points='180 900 270 750 90 750'/><polygon fill='#FFF' points='360 900 450 750 270 750'/><polygon fill='#AAA' points='540 900 630 750 450 750'/><polygon fill='#FFF' points='720 900 810 750 630 750'/><polygon fill='#222' points='900 900 990 750 810 750'/><polygon fill='#222' points='1080 300 990 450 1170 450'/><polygon fill='#FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='#666' points='1080 600 1170 450 990 450'/><polygon fill='#DDD' points='1080 900 1170 750 990 750'/></g></pattern></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%'/><rect x='0' y='0' fill='url(#b)' width='100%' height='100%'/></svg>
*/
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
  
};
</script>
<style lang="scss">
.usx-img {

    //background-color: #8180B2;
    background-color: rgba(50,50,50,0.1);


}
</style>
