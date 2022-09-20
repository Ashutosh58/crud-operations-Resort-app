<template>
    <HeaderPage />
    <div class="wrapper">
    <img class="logo" src="../assets/restro-logo.jpg" />
    <h1>Add New Restaurant</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Resturent Name" v-model="restaurant.name" />
        <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact" />
        <input type="text" name="address" placeholder="Enter Resturent Address" v-model="restaurant.address" />
        <button type="button" v-on:click="addRestaurant">Add Restaurant</button>        
    </form>
    </div>
    <FoorterPage />
</template>

<script>
import HeaderPage from './Header.vue';
import axios from 'axios';
import FoorterPage from './Foorter.vue';
export default {
    name: 'AddPage',
    components:{
        HeaderPage,
        FoorterPage,
    },
    data(){
        return{
            restaurant:{
                name:'',
                contact: '',
                address: ''
            }
        }
    },
    methods:{
        async addRestaurant(){
            // console.log(this.restaurant)
            const result = await axios.post("http://localhost:3000/resturant",{
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            });
            if(result.status == 201)
            {
               this.$router.push({name: 'HomePage'}) 
            }
            console.log("result", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({name: 'SignUp'})
        }
    },    
}
</script>