<template>
    <div class="hero">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            Dayat'S Shop Development
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laudantium quia voluptatem a corporis praesentium vel architecto reiciendis suscipit animi omnis commodi et amet voluptatum minima voluptatibus, nulla voluptates quisquam!</p>
                        <div class="hero-btn mt-5">
                            <button class="btn custom-btn btn-info mr-4">Explore</button>
                            <button class="btn custom-btn btn-outline-secondary">Our Products</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="graphic">
                        <img src="/img/svg/graphic.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Hero",
        props: {
            msg: String
        }
    };
</script>
<style scooped>
body {
color: white;
}
</style>
