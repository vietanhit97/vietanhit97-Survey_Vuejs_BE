<template>
    <div class="wrapper">
        <PageHearder />
        <div class="d-flex align-items-center justify-content-center " style="height: 60vh;">
            <div class="bg-cl">
                <form>
                    <div class="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Nhập tài khoản"/>
                    </div>
                    <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Nhập mật khẩu" />
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-cl">
                        <button class="btn btn-primary me-2" type="submit">Đăng nhập</button>
                        <button class="btn btn-success" type="submit">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
        <PageFooter />
    </div>
</template>

<script>
import PageHearder from './components/layout/PageHearder.vue'
import PageFooter from './components/layout/PageFooter.vue'
export default {
    name: 'PageExternalUsers',
    components: {
        PageHearder, PageFooter
    }
}
</script>

<style>
.bg-cl {
    padding: 30px;
    background-color: #E3C2B9;
    border-radius: 20px;
}
</style>