<template>
    <div class="hello">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="/img/logo.png" width="150" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link">Admin</router-link>
                </li>
                
                </ul>
                <Menu mode="horizontal" active-name="1">
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            Dropdown
                        </template>
                        <MenuGroup title="1-3">
                            <MenuItem name="3-1">Menu1</MenuItem>
                            <MenuItem name="3-2">Menu2</MenuItem>
                            <MenuItem name="3-3">Menu3</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="4-5">
                            <MenuItem name="3-4">Menu4</MenuItem>
                            <MenuItem name="3-5">Menu5</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <!-- <a class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#login">Get Start</a> -->
                <b-button variant="outline-success" v-b-modal.login>Masuk</b-button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'navBar',
    props: {
        msg: String
    },
    components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
