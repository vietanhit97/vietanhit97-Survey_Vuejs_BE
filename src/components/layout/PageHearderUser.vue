<template>
    <header>
        <div class="row">
            <div class="col-sm-4">
                <a href="https://trithucmoi.co/">
                    <img src="https://trithucmoi.co/app_assets/images/ttm_logo.png" alt="">
                </a>
            </div>
            <div class="col-sm-4 ">
                <nav class="navbar navbar-expand-sm navbar-light ">
                    <div class="container">
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                                <router-link to="/surveys-user" exact class="nav-link"
                                    :class="{ 'active': $route.path === '/surveys-user' }">
                                    Khảo sát
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-sm-4 ">
                <!-- Button in the end -->
                <div class="dropdown bg-none ">
                    <button class="btn btn-secondary dropdown-toggle border-0 float-right"
                        style="background:none;float:right" type="button" id="triggerId" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <a class="dropdown-item" href="#">Thông Tin</a>
                        <a class="dropdown-item" href="#">Đăng xuất</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'PageHearderUser'
}
</script>
<style>

</style>