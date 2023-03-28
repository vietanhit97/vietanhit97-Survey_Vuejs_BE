<template>
    <div class="CreateQuestionImage">
        <div class="container bg ">
            <form action="">
                <div class="title">
                    <h3 class="t1">
                        Tiêu đề khảo sát 1
                    </h3>
                    <div class="mb-3">
                        <label for="" class="form-label">Nội dung : Mô tả khảo sát ...</label>
                        <textarea class="form-control" name="" id="" rows="1"></textarea>
                    </div>
                </div>
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
                                    <div class="form-check form-check-inline mt-4 text-center ">
                                        <input class="form-check-input" type="checkbox" id="" value="option1">
                                        <label class="form-check-label" for=""> Chọn 1 đáp án </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <img :src="selectedImage" alt="">
                    </div>
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
                <div class="d-flex justify-content-center align-items-center mt-5">
                    <a name="" id="" class="btn btn-primary" href="#" role="button">Thêm câu hỏi</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CreateQuestionImage',
    data() {
        return {
            selectedImage: null
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

<style>
.bg {
    background-color: #EEF0DA;
    padding: 30px;
}

.CreateQuestionImage .title ,
.CreateQuestionImage .content {
    background-color: #E3E9F3;
    padding: 30px;
}

h3 {
    border-bottom: solid 1px black;
    padding: 20px;
}

.CreateQuestionImage .content {
    border-bottom: 1px dashed black;
}

</style>