<template>
    <nav class="usx-component usx-footer">
        <us-container :size="size" class="py-3">
            <us-row>
                <us-col>
                    <us-img rounded='circle' width="48px" height="48px" :src="logo"/>
                </us-col>
            </us-row>
        </us-container>
    </nav>
</template>

<script>

export default {
    name: 'us-footer',
    props: {
        logo: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: 'lg'
        }        
    }    
};
</script>
<style lang="scss">
.usx-footer {

    min-height: 100px;
    //background-color: #8180B2;
    background-color: rgba(50,50,50,0.1);


}
</style>
