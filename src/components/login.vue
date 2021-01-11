<template>
    <div class="login">
        <b-modal id="login" hide-header hide-footer>
            <div>
                <b-tabs content-class="mt-3" justified pills card>
                    <b-tab title="Login" active>
                        <h5 class="text-center">Login</h5>
                        <b-card-body>
                            <b-form-group
                                id="email1"
                                description="Example: user@gmail.com"
                                label="E-mail"
                                >
                                <b-form-input id="email1" v-model="email" placeholder="email" trim></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="password1"
                                label="Password"
                                >
                                <b-form-input id="password1" v-model="password" placeholder="******" trim></b-form-input>
                            </b-form-group>
                        </b-card-body>
                        <div class="modal-footer">
                            <b-button variant="primary" @click="login()">Login</b-button>
                        </div>
                    </b-tab>

                    <b-tab title="Sign-Up">
                        <h5 class="text-center">Buat Akun</h5>
                        <b-card-body>
                            <b-form-group
                                id="name"
                                label="Name"
                                >
                                <b-form-input id="name" v-model="name" placeholder="Masukan Nama" trim></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="email"
                                description="Example: user@gmail.com"
                                label="E-mail"
                                >
                                <b-form-input id="email" v-model="email" placeholder="Masukan email" trim></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="password"
                                label="Password"
                                >
                                <b-form-input id="password" v-model="password" placeholder="Masukan password" trim></b-form-input>
                            </b-form-group>
                        </b-card-body>
                        <div class="modal-footer">
                            <b-button variant="primary" @click="register">Register</b-button>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {fb} from "../firebase.js"
    export default {
        name: 'login',
        props:{
            msg: String
        },
        data(){
            return {
                name: null,
                email: null,
                password: null,
            }
        },

        methods:{
            login(){
                fb.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.replace('admin');
                    })
                    .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                    } else {
                    alert(errorMessage);
                    }
                    console.log(error);
                    });

            },

            register(){
                fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((user) => {
                        this.$router.replace('admin');
                    })
                    .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                });
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>