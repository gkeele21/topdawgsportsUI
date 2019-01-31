<template>
    <div class="home">
        <the-header></the-header>
        Testing
    </div>
</template>

<script>
    // @ is an alias to /src
    import TheHeader from '@/components/admin/TheHeader.vue'

    export default {
        name: 'admindashboard',
        components: {
            TheHeader
        }
    }
</script>