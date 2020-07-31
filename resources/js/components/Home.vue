<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <a href="#" class="navbar-brand">logo</a>
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about-us" class="nav-link"
                        >About Us</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/contact-us" class="nav-link"
                        >Contact Us</router-link
                    >
                </li>
                <li class="nav-item mx-5" @click="logout">
                    <router-link to="#" class="nav-link">Log out</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data: () => ({}),
    methods: {
        logout() {
            localStorage.removeItem("ACCESS_TOKEN");
            this.$router.push("/login");
        }
    }
};
</script>
