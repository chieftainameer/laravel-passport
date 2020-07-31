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
        <div class="jumbotron my-5">
            <div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="email"  />
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="pass"  />
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <button class="bn btn-primary" @click="login">Log in</button>
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
        email:'',
        pass:'',
    }),
    methods:{
        login(){
            axios.post('api/user/login',{email:this.email,password:this.pass})
            .then(res => {
                localStorage.setItem('ACCESS_TOKEN',res.data.access_token);
                this.$router.push('/home');
            })
            .catch(err => console.log(err.data))
        }
    }
}
</script>