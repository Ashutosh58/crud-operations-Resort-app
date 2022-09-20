<template>
  <HeaderPage />
  <div class="wrapper">
  <img class="logo" src="../assets/restro-logo.jpg" />
  <h1>Hello {{ name }}, Welcome </h1>
  <h3>Restaurant List</h3>

  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
    <tr v-for="(item,index) in restaurant" :key="index">
      <td>{{ parseInt(index+1) }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id"><img class="icon" src="../assets/update.png" /></router-link>
        <!-- <a href="#" v-on:click="deleteRestaurant(item.id)">Delete</a> -->
        <img class="icon" v-on:click="deleteRestaurant(item.id)" src="../assets/delet.jpg" />
      </td>
    </tr>
  </table>
  </div>
  <FoorterPage />
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";
import FoorterPage from './Foorter.vue';
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurant: []    ,
    };
  },
  components: {
    HeaderPage,
    FoorterPage,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/resturant/" + id);
      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/resturant");
      console.log(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
table {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
th{
  background-color: rgb(55, 145, 83);
}
table a{
    margin-left: 10px;
}
th, td {
  width: 160px;
  height: 40px;
} 
.icon{
    height: 45px;
    width: 45px;
    cursor: pointer;
    margin-left: 10px;
}
.wrapper{
    min-height: 500px;
}
</style>