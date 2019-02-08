<template>
    <div class="home">
        <TheAdminHeader></TheAdminHeader>
        Welcome to TopdawgSports admin
    </div>
</template>

<script>
    // @ is an alias to /src
    import TheAdminHeader from '@/components/admin/TheAdminHeader.vue'

    export default {
        name: 'admindashboard',
        components: {
            TheAdminHeader
        }
    }
</script>
