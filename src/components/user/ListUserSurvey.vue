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
                    <div class="col-3">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Tên khảo sát ">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="Đối tượng">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="mb-3">
                            <select class="form-select form-select-lg" name="" id="">
                                <option selected>---Chọn---</option>
                                <option value="">Chưa Hoàn thành</option>
                                <option value="">Hoàn Thành</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-success">Tìm kiếm</button>
                    </div>
                </div>
            </form>

            <table class="table view-table mt-5">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Chọn</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Nội Dung</th>
                        <th scope="col">Đối Tượng </th>
                        <th scope="col">Trạng Thái </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <th scope=""><input type="checkbox" name="" id=""></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><i class="fa-solid fa-ellipsis "></i></td>
                    </tr>
                    <tr>
                        <th scope=""><input type="checkbox" name="" id=""></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><i class="fa-solid fa-ellipsis"></i></td>
                    </tr>
                    <tr>
                        <th scope=""><input type="checkbox" name="" id=""></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><i class="fa-solid fa-ellipsis"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserSurvey'
}
</script>

<style></style>