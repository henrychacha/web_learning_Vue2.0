<template>
    <div>
        <food-header></food-header>
        Food
        <ul>
            <li v-for="item in foodList" :key="item.pid"> 
                <!-- <router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link> -->
                <!-- <router-link :to="{path:'/detail',params:{pid:item.pid}}">{{item.pname}}</router-link> -->
                <router-link :to="{name:'detail',params:{pid:item.pid}}">{{item.pname}}</router-link>
            </li>
        </ul>
        <food-footer></food-footer>
    </div>
</template>
<script>
import FoodHeader from "@/components/pages/FoodHeader"
import FoodFooter from "@/components/pages/FoodFooter"
export default {
    data(){
        return {
            foodList:[{
                pid:"001",
                pname:"方便面",
            },{
                pid:"002",
                pname:"烤鸡翅",
            },{
                pid:"003",
                pname:"煲仔",
            }]
        }
    },
    components:{
        FoodHeader,
        FoodFooter
    }
}
</script>