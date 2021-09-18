<template>
  <div>
      <h3>Böyle bir sayfa bulunmamaktadır</h3>
      <button id="homePageBtn" @click="redirectToApp">Anasayfa</button>
  </div>
</template>

<script>
export default {
methods:{
    redirectToApp(){
        this.$router.push("/");
    }
}
}
</script>

<style scoped>
h3{
    color: tomato;
}
#homePageBtn{
    background-color: tomato;
    border: 1px solid tomato;
    border-radius: 5px;
    padding: 5px;
    color: white;
    margin-top: 20px;
}
</style>