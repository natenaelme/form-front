<template>
<div>
    <div class="jumbotron jumbotron-fluid " style="background-color:black; color:white">
        <div class="container">
            <h1 class="display-4">{{FirstHeader}}</h1>
            <p class="lead">Breakthrough</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeaderFile',
    props: {
        FirstHeader: String
    },
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
