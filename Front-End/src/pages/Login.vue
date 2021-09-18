<template>
  <div class="login-wrapper">
      <div class="login-icon">
          <img id="iconImg" src="../assets/login.png" alt="">
      </div>
      <div class="right-side">
          <div class="input-wrapper">
          <p>İsim</p>
          <input id="name" placeholder="İsim" v-model="name"/>
          <p>Email</p>
          <input id="email" placeholder="Email adresi" v-model="email"/>
      </div>
      <div class="button-wrapper">
            <button @click="login" id="loginBtn">Giriş yap</button>

      </div>
      </div>
      <!-- <div class="inputs">
          <input id="name" placeholder="İsim" v-model="name"/>
          <input id="email" placeholder="Email adresi" v-model="email"/>
      </div>
      <div class="button">
          <button @click="login" id="loginBtn">Giriş yap</button>
      </div> -->
  </div>
</template>

<script>
export default {
data(){
    return{
        name:"",
        email:""
    }
},
methods:{
    login(){
        this.$store.dispatch("login",{name:this.name,email:this.email})
        .then((res)=>{
            console.log(res)
            this.$router.push("home")
            })
        .catch(err=>{alert("Hata oluştu",err)
        console.log(err)})
    }    
}
}
</script>

<style scoped>
h3{
    color: rgb(168, 168, 29);
}
p{
    color: #b8b0b0;
}
input{
    height: 40px;
    width: 200px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
}
.login-wrapper{
    background-color: white;
    display: flex;
    height: 400px;
    border-radius: 20px;
    width: 600px;
}
.login-wrapper .right-side{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
}
.login-wrapper .login-icon{
    display: flex;
    align-items: center;
    background-color: tomato;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.login-wrapper .input-wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
#iconImg{
    width: 250px;
}
#loginBtn{
    padding: 5px;
    border: 2px solid tomato;
    color: tomato;
    background-color:white;
    border-radius: 5px;
    transition: 0.5s;
}
#loginBtn:hover{
    color: white;
    background-color: tomato;
}

/* .login-wrapper .inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button button{
    padding: 5px;
    color: rgb(42, 124, 42);
    border: 2px solid rgb(42, 124, 42);
    border-radius: 5px;
    background-color: white;
    transition: 0.5s;
}
.button button:hover{
    background-color: rgb(42, 124, 42);
    color: white;
} */
</style>