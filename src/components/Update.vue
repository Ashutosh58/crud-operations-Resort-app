<template>
    <HeaderPage />
    <div class="wrapper">
    <img class="logo" src="../assets/restro-logo.jpg" />
    <h1>Update Restaurant Details</h1>
     <form class="add">
        <input type="text" name="name" placeholder="Enter Resturent Name" v-model="restaurant.name" />
        <input type="text" name="contact" placeholder="Enter Contact Number" v-model="restaurant.contact" />
        <input type="text" name="address" placeholder="Enter Resturent Address" v-model="restaurant.address" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
    </div>
    <FoorterPage />
</template>

<script>
import HeaderPage from './Header.vue';
import axios from 'axios';
import FoorterPage from './Foorter.vue';
export default {
    name: 'UpdatePage',
    components:{
        HeaderPage,
        FoorterPage,
    },
    methods: {
        async updateRestaurant(){
            const result = await axios.put("http://localhost:3000/resturant/" + this.$route.params.id,{
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            });
            if(result.status == 200)
            {
               this.$router.push({name: 'HomePage'}) 
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({name: 'SignUp'})
        }
        const result = await axios.get("http://localhost:3000/resturant/" + this.$route.params.id)
        // console.log(result)
        this.restaurant = result.data
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
}
</script>