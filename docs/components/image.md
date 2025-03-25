# Image <Badge type="green" text="extension"/>

The `<us-img>` provides convenience features for handling images, including responsive behavior (so they never become larger than their parent elements), and optionally adding lightweight styles to them via props.

Thes image components support rounded images, thumbnail styling, alignment, and even the ability to create blank images with an optional solid background color.

## Responsive Images

Images can be made responsive with the `fluid` prop (which sets `max-width: 100%; height: auto;`) so that it scales with the parent element - up to the maximum native width of the image.

<div class="mt-5 mus-5">
    <us-img fluid :src="getRandomUrl(1024, 400)" alt="responsive image"/>
</div>

You can also allow an image to grow to the maxium width, but no more, using the `fluid-grow` prop. This may result in blurry images if the image has to scale up too far.

<div class="mt-5 mus-5">
    <us-img fluid-grow :src="getRandomUrl(1024, 400)" alt="responsive image"/>
</div>

```html
<us-img fluid src="https://picsum.photos/250/250" alt="responsive image"/>
<us-img fluid-grow src="https://picsum.photos/1024/400" alt="responsive image"/>
```

## Lazy Loading

You can turn on lazy loading by adding a `lazy` prop. This will load images in the background and use a blank placeholder image until the image is loaded. The images
are only loaded when the `<img>` component is in the view. This can be a hugh performance gain, so recommended.

If possible, set the `width` and `height` to an absolute value so the background image will be the same size as the image when it loads in.

You can modify the color of the place holder image with the `blankColor` prop, setting it to any valid css color, e.g. `blank-color="#8180B2"` or `blank-color="rgba(120,0,100, 0.5)"`

<us-img lazy fluid :src="getRandomUrl(5000, 800)" blank-color="#8180B2" width="5000px" height="800px" alt="responsive image"/>

## Thumbnails

You can use prop `thumbnail` to give an image a rounded light border appearance.

<div class="mt-5 mus-5">
    <us-container fluid class="p-4 bg-dark">
        <us-row>
            <us-col>
                <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 1"></us-img>
            </us-col>
        <us-col>
            <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 2"></us-img>
        </us-col>
        <us-col>
            <us-img thumbnail fluid :src="getRandomUrl(250, 250)" alt="Image 3"></us-img>
        </us-col>
    </us-row>
</us-container>
</div>

## Background color

 <us-img blankColor='#777' class="m1" rounded alt="Rounded image"></us-img>

## Rounder corners

You can control which corners are rounded by setting the rounded prop to one of the following values:

* `true` (or prop present with no value): round all corners
* `false` (or prop not present): no explicit rounding or corners (default)
* `top`: round the top corners
* `right`: round the right corners
* `bottom`: round the bottom corners
* `left`: round the left corners
* `circle`: make a circle (if square image) or oval (if not square) border
* `0,1,2,3,4 or 5`: explicitly set the relative width of rounded corners. 0 removes them.
* `top-0,right-1,left-2, etc.`: you can also mix and match the explicit size with position.

<div class="mt-5 mus-5">
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded alt="Rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="top" alt="Top-rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="right" alt="Right-rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="bottom" alt="Bottom-rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="left" alt="Left-rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="circle" alt="Circle image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" alt="Not rounded image"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="1" alt="Rounded 1"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="2" alt="Rounded 2"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="3" alt="Rounded 3"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="4" alt="Rounded 4"></us-img>
    <us-img v-bind="mainProps" class="m-2" :src="getRandomUrl(100, 100)" rounded="5" alt="Rounded 5"></us-img>
</div>

```vue
<div>
    <us-img v-bind="mainProps" rounded alt="Rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="top" alt="Top-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="right" alt="Right-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="bottom" alt="Bottom-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="left" alt="Left-rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="circle" alt="Circle image"></us-img>
    <us-img v-bind="mainProps" rounded="0" alt="Not rounded image"></us-img>
    <us-img v-bind="mainProps" rounded="1" alt="Rounded 1"></us-img>
    <us-img v-bind="mainProps" rounded="2" alt="Rounded 2"></us-img>
    <us-img v-bind="mainProps" rounded="3" alt="Rounded 3"></us-img>
    <us-img v-bind="mainProps" rounded="4" alt="Rounded 4"></us-img>
    <us-img v-bind="mainProps" rounded="5" alt="Rounded 5"></us-img>
</div>
<script>
export default {
    data() {
        return {
            mainProps: { blank: true, blankColor: '#777', width: '75px', height: '75px', class: 'm1' }
        };
    }
}
</script>
```

## Component Reference

### `<us-img>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| src | string | null | This image source |
| alt  | string | null' | The image alt text |
| width | string | null | The image width, e.g. '50px' |
| height | string | null | The image height, e.g. '50px' |
| fluid | boolean | false | Make image responsive, i.e. max-width of 100% |
| fluid-grow | boolean | false' | Make image responsive, but grow to maximum width |
| rounded | boolean|string | false | Set rounded corners |
| thumbnail | boolean | false | Appy styles for thumbnail (set a border) |
| lazy | boolean | false | Lazy load image |


<script>
    
export default {
    data() {
        return {
            mainProps: { blank: true, blankColor: '#777', width: '75px', height: '75px', class: 'm1' }
        };
    },
    methods: {
        getRandomInt(){
            return 1 + Math.floor(Math.random() * 400);            
        },
        getRandomUrl(width, height){
            return `https://picsum.photos/${width}/${height}/?cb=${this.getRandomInt()}`;
        }
    }
}
</script>