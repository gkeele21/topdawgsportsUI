<template>
    <div class="home">
        <the-header />
        <UsersTable msg="My Users"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import UsersTable from '@/components/admin/UsersTable.vue'
    import TheHeader from '@/components/admin/TheHeader.vue'

    export default {
        name: 'users',
        components: {
            UsersTable,
            TheHeader
        }
    }
</script>