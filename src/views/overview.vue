<template>
    <div class="overview">
        <div class="container h-100">
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Overview Pages</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore minima quisquam facere molestias quam possimus. Harum deleniti laboriosam, modi architecto veritatis ratione enim sit beatae pariatur vitae itaque obcaecati hic?</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/img/svg/overvieww.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Overview",
        props: {
            msg: String
        }
    };
</script>

<style lang="scss" scoped>
    body {
        color: black;
    }
</style>