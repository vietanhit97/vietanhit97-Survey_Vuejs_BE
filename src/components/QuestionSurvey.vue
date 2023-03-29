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
                    <input type="file" ref="fileInput" @change="previewImage" class="form-control" name="" id=""
                        placeholder="" aria-describedby="fileHelpId">
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
            <img v-if="imageUrl" :src="imageUrl" class ="me-2"/>
            <button v-if="imageUrl" @click="deleteImage" class="btn btn-sm btn-danger">Xóa ảnh</button>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextView from './TextView.vue'
import OneSelectView from './OneSelectView.vue'
export default {
    name: 'QuestionSurvey',
    components: {
        TextView, OneSelectView
    }, data() {
        return {
            component : 'TextView',
            imageUrl: null
        }
    },
    methods: {
        previewImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.imageUrl = e.target.result;
            }
            // Clear the input to allow selecting the same file again
            this.$refs.fileInput.value = null;
        },
        deleteImage() {
            this.imageUrl = null;
        }
    }
}
</script>

<style></style>