<template>
  <div class="footer">
    <h4>crud Operation using VUE js</h4>
    <ul>
      <li>JSON</li>
      <li>API</li>
      <li>Fetch</li>
      <li>Update</li>
      <li>Delete</li>
    </ul>
    <span>&copy; 2022 @!</span>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
  data() {},
};
</script>

<style>
.footer {
  background-color: rgb(16, 19, 46);
  overflow: hidden;
  color: aliceblue;
}
ul {
  list-style: none;
}
li {
  float: left;
  margin: 10px;
  width: auto;
}
</style>