<template>
    <div class="container ">
        <div class="content-statistical text-center mb-3">
            <h2>
                Khảo sát nội bộ nhân viên Tri Thức Mới
            </h2>
            <p>
                Nội dung : Đóng góp ý kiến để lựa chọn điểm vui chơi
            </p>
            <div class="d-flex justify-content-center align-items-center ">
                <button @click="showComponentA" class="btn btn-info me-2">Tổng thể </button>
                <button @click="showComponentB" class="btn btn-primary me-2">Cá nhân</button>
            </div>
        </div>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
import OverallStatistics from "./OverallStatistics.vue"
import PersonalStatistics from "./PersonalStatistics.vue"
export default {
    name: 'StatisticalSurvey',
    components: {
        OverallStatistics,
        PersonalStatistics
    }, data() {
        return {
            currentComponent: 'OverallStatistics'
        };
    },
    methods: {
        showComponentA() {
            this.currentComponent = 'OverallStatistics';
        },
        showComponentB() {
            this.currentComponent = 'PersonalStatistics';
        }
    }
}
</script>

<style>
.content-statistical {
    border-bottom: 1px solid black;
    padding-bottom: 50px;
}
</style>