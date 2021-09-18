<template>
  <div class="box">
      <div class="buttons">
          <button id="editBtn" :class="this.selected.id===null?'disabled':''" :disabled="this.selected.id===null" @click="openModal('edit')">Edit</button>
          <button id="deleteBtn" :class="this.selected.id===null?'disabled':''" :disabled="this.selected.id===null" @click="makeItDeleted">Delete</button>
          <button id="addBtn" @click="openModal('add')">Add</button>
      </div>
      <p style="color:white;" v-if="this.categoryData.length<1">Boş</p>
      <div class="categories" v-for="(category,i) in categoryData" :key="i">
          
          <div class="category" @click="changeCategoryIndex(i,category)"  :class="[categoryIndex==i?'active':'',category.isDeleted?'deleted':'']">{{category.title}}</div>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        boxIndex:Number,
        categoryData:Array,
    }, 
    mounted(){
        console.log(this.categoryData.length>0);
    },
    computed:{
        categoryIndex(){
            return this.$store.getters.getCategoryInfo[this.boxIndex].categoryIndex;
        },
        selected(){
            return this.$store.getters.getSelectedCategory;
        }
    },
    methods:{
        changeCategoryIndex(categoryIndex,category){
            const {id} = category;
            const payload = {boxIndex:this.boxIndex,categoryIndex}
            this.$store.commit("changeSelectedCategory",category)
            this.$store.commit("changeCategoryIndex",payload);
            if(this.isLastBox()){//Eğer son box ise sadece ekstra box ekleyecek
                this.$store.dispatch("getCasualCategoryInfo",{boxIndex:this.boxIndex+1,parentId:id})
            }
            else{//Eğer son box değilse seçilen indexten sonraki boxlar arraydan splice ile çıkarılacak yenileri ekelenecek çünkü kategori değişti
                this.$store.commit("deleteSpecificIntervalInCategoryInfo",{index:this.boxIndex})
                this.$store.dispatch("getCasualCategoryInfo",{boxIndex:this.boxIndex+1,parentId:id})
            }
        },
        isLastBox(){
            return this.boxIndex+1=== this.$store.getters.getCategoryInfo.length ? true:false;
        },
        makeItDeleted(){
            this.$store.dispatch("makeItDelete",this.selected.id);
        },
        openModal(type){
            this.$store.commit("changeModalType",type);
            this.$store.commit("changeModalShow");
        }
    }

}
</script>

<style scoped>
.box{
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px solid rgba(245, 245, 245, 0.733);
    margin-right: 10px;
    padding: 5px;
    overflow-y:auto ;
    border-radius: 5px;

}
.box .buttons{
    display: flex;
    justify-content: flex-end;
}
button{
    margin-right: 5px;
    color: white;
    border-radius: 5px;
}
#editBtn{
    background-color: rgb(197, 197, 22);
    border: 1px solid rgb(197, 197, 22);
}
#deleteBtn{
    background-color: rgb(184, 23, 23);
    border: 1px solid rgb(184, 23, 23);
}
#addBtn{
    background-color: rgba(47, 47, 236, 0.829); 
    border:1px solid rgba(47, 47, 236, 0.829);
}

.categories {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
}
.categories .category{
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    color: white;
}
.categories .category.deleted{
    color: red;
}
.categories .category.active{
    background-color: rgb(127, 127, 204);
}
.disabled{
    cursor: not-allowed;
}
</style>