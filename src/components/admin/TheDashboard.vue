<template>
    <div>
        <span id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/seasons">Seasons</router-link>
            <router-link to="/users">Users</router-link>
        </span>
        <img alt="Vue logo" src="../assets/logo.png" />
        <span>This is the admin dashboard</span>
    </div>
</template>

<script>
    export default {
        name: "TheDashboard"
    }
</script>