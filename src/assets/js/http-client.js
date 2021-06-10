import axios from "axios";
import router from "@/router/index";
const {logout} = require("./service");


const http = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  // baseURL: "http://196.189.91.238/api/",
  baseURL: "https://alphaworkbook.com:/api/",


});
http.interceptors.response.use(null, function (error) {
  console.log("checks every response");
  if (error.response.status === 401) {

    console.log(
      "check",
      "- some one have loged in with your account or token have expired"
    );
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == "") {
      localStorage.clear();
      this.$router.replace("/login");
    } else {
      console.log("logout");
      logout(token).then(
        (resp) => {
          localStorage.clear();
          console.log(resp);
          router.replace("/login");
        },
        (err) => {
          localStorage.clear();

          router.replace("/login");
        }
      );
    }


    // router.replace('/Login')
  }
  else if (error.response.status === 403) {

    router.push('/Forbidden')
  }

  else {
    console.log(error);
  }
  return Promise.reject(error)
})


export default http;
