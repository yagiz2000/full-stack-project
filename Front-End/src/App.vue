<template>
  <div id="app">
    <div v-if="modalData.showModal" class="overlay">
      <Input/>
    </div>
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
export default {
  name: 'App',
  components:{
    Input
  },
  async mounted(){
    if(localStorage.getItem("token")){
      this.$router.push("home");
    }
  },
  computed:{
    modalData(){
      return this.$store.getters.getModalStatus;
    }
  }
}
</script>

<style scoped>
.main-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.overlay{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0,0.5);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
