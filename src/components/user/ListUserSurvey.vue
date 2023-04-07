<template>
    <div class="UserSurvey">
        <div class="ContentListSurvey">
            <h2>
                Danh Sách Khỏa Sát
            </h2>
        </div>
        <div class="container mt-5">
            <form action="">
                <div class="row">
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Tên khảo sát ">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Đối tượng">
                        </div>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-success">Tìm kiếm</button>
                    </div>
                </div>
            </form>

            <table class="table view-table mt-5">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Nội Dung</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr v-for="(survey, index) in surveys" :key="survey.id">
                        <td class="text-right">{{ index+=1 }}</td>
                        <td class="text-left">{{ survey.nameSurvey }}</td>
                        <td  class="text-left">{{ survey.contentSurvey }}</td>
                        <td> <router-link class="btn btn-info text-right" :to="{ name: 'user-survey', params: { id: survey.id } }"><i class="fa-solid fa-ellipsis "></i></router-link></td>
                    </tr>
                </tbody>
            </table>
            <b-pagination v-model="currentPage" align="center" :total-rows="totalSurveys"
                :per-page="perPage"></b-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserSurvey',
    data() {
        return {
            surveys: [],
            currentPage: 1,
            perPage: 5,
            totalSurveys: 0
        };
    },
    methods: {
        getSurveys(page, size) {
            axios.get(`http://localhost:8081/survey/surveys?page=${page}&size=${size}`)
                .then(response => {
                    this.surveys = response.data.content;
                    this.totalSurveys = response.data.totalElements;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    watch: {
        currentPage: function (val) {
            this.getSurveys(val - 1, this.perPage);
        }
    },
    mounted() {
        this.getSurveys(this.currentPage - 1, this.perPage);
    }
}
</script>

<style>
.text-left {
    text-align: left;
}
</style>