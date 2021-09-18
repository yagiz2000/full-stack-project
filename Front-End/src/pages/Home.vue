<template> 
  
  <div class="category-wrapper">
        <category-box v-for="(category,i) in categoryInfo" :categoryData="category.categoryData" :key="i" :boxIndex="i"></category-box>
        <button id="logOutBtn" @click="logOut">Çıkış Yap</button>
  </div>
    
</template>

<script>
import CategoryBox from "../components/CategoryBox.vue";
export default {
components:{
    CategoryBox
},
methods:{
    logOut(){
        this.$store.dispatch("logOut")
        this.$router.push("/");
    }
},
async mounted(){
    await this.$store.dispatch("getFirstCategoryInfo");
},
computed:{
    categoryInfo(){
      return this.$store.getters.getCategoryInfo;
    },
}
}
</script>

<style>
#logOutBtn{
    padding: 5px;
    color: white;
    background-color: tomato;
    border: 1px solid tomato;
    border-radius: 5px;
    position: absolute;
    top: 350px;
    left: 45%;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgb(74, 93, 175);
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(127, 127, 204);
}
.category-wrapper{
  overflow-x: auto;
  padding: 20px;
  width: 900px;
  white-space: nowrap;

}
</style>