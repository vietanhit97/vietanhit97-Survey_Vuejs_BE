<template>
    <div class="div">
        <div class="d-flex align-items-center justify-content-center " style="height: 100vh;">
            <div class="bg-cl">
                <form>
                    <div class="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" class="form-control form-control-lg"  />
                    </div>
                    <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-cl">
                        <button class="btn btn-success" type="submit">Gửi</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageExternalUsers'
}
</script>

<style>
.bg-cl {
    padding: 30px;
    background-color: #D4E0EB;
    border-radius: 20px;
}
</style>