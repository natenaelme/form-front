<template>
<router-view></router-view>
</template>

<script>
export default {
    name: 'App'
}

</script>

<style lang="scss">
// Import Main styles for this application
@import 'assets/scss/style';
.table{
  font-size: smalls i !important;
}

@media (max-width: 767px) {
    .hiddenView {
        display: block;
    }
}

@media (min-width: 767px) {
    .hiddenView {
        display: none;
    }

    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
    }

    .form-control {
        width: 100% !important
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid rgb(92, 91, 91);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }

        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }

}
.list-group-item{
    background: #ebedef !important;
}
</style>
