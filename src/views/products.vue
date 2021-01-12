<template>
    <div class="product">
        <div class="container">
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Product Page</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat commodi molestias hic debitis et. Accusantium, ratione animi nulla voluptatum quod maiores aperiam minima expedita, enim ab repellat, cum perspiciatis.</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/img/svg/productss.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <br>

            <h3>CRUD in Firebase</h3>
            <div class="product-test">
                <div class="form-group">
                    <input type="text" placeholder="product Name" v-model="product.name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Price" v-model="product.price" class="form-control">
                </div>
                <div class="form-group">
                    <button @click="saveData" class="btn btn-primary">Save Product</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {fb, db} from "../firebase"
    export default {
        name: "products",
        props: {
            msg: String
        },

        data(){
            return {
                product: {
                    name:null,
                    price:null
                }
            }
        },
        methods: {
            saveData(){
                db.collection("products").add(this.product)
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>