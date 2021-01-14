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

            <br>
            <h3>Our Product</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                    </tr>

                </tbody>
            </table>
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
                products: [],
                product: {
                    name:null,
                    price:null
                }
            }
        },
        methods: {
            readData(){
                db.collection("products").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    this.products.push(doc.data());
                });
            });
            },
            saveData(){
                db.collection("products").add(this.product)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.readData();
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            },
            reset(){
                // Object.assign(this.$data, this.$options.data.apply(this));
            },
        },
        created(){
            this.readData();
        }
    }
</script>

<style lang="scss" scoped>

</style>