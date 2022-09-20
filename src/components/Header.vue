<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <!-- <router-link to="/update">Update Restaurant</router-link> -->
    <!-- <a href="home">Add Restaurant</a>
        <a href="home">Update Restaurant</a> -->
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "HeaderPage",
  data() {},
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "/log-in" });
    },
  },
};
</script>

<style>
.nav {
  background-color: rgb(25, 27, 63);
  overflow: hidden;
}
.nav a {
  float: left;
  color: aliceblue;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 20px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: azure;
  color: black;
}
</style>