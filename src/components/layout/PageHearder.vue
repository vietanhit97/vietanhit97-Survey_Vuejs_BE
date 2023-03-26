<template>
    <header >
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
                                <li class="nav-item">
                                    
                                    <a class="nav-link active" href="#" aria-current="page">Khảo sát <span
                                            class="visually-hidden">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Thành Viên</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Ban quản lý</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-sm-4 ">
                <!-- Button in the end -->
               <div class="dropdown bg-none ">
                <button class="btn btn-secondary dropdown-toggle border-0 float-right" style="background:none;float:right" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa-solid fa-user fa-2x"></i>
                        </button>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                    <a class="dropdown-item" href="#">profile</a>
                    <a class="dropdown-item" href="#">login</a>
                    <a class="dropdown-item" href="#">loguot</a>
                </div>
               </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>
<style>
header {
    left: 40px;
    top: 0px;
    background: #E3C2B9;
    padding: 20px;
}
</style>