<template>
    <div class="content mt-5">
        <div class="row">
            <div class="col-4">
                <label for="" class="form-label">Câu hỏi ?</label>
                <input type="text" name="" id="" class="form-control " placeholder="" aria-describedby="helpId">
            </div>
            <div class="col-4 ">
                <div class="mb-3">
                    <label for="" class="form-label">Chọn ảnh :</label>
                    <input type="file" @change="onFileChange" class="form-control" name="" id="" placeholder=""
                        aria-describedby="fileHelpId">
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-6">
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                            <label for="" class="form-label">Chọn kiểu câu hỏi :</label>
                            <select class="form-select form-select-lg" v-model="component" name="" id="">
                                <option value="">Chọn 1</option>
                                <option value="">Chọn nhiều</option>
                                <option value="TextView">Văn bản</option>
                                <option value="OneSelectView">Thang điểm</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <img :src="selectedImage" alt="">
        </div>
        <component :is="component"></component>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="">
            <label class="form-check-label" for="">
                Tùy chọn 1
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="" checked>
            <label class="form-check-label" for="">
                Thêm tùy chọn
            </label>
        </div>
        <div class="row mt-5">
            <div class="col-6">
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="">
                            <label class="form-check-label" for="">
                                Bắt buộc trả lời
                            </label>
                        </div>
                    </div>
                    <div class="col-6">
                        <input type="reset" class="btn btn-danger" value="Hủy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextView from './TextView.vue'
import OneSelectView from './OneSelectView.vue'
export default {
    name : 'QuestionSurvey',
    components:{
        TextView,OneSelectView
    },
    data() {
        return {
            selectedImage: null,
            component : 'TextView'
        }
    }, methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.selectedImage = URL.createObjectURL(file);
            console.log(this.selectedImage);
        }
    }
}
</script>

<style></style>