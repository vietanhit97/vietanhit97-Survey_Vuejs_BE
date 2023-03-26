<template>
    <form class="FormListSurvey" action="">
        <div class="row g-3 align-items-center">
            <div class="col-sm-3">
                <select class="form-select">
                    <option selected>Bộ Phận</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Tên Khảo Sát:</label>
            </div>
            <div class="col-auto">
                <input type="password" id="inputPassword6" class="form-control">
            </div>
            <div class="col-auto">
                <input type="date" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
            </div>
            <div class="col-auto">
                <i class="fa-solid fa-right-long"></i>
            </div>
            <div class="col-auto">
                <input type="date" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
            </div>
            <div class="col-auto float-right">
                <button type="submit" class="btn btn-success">Tìm Kiếm</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'FormListSurvey'
}
</script>

<style>
.FormListSurvey{
    padding: 30px;
}
</style>