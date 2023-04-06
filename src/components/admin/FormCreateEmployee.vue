<template>
  <div class="div">
    <div class="row ContentListSurvey">
      <div class="col-6 ">
        <div class="text-left">
          <h2>
            Tạo nhân viên
          </h2>
        </div>
      </div>
    </div>
    <!-- <form class="d-flex" action="" method="post" @submit.prevent="submitForm">
      <div class="container bg-form mt-5">
        <div class="row bg-row">
          <div class="col-7">
            <div class="mb-3">
              <label for="" class="form-label">Họ và tên :</label>
              <input type="text" name="" id="" class="form-control  form-el" placeholder="" aria-describedby="helpId"
                v-model="username" required>
              <div class="invalid-feedback" v-if="$errors.has('username')">{{ errors.username[0] }}</div>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Số điện thoại:</label>
              <input type="text" name="" id="" class="form-control form-el" placeholder="" aria-describedby="helpId">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Địa chỉ :</label>
              <input type="text" name="" id="" class="form-control form-el" placeholder="" aria-describedby="helpId">
            </div>
            <div class="row">
              <div class="col-6">
                <div class="mb-3 ">
                  <select class="form-select form-select-lg" name="" id="">
                    <option selected>Vịt trí</option>
                    <option value="">Dev</option>
                    <option value="">Test</option>
                    <option value="">Brse</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3 ">
                  <select class="form-select form-select-lg" name="" id="">
                    <option selected>Giới Tính</option>
                    <option value="">Nam</option>
                    <option value="">Nữ</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="mb-3">
              <label for="" class="form-label">Email :</label>
              <input type="text" name="" id="" class="form-control form-el" placeholder="" aria-describedby="helpId">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Tài khoản :</label>
              <input type="text" name="" id="" class="form-control form-el" placeholder="" aria-describedby="helpId">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Mật khẩu :</label>
              <input type="text" name="" id="" class="form-control form-el" placeholder="" aria-describedby="helpId">
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3">
          <button type="button" class="btn  btn-danger me-5">Hủy</button>
          <button type="submit" class="btn btn-success">Thêm</button>
        </div>
      </div>
    </form> -->
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
          <input v-model="email" type="email">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
          <input v-model="firstName" type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
          <input v-model="lastName" type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button type="submit" :disabled="invalid">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>

export default {
  name: 'FormCreateEmployee',
  data: () => ({
    email: '',
    firstName: '',
    lastName: ''
  }),
  methods: {
    onSubmit() {
      alert('Thêm Thành công!');
    }
  }
}
</script>

<style>
.form-el {
  /* Loại bỏ border */
  border: 1px dotted #000;
  /* Thêm border-bottom với kiểu chấm chấm và màu đen */
  outline: none;
  /* Loại bỏ viền xung quanh trường nhập liệu */
}

.bg-form {
  background-color: #ECE8E8;
  padding: 40px;
  border-radius: 30px;
}

.bg-row {
  background-color: #CBDBEB;
  padding: 20px;
  border-radius: 20px;
}
</style>