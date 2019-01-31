<template>
    <div class="home">
        <the-header />
        <SeasonsTable msg="My Seasons"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SeasonsTable from '@/components/admin/SeasonsTable.vue'
    import TheHeader from '@/components/admin/TheHeader.vue'

    export default {
        name: 'seasons',
        components: {
            SeasonsTable,
            TheHeader
        }
    }
</script>