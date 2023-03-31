<template>
    <div class="">
        <div class="cau1">
            <h4>
                Câu 1 : Bạn muốn đi du lịch như thế nào ?
            </h4>
            <ul class="">
                <li class="list-group-item">1. Đi biển</li>
                <li class="list-group-item">2. Đi leo núi</li>
                <li class="list-group-item">3. Đi thám hiểm</li>
                <li class="list-group-item">4. Đi nước ngoài</li>
                <li class="list-group-item">5. Đi miền tây</li>
            </ul>
            <button class="text-center"> Xem Thêm</button>
        </div>
        <div class="cau2 mt-3">
            <h4>
                Câu 2 : Bạn có thích ăn rau không ?
            </h4>
            <div class="row">
                <div class="col-3">
                    <div class="table-responsive">
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Số lượt chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td scope="row"> Rất thích</td>
                                    <td>5</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Thích </td>
                                    <td>1</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Không thích </td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="classification">
                <div class="h4 text-center">
                    Xếp loại
                </div>
                <div class="content-classification mt-3">
                    Xếp loại
                    <select class="form-inline form-select-lg" name="" id="">
                        <option selected>3</option>
                        <option value="">2</option>
                        <option value="">1</option>
                    </select>Lựa chọn được chọn nhiều nhất
                    <select class="form-inline form-select-lg" name="" id="">
                        <option selected>Nhiều nhất </option>
                        <option value="">2</option>
                        <option value="">1</option>
                    </select>
                </div>
                <ul class="">
                    <li class="list-group-item">No1. Rất thích </li>
                    <li class="list-group-item">No2. Bình thường </li>
                    <li class="list-group-item">No3. Không thích </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverallStatistics',
}
</script>

<style>
.cau1 {
    background-color: #E3E9F3;
    padding: 5px;
}
</style>