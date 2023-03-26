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
                <tr>
                    <th scope=""><input type="checkbox" name="" id=""></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><a href="" class="btn btn-sm "><i class="fa-solid fa-trash-can fa-2x " style="color: red;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-pen-to-square fa-2x"
                                style="color: blue;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-copy fa-2x"></i></a>
                    </td>
                </tr>
                <tr>
                    <th scope=""><input type="checkbox" name="" id=""></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><a href="" class="btn btn-sm "><i class="fa-solid fa-trash-can fa-2x " style="color: red;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-pen-to-square fa-2x"
                                style="color: blue;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-copy fa-2x"></i></a>
                    </td>
                </tr>
                <tr>
                    <th scope=""><input type="checkbox" name="" id=""></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td><a href="" class="btn btn-sm "><i class="fa-solid fa-trash-can fa-2x " style="color: red;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-pen-to-square fa-2x"
                                style="color: blue;"></i></a>
                        <a href="" class="btn btn-sm "><i class="fa-solid fa-copy fa-2x"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="removeAll text-left"><a href="" class="btn">Xóa</a></div>
    </div>
</template>

<script>

export default {
    name: 'TableComp',
}
</script>

<style>
.view-table{
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

.removeAll a {
    text-align: left;
    background: #E3C2B9;

}
</style>