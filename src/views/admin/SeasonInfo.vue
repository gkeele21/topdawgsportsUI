<template>
    <div class="home">
        <TheAdminHeader/>
        <SeasonInfoTable />
    </div>
</template>

<script>
    // @ is an alias to /src
    import SeasonInfoTable from '@/components/admin/SeasonInfoTable.vue'
    import TheAdminHeader from '@/components/admin/TheAdminHeader.vue'

    export default {
        name: 'seasoninfo',
        components: {
            SeasonInfoTable,
            TheAdminHeader
        }
    }
</script>
