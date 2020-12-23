<template>
    <div class="products" id="products">
        <div class="container">
            <h1 class="text-center p-5">Our Products</h1>
            <div class="row">
                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Book 2</h5>
                            <p class="card-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laboriosam placeat vitae cupiditate repellendus.
                            </p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Laptop 2</h5>
                            <p class="card-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laboriosam placeat vitae cupiditate repellendus.
                            </p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laboriosam placeat vitae cupiditate repellendus.
                            </p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Products",
        props: {
            msg: String
        }
    }
</script>

<style lang="scss" scoped>
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>