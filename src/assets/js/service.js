import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, BVToastPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BVToastPlugin);

Vue.use(VueAxios, axios) 
const imgUrl="https://api.cloudinary.com/v1_1/dhvxgn9xz/image/upload?upload_preset=sravrhin";
// const apiUrl="https://breakthrogh.herokuapp.com/api/";
// const apiUrl="https://alphaworkbook.com/api/";
const apiUrl="http://http://ssh.u4qq81bejf.nlnode.webrahost.eu:51680/api/";
const Habit = [
"/question/habit", 
"/question/how_to_build", 
"/question/process_of_change",
"/question/silence_time",
"/question/alpha_displine",
"/question/alpha_responsibility",
"/question/gratitude_journal",

"/question/gsystem_belief",
"/question/alpha_dream",
"/question/gsystem_attitude"
];
const MindProgramming=[
    '/question/alpha_belief',
    '/question/mental_transformation',
    '/question/positive_affirmation',
    '/question/six_steps'
];
const TeamBuilding=[
    '/question/team_meeting',
    '/question/team_task',
    '/question/alpha_team',
    '/question/alpha',
    '/question/qualities',
    '/question/levels_of_leadership',
    '/question/four_attributes',
    '/question/the_five'
]
const Vision=[
    '/question/how_to_search',
    '/question/personal_information',
    '/question/my_life',
    '/question/my_house',
    '/question/socal_dream',
    '/question/my_mental',
    '/question/spirtual',
    '/question/service',
    '/question/physical',
    '/question/family',
    '/question/financial',
    '/question/car',
    '/question/use_posetive',
    '/question/financial_goal',
    '/question/family_goal',
    '/question/socal_goal',
    '/question/physical_goal',
    '/question/spritual_goal',
    '/question/vision_goal',
    '/question/mental_goal',
    '/question/action_plan',
    '/question/my_new_mental',
    '/question/mental_bank',

    
]
let userInfo = {
    token:'',
    userType:'',
    userFirstName:'',
    userLastName:''
}
export function getters(dataBase){
    return(Vue.axios.get(apiUrl+dataBase))
}
export function getHabitPages(){
    return(Habit)
}
export function getVisionPages(){
    return(Vision)
}
export function getUrl(){
    return (imgUrl)
}
export function MindProgrammingPages(){
    return(MindProgramming)
}
export function TeamBuildingPages(){
    return(TeamBuilding)
}
export function logout(token){
    return (Vue.axios.post(apiUrl + '/users/logout'+'?'+'access_token=' + token ))
}
export function getterVerKey(type,workbook){
    return(Vue.axios.get(apiUrl+'/verifications'+`?filter={"where":{"`+type+`":"` + workbook +`"}}`));
}
export function getterUsers(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`",`+`"canAccess":`+ true + `}}`+'&access_token=' + token))
}
export function getterMentors(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`"}}`+'&access_token=' + token))
}
export function getterUnApproUsers(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`",`+`"canAccess":`+ false + `}}`+'&access_token=' + token))
}
export function getterId(dataBase,id,token){
    return(Vue.axios.get(apiUrl+dataBase+id+'?'+'access_token=' + token))
}
export function filterverbyDate(dataBase,id,token){
    
    return(Vue.axios.get(apiUrl+dataBase+id+'?'+'access_token=' + token))
}
export function getterIdForImage(dataBase,id,token){
    return(Vue.axios.get(apiUrl+dataBase+'?id='+id+'&access_token=' + token))
}
export function getterVerification(dataBase,token,data){
    return(Vue.axios.post(apiUrl+dataBase+'?'+'access_token=' + token + '&Data='+JSON.stringify(data)))
}
export function getUserData(dataBase,id,token){
    return(Vue.axios.get(apiUrl+"users/"+id+dataBase+'?'+'access_token=' + token))
}
export function getUserDataInclude(include,id,token){
    return(Vue.axios.get(apiUrl+"users/"+id+'?filter={"include":"'+include+'"}'+'&access_token=' + token))
}
export function getUserDataMentor(dataBase,id,token){
    return(Vue.axios.get(apiUrl+"users/"+id+'?filter={"include":"mentors"}'+'&access_token=' + token))
}
export function getUserDataSingleMentor(id,token){
    return(Vue.axios.get(apiUrl+"mentors/"+id+'?'+'access_token=' + token))
}
export function getMentorsData(dataBase,id,token){
    return(Vue.axios.get(apiUrl+"mentors/"+id+dataBase+'?'+'access_token=' + token))
}
export function getDataOfUsers(dataBase,id,token){
    return(Vue.axios.get(apiUrl+"users/"+id+'?'+'access_token=' + token))
}
export function getMentors(token){
    return(Vue.axios.get(apiUrl+'mentors'+'?'+'access_token=' + token))
}
export function patchData(dataBase,token,data){
    return(Vue.axios.patch(apiUrl+dataBase+'?'+'access_token=' + token, data))
}
export function patchDataId(id,dataBase,token,data){
    
    return(Vue.axios.patch(apiUrl+dataBase+id+'?'+'access_token=' + token, data))
}
export function posts(dataBase,data){
    console.log(data);
    return(Vue.axios.post(apiUrl+dataBase,data))
}
export function postsToken(dataBase,data,token){
    return(Vue.axios.post(apiUrl+dataBase+'?'+'access_token=' + token,data))
}
export function postsVerification(dataBase,data){
    console.log(data)
    return(Vue.axios.post(apiUrl+dataBase+'?Data='+JSON.stringify(data)))
}

export function Notification(variant, message) { 
    this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true
    })
}
export function setUserInfo(token,userType,userFirstName,userLastName){
    userInfo.token = token;
    userInfo.userFirstName = userFirstName;
    userInfo.userLastName  =userLastName;
    userInfo.userType = userType;
}
export function getUserInfo(){
    return(userInfo);
}