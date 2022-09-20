<template>  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d151d;
}
body{
  padding: 0;
  margin: 0;
}
.logo {
  width: 80px;
}
.register input, .login input, .add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rebeccapurple; 
  border-radius: 3px;  
}
.register button, .login button, .add button {
  width: 320px;
  height: 40px;
  border: 1px solid green;
  color: aliceblue;
  background-color: green;
  cursor: pointer;
  border-radius: 3px;
  font-size:large
}
</style>
