<template>
    <div class="ContentAddSurvey">
        <div class="content-header">
            <div class="text-left">
                <h2>
                    Tạo Khảo Sát
                </h2>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row text-center mt-3">
                <div class="col-3">
                    <div class="row ">
                        <div class="col-6 ">
                            <h4>Thiết Lập</h4>
                        </div>
                        <div class="col-6">
                            <i class="fa-solid fa-right-long fa-2x "></i>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row ">
                        <div class="col-6 ">
                            <h4>Tạo câu hỏi</h4>
                        </div>
                        <div class="col-6">
                            <i class="fa-solid fa-right-long fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row ">
                        <div class="col-6 ">
                            <h4>Xem trước</h4>
                        </div>
                        <div class="col-6">
                            <i class="fa-solid fa-right-long fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row ">
                        <div class="col-6 ">
                            <h4>Thống kê</h4>
                        </div>
                        <div class="col-6">
                        </div>
                    </div>
                </div>
            </div>
            <b-form @submit="onSubmit" @reset="onReset">
                <div class="row mt-5 ">
                    <div class="col-6">
                        <label for="">1. Có cho người dùng xem kết quả không ?</label>
                        <div class="row ">
                            <div class="col-3">
                                <div class="form-check">
                                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios"
                                        value="True">Có</b-form-radio>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-check ">
                                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios"
                                        value="False">Không</b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 text-center">
                        <label for="">Người tham gia trả lời câu hỏi :</label>
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Lựa chọn</th>
                                        <th scope="col">Tên/chức vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <td><b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1"
                                                value="accepted" unchecked-value="not_accepted">

                                            </b-form-checkbox></td>
                                        <td>Tất Cả </td>
                                    </tr>
                                    <tr class="">
                                        <td><b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1"
                                                value="accepted" unchecked-value="not_accepted">
                                            </b-form-checkbox></td>
                                        <td>Dev </td>
                                    </tr>
                                    <tr class="">
                                        <td><b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1"
                                                value="accepted" unchecked-value="not_accepted">
                                            </b-form-checkbox></td>
                                        <td>Test</td>
                                    </tr>
                                    <tr class="">
                                        <td><b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1"
                                                value="accepted" unchecked-value="not_accepted">
                                            </b-form-checkbox></td>
                                        <td>Brse</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-5">
                    <b-button type="submit" class="text-center" variant="success">Tiếp<i class="fa-solid fa-right-long fa-1x "></i></b-button>
                </div> 
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: ''
        }
    }
}
</script>

<style>
.content-header {
    padding: 40px;
    border-bottom: 1px solid #000000;
}
</style>