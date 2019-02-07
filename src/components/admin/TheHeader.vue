<template>
    <div id="navHeader">
        <span id="nav">
            <router-link to="/admin">Home</router-link> |
            <router-link to="/admin/seasons">Seasons</router-link> |
            <router-link to="/admin/users">Users</router-link>
        </span>
        <img alt="Vue logo" src="../../assets/logo.png" />
        <span>This is the admin header</span>
    </div>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>