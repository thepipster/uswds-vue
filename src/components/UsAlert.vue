<template>

    <div
        class="usx-component usa-alert"
        :class="[
            'usa-alert--' + variant,
            noIcon ? 'usa-alert--no-icon' : '',
            isSlim ? 'usa-alert--slim' : '',
        ]"
    >
        <div class="usa-alert__body">
            <h4 v-if="title" class="usa-alert__heading">{{ title }}</h4>
            <p class="usa-alert__text">
                <slot name="default" />
            </p>
        </div>
    </div>


</template>

<script>
export default {
    name: 'us-alert',
    props: {
        isSlim: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: null,
        },
        variant: {
            type: String,
            default: 'info',
        },
        fade: {
            type: Boolean,
            default: false,
        },
        noIcon: {
            type: Boolean,
            default: false,
        },
        show: {
            type: [Boolean, Number, String],
            default: true,
        },
        dismissible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isShown: false,
        }
    },
    watch: {
        value(newVal) {
            this.isShown = newVal
        },
    },
    mounted() {
        this.isShown = this.show
    },
}
</script>
<style lang="scss">
.usx-component.alert {
    .btn-link {
        text-decoration: none;
        color: rgba(20, 20, 20, 0.5);

        &:hover {
            color: rgba(20, 20, 20, 0.8);
        }
    }

    &.alert-sm {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .fas,
    .far,
    .fal,
    .fad {
        line-height: 1.1em;
        font-size: 1.1em;
        padding-right: 7px;
        display: block;
    }

    border-radius: 0px !important;
    border-width: 0px !important;
    border-left-width: 0.5rem !important;
    border-left-style: solid !important;
    //border-left-color: red;
    //background-color: rgba($info, .1) !important;

    &.alert-info {
        background-color: #e7f6f8 !important;
        border-left-color: #00bde3 !important;
        color: #1b1b1b !important;
    }

    &.alert-primary {
        border-left-color: #00bde3 !important;
        color: #1b1b1b !important;
    }

    &.alert-warning {
        background-color: #faf3d1 !important;
        border-left-color: #ffbe2e !important;
        color: #1b1b1b !important;
    }

    &.alert-success {
        background-color: #ecf3ec !important;
        border-left-color: #00a91c !important;
        color: #1b1b1b !important;
    }

    &.alert-error,
    &.alert-danger {
        background-color: #f4e3db !important;
        border-left-color: #d54309 !important;
        color: #1b1b1b !important;
    }
}
</style>
