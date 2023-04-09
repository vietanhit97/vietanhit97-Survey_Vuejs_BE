<template>
    <div class="container">
        <div class="table-responsive">
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone </th>
                        <th scope="col">Salary </th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="item in data" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.salary}}</td>
                    </tr>              
                </tbody>
            </table>
        </div>
    </div>
</template>

<script >
import axios from 'axios';
export default {
    data() {
      return {
        data: []
      };
    },
    mounted() {
      axios.get('http://localhost:6789/api/data')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>
