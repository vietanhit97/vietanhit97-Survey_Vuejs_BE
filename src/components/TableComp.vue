<template>
    <div class="div">
        <table class="table view-table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Chọn</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Nội Dung</th>
                    <th scope="col">Đối Tượng </th>
                    <th scope="col">Trạng Thái </th>
                    <th scope="col">Chức Năng </th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr v-for="(item, index) in items" :key="index">
                    <th scope=""><input type="checkbox" v-model="item.checked" @change="updateCheckedStatus" /></th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.obj }}</td>
                    <td><span
                            v-html="item.status ? '<span class=&quot;badge  bg-success&quot;>Hoàn thành</span>' : '<span class=&quot;badge bg-danger&quot;>Chưa hoàn thành</span>'"></span>
                    </td>
                    <td><a href="" class="btn btn-sm "><i class="fa-solid fa-trash-can fa-2x " style="color: red;"></i></a>
                        <a class="btn btn-sm "><i class="fa-solid fa-pen-to-square fa-2x" style="color: blue;"
                                data-bs-toggle="modal" data-bs-target="#exampleModalCenter"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-copy fa-2x"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="removeAll text-left"> <button class="btn btn-danger" v-if="showDeleteButton"
                @click="deleteSelectedItems">Xóa</button></div>
    </div>
</template>

<script>

export default {
    name: 'TableComp',
    data() {
        return {
            items: [
                { checked: false, name: "Item 1", title: 2, obj: 'Dev', status: true },
                { checked: false, name: "Item 2", title: 2, obj: 'Dev', status: false },
                { checked: false, name: "Item 3", title: 2, obj: 'Dev', status: true },
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
.view-table {
    text-align: center;
}

.thead-light {
    background: #C2D7EB;
}

.tbody {
    background: #ECE8E8;
}

.removeAll {
    float: left;
    padding-left: 40px;
}

.removeAll .tn-cam {
    text-align: left;
    background: #E3C2B9;

}</style>