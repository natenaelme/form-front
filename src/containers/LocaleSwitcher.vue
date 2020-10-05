<template>
<div>

    <b-dropdown-item class="lang" @click="switchLocale('en')">Eng</b-dropdown-item>
    <b-dropdown-item class="lang" @click="switchLocale('am')">Amharic</b-dropdown-item>

</div>
</template>

<script>
export default {
    name: 'LocaleSwitcher',

    methods: {
        switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
            }
        }
    }
}
</script>

<style scoped>
li {
    text-decoration: underline;
    color: #459CE7;
    cursor: pointer;
}

.lang {
    text-decoration: none;
}
</style>
