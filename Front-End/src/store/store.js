import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import {makeRequest} from "../utils/requestUtils";

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        categoryInfo:[{categoryIndex:null,categoryData:null}],
        modalData:{showModal:false,type:null},
        selected:{
            id:null,
            parentId:null,
            title:null
        },
    },
    mutations:{
        changeCategoryIndex(state,payload){
            state.categoryInfo[payload.boxIndex].categoryIndex= payload.categoryIndex;
        },
        addCategoryBox(state){
            state.categoryInfo.push({categoryIndex:null});
        },
        deleteSpecificIntervalInCategoryInfo(state,payload){
            state.categoryInfo = state.categoryInfo.slice(0,payload.index+1);
        },
        setCategoryData(state,payload){
            state.categoryInfo[payload.boxIndex].categoryData = payload.categoryData;
        },
        pushCategoryInfoObject(state,payload){
            state.categoryInfo.push(payload);
        },
        changeShowModalStatus(state){
            state.showModal = !state.showModal;
        },
        doNothing(){
            console.log("sa");
        },
        changeSelectedCategory(state,payload){
            state.selected.id = payload.id;
            state.selected.parentId = payload.parentId;
            state.selected.title = payload.title;
        },
        changeModalType(state,payload){
            state.modalData.type = payload;
        },
        changeModalShow(state){
            state.modalData.showModal = !state.modalData.showModal;
        },
        
  
    },
    actions:{
        async getFirstCategoryInfo({commit}){
            let token = localStorage.getItem("token");
            let res = await Axios.get("http://localhost:8080/api/",{headers:{'auth-token':token}});
            commit("setCategoryData",{boxIndex:0,categoryData:res.data});
        },
    async getCasualCategoryInfo({commit},payload){ 
        commit("doNothing")
        let requestOptions = {
            type:'post',
            url:'http://localhost:8080/api/specific/',
            data:{"parentId":payload.parentId}
        }
        let response = await makeRequest(requestOptions);
        commit("pushCategoryInfoObject",{boxIndex:payload.boxIndex,categoryData:response.data});
        },
        async makeItDelete({commit},payload){
            commit("doNothing")
            let requestOptions = {
                type:'put',
                url:'http://localhost:8080/api/',
                data:{"id":payload}
            }
            let response = await makeRequest(requestOptions);
            console.log("silme işlemi tamamlandı",response);
        },
        addCategory({commit},payload){
            commit("doNothing");
                let requestOptions = {
                type:'post',
                url:'http://localhost:8080/api/addCategory',
                data:{"parentId":(payload.parentId),"title":payload.title}
            }
            return new Promise((resolve,reject)=>{
                makeRequest(requestOptions)
                .then((response)=>resolve(response))
                .catch(error=>reject(error))
            })
        },
        async login({commit},payload){
            commit("doNothing");
            let requestOptions = {
                type:'post',
                url:'http://localhost:8080/api/login',
                data:{"email":payload.email,"name":payload.name}
            }
            return new Promise((resolve,reject)=>{
                makeRequest(requestOptions)
                .then((response)=>{
                    localStorage.setItem("token",response.data.token);
                    resolve("success")
                })
                .catch(err=>reject(err))
            })
        },
        async update({commit},payload){
            commit("doNothing");
            let requestOptions = {
                type:'put',
                url:'http://localhost:8080/api/update',
                data:{"id":payload.id,"title":payload.title}
            }
            return new Promise((resolve,reject)=>{
                makeRequest(requestOptions)
                .then((res)=>resolve(res))
                .catch(err=>reject(err));
            })
        },
        logOut(){
            localStorage.removeItem("token");
        }
    },
    getters:{
        getCategoryInfo(state){
            return state.categoryInfo;
        },
        getModalStatus(state){
            return state.modalData;
        },
        getSelectedCategory(state){
            return state.selected;
        },
   
    }

})
export default store;