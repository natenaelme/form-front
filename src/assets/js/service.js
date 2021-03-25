import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, BVToastPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BVToastPlugin);

Vue.use(VueAxios, axios) 
const imgUrl="https://api.cloudinary.com/v1_1/dhvxgn9xz/image/upload?upload_preset=sravrhin";
// const apiUrl="https://breakthrogh.herokuapp.com/api/";
const apiUrl="https://alphaworkbook.com:/api/";
// const apiUrl = "http://localhost:3000/api/";
const perPage = 20;
// const apiUrl="http://5.79.66.86:61217/api/";
const chapters = [
    {
        value:"1,1",
        text:"Chapter 1 : Vision",
        rout:"/question/how_to_search"
    },
    {
        value:"1,2",
        text:"Chapter 2 : Dream",
        rout:"question/my_dream"
    },
    {
        value:"1,3",
        text:"Chapter 3 : Goal",
        rout:"/question/financial_goal"
    },
    {
        value:"1,4",
        text:"Chapter 4 : Action Plan",
        rout:"/question/action_plan"
    },
    {
        value:"1,5",
        text:"Chapter 5 : Mental Bank",
        rout:"/question/my_new_mental"
    }
]
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
export function getAllChapters(){
    return chapters
}
export function getChapters(workbook){
    let singleWorkbookChapters=[];
    chapters.forEach(element => {
        console.log((element.value).split(",")[0] == workbook);
        if((element.value).split(",")[0] == workbook){
            singleWorkbookChapters.push(element)
        }
    });
    console.log(singleWorkbookChapters);
    return singleWorkbookChapters
}
export function getSingleCahpter(value){
    
    let result ;
    chapters.forEach(element => {
        console.log(element.value == value);
        if(element.value == value){
            result=element
        }
    });return result;
}
export function getters(dataBase){
    return(Vue.axios.get(apiUrl+dataBase))
}
export function getterPerPage(dataBase,page,include){
    console.log("page"+page);
    let skip = (parseInt(page)-1) * perPage;
    if(include == "where"){
        return(Vue.axios.get(apiUrl+dataBase +`?filter={"limit":`+perPage+`,"skip":`+skip + `,"include":"`+"user"+`","where":{"approvedByAccountant":"true"}}`))
    }
    else if(include != "where" && include != null){
        return(Vue.axios.get(apiUrl+dataBase +`?filter={"limit":`+perPage+`,"skip":`+skip + `,"include":"`+include+`"}`))
    }
    else{
        return(Vue.axios.get(apiUrl+dataBase +`?filter[limit]=`+perPage+`&filter[skip]=`+skip))
    }
    
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
export function getterDeposit(type,UserId){
    return(Vue.axios.get(apiUrl+'/Deposites'+`?filter={"where":{"`+type+`":"` + UserId +`"}}`));
}
export function getterUsers(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`",`+`"canAccess":`+ true + `}}`+'&access_token=' + token))
}
export function getterMentors(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`"}}`+'&access_token=' + token))
}
export function getterAllUsers(token,where){
    if(where = "icam"){
        return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"or":[{"userType":"mentor"},{"userType":"it"},{"userType":"accountant"},{"userType":"customer_service"}]}}`+'&access_token=' + token))
    }
}
export function getterUnApproUsers(token,userType){
    return(Vue.axios.get(apiUrl+'/users'+`?filter={"where":{"userType":"` + userType +`",`+`"canAccess":`+ false + `}}`+'&access_token=' + token))
}
export function getterWhereQ(database,token,type,value,type2,value2,include,order){
    console.log(apiUrl+'/'+database);
    return(Vue.axios.get(apiUrl+database+`?filter={"where":{"and":[{"`+type+`":"` + value +`"},{"`+type2+`":"` + value2 +`"}]},"include":"`+include+`","order": "Date `+order+`"}`+'&access_token=' + token))
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
export function PostVerification(dataBase,token,data){
    return(Vue.axios.post(apiUrl+dataBase+'?'+'access_token=' + token + '&Data='+JSON.stringify(data)))
}
export function Gets(dataBase,token,data){
    return(Vue.axios.get(apiUrl+dataBase+'?'+'access_token=' + token + '&Data='+JSON.stringify(data)))
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
export function Login(data){
    console.log("test Login");
    return(Vue.axios.post(apiUrl+"users/login"+'?include=User',data))
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