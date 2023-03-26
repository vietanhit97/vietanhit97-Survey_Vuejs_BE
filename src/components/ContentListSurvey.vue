<template>
    <div class="row ContentListSurvey">
        <div class="col-6 ">
            <div class="text-left">
                <h2>
                    Danh Sách Khỏa Sát
                </h2>
            </div>
        </div>
        <div class="col-6 add">
            <a class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Tạo Mới Khảo
                Sát</a>
        </div>
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Khảo sát dành cho đối tượng nào ?</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form action="" method="">
                        <div class="modal-body">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1">Dev</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">Test</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">BrSE</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">Tất Cả</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" class="btn btn-primary">Đồng ý</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContentListSurvey',
    methods: {
        showModal() {
            this.$refs.myModal.show()
        }
    }
}
</script>
<style>
.ContentListSurvey {
    padding: 40px;
    border-bottom: 1px solid #000000;
}

.ContentListSurvey .add {
    text-align: right;
}

.ContentListSurvey h2 {
    text-align: left;
}
</style>