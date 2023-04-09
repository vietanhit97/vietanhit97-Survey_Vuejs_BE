<template>
    <div class="wrapper">
        <PageHearder />
        <div class="d-flex align-items-center justify-content-center " style="height: 60vh;">
            <div class="bg-rg">
                <form>
                    <div class="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" class="form-control form-control-lg"
                            placeholder="Nhập tài khoản" />
                    </div>
                    <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg"
                            placeholder="Nhập mật khẩu" />
                    </div>
                    <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg"
                            placeholder="Nhập lại mật khẩu" />
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <select class="form-select form-select-lg"  name="" id="">
                                    <option selected="">Vai trò</option>
                                    <option value="">Adim</option>
                                    <option value="">User</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <select class="form-select form-select-lg"  name="" id="">
                                    <option security="">Vị trí</option>
                                    <option value="">Dev</option>
                                    <option value="">Test</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <button type="submit" class="btn btn-success">Đăng kí</button>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <router-link to="/external-users">Quay lại đăng nhập</router-link>
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
    name: 'PageRegisterUser',
    components: {
        PageHearder, PageFooter
    }
}
</script>

<style>
.bg-rg{
    padding: 30px;
    background-color: #BBD6D4;
    border-radius: 20px;
}
</style>