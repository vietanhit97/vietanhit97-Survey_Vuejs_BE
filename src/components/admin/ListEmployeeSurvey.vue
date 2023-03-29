<template>
    <div class="div">
        <div class="row ContentListSurvey">
            <div class="col-6 ">
                <div class="text-left">
                    <h2>
                        Danh sách nhân viên công ty
                    </h2>
                </div>
            </div>
            <div class="col-6 add">
                <a class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Thêm nhân
                    viên</a>
            </div>
        </div>
        <div class="container mt-5">
            <form action="">
                <div class="row">
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Tên nhân viên">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Gmail...">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Số điện thoại ...">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-3">
                            <select class="form-select form-select-lg" name="" id="">
                                <option selected>Vị trí </option>
                                <option value="">Dev</option>
                                <option value="">Test</option>
                                <option value="">Brse</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mb-3">
                            <select class="form-select form-select-lg" name="" id="">
                                <option selected>Khảo sát </option>
                                <option value="">abc</option>
                                <option value="">bbb</option>
                                <option value="">vcs</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <button value="submit" class="btn btn-success">Tìm kiếm</button>
                    </div>
                </div>
            </form>
            <table class="table view-table mt-5">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Chọn</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Vị trí</th>
                        <th scope="col">Gmail</th>
                        <th scope="col">Khảo Sát</th>
                        <th scope="col">Chức Năng </th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr v-for="(item, index) in items" :key="index">
                        <th scope=""><input type="checkbox" v-model="item.checked" @change="updateCheckedStatus" /></th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.obj }}</td>
                        <td>{{ item.status }}</td>
                        <td><a href="" class="btn btn-sm "><i class="fa-solid fa-trash-can fa-2x "
                                    style="color: red;"></i></a>
                            <a class="btn btn-sm "><i class="fa-solid fa-pen-to-square fa-2x" style="color: blue;"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalCenter"></i></a>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="removeAll text-left"> <button class="btn btn-danger" v-if="showDeleteButton"
                    @click="deleteSelectedItems">Xóa</button></div>
            <PaginateComp />
        </div>

    </div>
</template>

<script>
import PaginateComp from "../PaginateComp.vue"
export default {
    name: 'ListEmployeeSurvey',
    components: {
        PaginateComp
    }
    , data() {
        return {
            items: [
                { checked: false, name: "Tên 1", title: "Test", obj: 'admin@gmail.com', status: "abc,fasdfsa,adf" },
                { checked: false, name: "Tên 2", title: "Dev", obj: 'admin@gmail.com', status: "abc,fasdfsa,adf" },
                { checked: false, name: "Tên 3", title: "Brse", obj: 'admin@gmail.com', status: "abc,fasdfsa,adf" },
            ],
            showDeleteButton: false
        }
    },
    methods: {
        updateCheckedStatus() {
            this.showDeleteButton = this.items.some(item => item.checked);
        },
        deleteSelectedItems() {
            this.items = this.items.filter(item => !item.checked);
            this.showDeleteButton = false;
        }
    }
}
</script>

<style>

</style>