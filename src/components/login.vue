<template>
    <div class="login">
        <b-modal id="login" hide-header hide-footer>
            <div>
                <b-tabs content-class="mt-3" justified>
                    <b-tab title="Login" active>
                        <b-card-body>
                            <b-form-group
                                id="email"
                                description="Example: user@gmail.com"
                                label="E-mail"
                                label-for="email"
                                valid-feedback="Thank you!"
                                >
                                <b-form-input id="email" v-model="email" trim></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="password"
                                label="Password"
                                label-for="password"
                                valid-feedback="Thank you!"
                                >
                                <b-form-input id="password" v-model="password" trim></b-form-input>
                            </b-form-group>
                        </b-card-body>
                        <modal-footer>
                            <b-button variant="outline-primary">close</b-button>
                            <b-button variant="primary">Login</b-button>
                        </modal-footer>

                    </b-tab>

                    <b-tab title="Sign-Up"><p>I'm the second tab</p></b-tab>
                </b-tabs>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import firebase from "../firebase.js"
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
            register(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(function(error) {
                        //handle error
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            alert('Password Lemah');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>