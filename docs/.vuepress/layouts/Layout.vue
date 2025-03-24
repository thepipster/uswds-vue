<template>
    <ParentLayout>
        <template #page>
     <!--
            <main>
                <Content />
            </main>

        -->

            <main class="vp-page">

                <slot name="top" />

                <div vp-content>
                    <slot name="content-top" />

                    <Content />

                    <slot name="content-bottom" />
                </div>

                <VPPageMeta />

                <VPPageNav />

                <slot name="bottom" />
            </main>

        </template>
    </ParentLayout>
</template>
<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>
<style lang="css">
.my-footer {
    text-align: center;
}
</style>
