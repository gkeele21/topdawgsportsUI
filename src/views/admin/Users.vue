<template>
    <div class="home">
        <TheAdminHeader />
        <UsersTable msg="My Users"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import UsersTable from '@/components/admin/UsersTable.vue'
    import TheAdminHeader from '@/components/admin/TheAdminHeader.vue'

    export default {
        name: 'users',
        components: {
            UsersTable,
            TheAdminHeader
        }
    }
</script>