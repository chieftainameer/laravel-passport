<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <a href="#" class="navbar-brand">logo</a>
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <router-link to="/login" class="nav-link"
                        >Log in</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link"
                        >Register</router-link
                    >
                </li>
            </ul>
        </nav>
        <div class="container my-5">
            <h2>Registration Form</h2>
            <div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="name">Name:</label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                v-model="name"
                            />
                        </div>
                        <div class="col-md-6">
                            <label for="email">email:</label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                v-model="email"
                            />
                        </div>
                    </div>
                </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="password">Password:</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    v-model="password"
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="cpass">Confirm Password:</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    name="cpass"
                                    v-model="cpass"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-12">
                                <button
                                    class="btn btn-primary"
                                    @click="register"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        name: "",
        email: "",
        password: "",
        cpass: ""
    }),
    methods: {
        register() {
            if (this.password === this.cpass) {
                axios
                    .post("api/users", {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {
                        console.log(res);
                        this.$router.push("/login");
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                alert("errors");
            }
        }
    }
};
</script>
