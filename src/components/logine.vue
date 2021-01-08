<template>
    <div class="login">
        <!-- Modal -->
        <div class="modal fade" id="login" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <b-tabs content-class="mt-3" fill justified>
                            <b-tab title="First" active>
                                <div class="modal-body">
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="password" placeholder="Your Password">
                                        </div>
                                    </div>
                                    Not Registered? <a class="btn btn-outline-success btn-sm" type="button" data-toggle="modal" data-target="#signup">Register Here!</a>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Login</button>
                                </div>
                            </b-tab>
                            <b-tab title="Second">
                                <div class="modal-body">
                                    <h5 class="text-center">Buat Akun</h5>
                                <div class="form-group">
                                    <label for="name">Nama</label>
                                    <input type="text" v-model="name" class="form-control" id="name" placeholder="Masukan nama kamu">
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" v-model="email" class="form-control" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" v-model="password" class="form-control" id="password">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" @click="register"></button>
                                </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                        <!-- <ul class="nav nav-tabs">
                            <li class="nav-item">
                            <a class="nav-link active" href="#login">Active</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#pills-register">Link</a>
                            </li>
                        </ul> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <!-- <div class="modal-body">
                        <div class="form-group row">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="Your Email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="password" placeholder="Your Password">
                            </div>
                        </div>
                        Not Registered? <a class="btn btn-outline-success btn-sm" type="button" data-toggle="modal" data-target="#signup">Register Here!</a>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Login</button>
                    </div> -->
                </div>

                <!-- <div class="tab-panel fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register">
                    <h5 class="text-center">Buat Akun</h5>
                    <div class="form-group">
                        <label for="name">Nama</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="Masukan nama kamu">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" v-model="email" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="register"></button>
                    </div>

                </div> -->
            </div>
        </div>
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
        components: {}
    }
</script>

<style lang="scss" scoped>

</style>