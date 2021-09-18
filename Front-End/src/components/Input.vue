<template>
  <div class="input-wrapper">
      <Spinner v-if="isLoading"/>
      <div class="close-box" @click="closeModal">
          <i class="fas fa-times"></i>
      </div>
      <p>Eklemek istediğiniz kategori ismi</p>
      <input v-model="categoryName" type="text"  id="categoryName"/>
      <button @click="handleCategorySubmit" id="submitBtn">Gönder</button>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
    components:{
        Spinner
    },
    data(){
        return{
            categoryName:"",
            isLoading:false
        }
    },
    mounted(){
            this.categoryName = (this.modalStatus.type==='edit' ? this.selected.title:'');
    },
    computed:{
        selected(){
            console.log("computed selected=>",this.$store.getters.getSelectedCategory)
            return this.$store.getters.getSelectedCategory;
        },
        modalStatus(){return this.$store.getters.getModalStatus;}
    },
    methods:{
        closeModal(){
            this.$store.commit("changeModalShow")
        },
        async handleCategorySubmit(){
            this.isLoading=true;
            if(this.modalStatus.type=='add'){
                this.$store.dispatch("addCategory",{title:this.categoryName,parentId:this.selected.id})
              .then((res)=>{
                  this.isLoading=false;
                  alert("Başarılı",res);
                  this.$store.commit("changeModalShow");
                  location.reload();
                  })
              .catch((err)=>{
                this.isLoading= false;  
                alert("Bir hata oluştu,lütfen tekrar deneyiniz",err);
              })
            }
            if(this.modalStatus.type=='edit'){
                console.log("if kısmında",this.selected.title);
                this.$store.dispatch('update',{title:this.categoryName,id:this.selected.id})
                .then((res)=>{
                    this.isLoading = false;
                    alert("Başarılı",res);
                    this.$store.commit("changeModalShow");
                    location.reload();
                })
                .catch((err)=>{
                    this.isLoading = false;
                    alert("Bir hata oluştu lütfen tekrar deneyiniz",err);
                })
            
            }
            
        }

    }
}
</script>

<style scoped>
@keyframes fadein {
    from{opacity:0}
    to{opacity: 1;}

}
.input-wrapper{
    animation: fadein 0.8s;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    z-index: 100;
}
.input-wrapper .close-box{
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}
.input-wrapper input{
    height: 35px;
}
.input-wrapper #submitBtn{
    margin-top:10px ;
    padding: 5px;
    color: royalblue;
    background-color: white;
    border-radius: 5px;
    border:1px solid royalblue;
    transition: 0.5s;
}
.input-wrapper #submitBtn:hover{
        background-color: royalblue;
        color: white;

}


</style>