<template>
    <div class="CreateQuestionContent">
        <div class="container bg ">
            <div class="title">
                <h3 class="t1">
                    Khảo sát nội bộ nhân viên Tri Thức Mới
                </h3>
                <div class="mb-3">
                    <label for="" class="form-label">Nội dung : Đóng góp ý kiến để lựa chọn địa điểm vui chơi </label>

                </div>
            </div>
            <div class="title mt-5">
                <h4 class="t1">
                    Câu 1 : Bạn muốn du lịch như thế nào :
                </h4>
                <div class="d-flex justify-content-center align-items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOCIPOxKGbMo_LhjiZ3kQquwhDkjuNWNPUg&usqp=CAU" />
                </div>
                <div class="mb-3 mt-3">
                    <input type="text" class="form-control transparent;" name="inputName" id="inputName"
                        placeholder="Câu trả lời của bạn">
                </div>
            </div>
            <div class="title mt-5">
                <h4 class="t1">
                    Câu 2 : Bạn muốn an rau rền không ?
                </h4>
                <div class="mb-3 mt-3">
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Không thích
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Thích
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Rất thích
                        </label>
                    </div>
                </div>
            </div>
            <div class="title mt-5">
                <h4 class="t1">
                    Câu 3 : Thể lực sau khi chạy 20km/h
                </h4>
                <div class="mb-3 mt-3">
                    <div class="form-check form-check-inline">
                        Yếu
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault20">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault21"
                            checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            2
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault22">
                        <label class="form-check-label" for="flexRadioDefault2">
                            3
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault23">
                        <label class="form-check-label" for="flexRadioDefault2">
                            4
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault24">
                        <label class="form-check-label" for="flexRadioDefault2">
                            5
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        Khỏe
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreviewSurvey'
}
</script>

<style>
.transparent {
    background-color: transparent !important;
}
</style>