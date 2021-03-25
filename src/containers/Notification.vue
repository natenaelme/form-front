<template>
  <div>
    <div v-if="intloading">
      <div
        class="lds-dual-ring"
        style="display: block; margin-left: auto; margin-right: auto"
      ></div>
      <p class="text-center">loading ..</p>
    </div>
    <div style="font-size: 15px !important">
      <b-row>
        <b-col md="5">
          <b-card style="height: 100%">
            <h5 class="text-center">Notification</h5>
            <div
              id="scrollspy-nested"
              style="max-height:500px; overflow-y: auto;"
            >
              <div v-for="(notif, index) in notificationMessages" :key="index">
                <b-card
                  style="background: lightgray,padding-bottom: 0;"
                  v-bind:class="{
                    active: notif.viewed_customer,
                    notviewed: !notif.viewed_customer,
                  }"
                >
                  <b-card-text @click="FindMessage(notif)">
                    <b-row>
                      <b-col md="4">
                        <img
                          class="border rounded-circle img-profile"
                          thumbnail
                          fluid
                          :src="notif.mentorsMessage.profileImage"
                          width="40em"
                          height="40em"
                        />
                        <p>
                          {{
                            notif.mentorsMessage.firstName +
                            " " +
                            notif.mentorsMessage.lastName
                          }}
                        </p>
                      </b-col>
                      <b-col md="4">
                        <p class="twoline">Message : {{ notif.message }}</p>
                      </b-col>
                      <b-col md="4">
                        <p>
                          For workBook:
                          {{ notif.workbook_and_chapter.split(",")[0] }}
                          <br />
                          Chapter :
                          {{ notif.workbook_and_chapter.split(",")[1] }}
                        </p>
                      </b-col>
                      <span
                        >{{
                          notif.Date.split("T")[0] +
                          " " +
                          notif.Date.split("T")[1].split(".")[0]
                        }}
                      </span>
                    </b-row>
                  </b-card-text>
                </b-card>
              </div>
            </div></b-card
          >
        </b-col>
        <b-col md="7">
          <b-card >
            <h5 class="text-center">Message</h5>
            
            <p v-if="workbookChapter"><router-link :to="workbookChapter[1].rout">{{ workbookChapter[0] + workbookChapter[1].text}}</router-link> </p>
            <b-card-body
              id="container" style="max-height:500px; overflow-y: auto;"
            >
              <div >
                <div v-if="loadingMessages">
                  <div
                    class="lds-dual-ring"
                    style="
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  ></div>
                  <p class="text-center">loading ..</p>
                </div>
              </div>
              <div  v-if="!loadingMessages" >
                <div v-for="(message, index) in messages" :key="index">
                  <div v-if="message.from == 'mentor'">
                    <b-row md="5">
                      <img
                        class="border rounded-circle img-profile"
                        thumbnail
                        fluid
                        :src="message.mentorsMessage.profileImage"
                        width="40em"
                        height="40em"
                      />
                      <b-col>
                        <div class="msg_cotainer">
                          {{ message.message }}
                          <span class="msg_time_send text"
                            >{{
                              message.Date.split("T")[0] +
                              " " +
                              message.Date.split("T")[1].split(".")[0]
                            }}
                          </span>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-if="message.from == 'customer'">
                    <b-row>
                      <b-col style="flex-grow: 1;"></b-col>
                      <b-row  style="min-width: 20em;">
                        <b-col class="msg_cotainer_send"
                          >{{ message.message }}
                          <span class="msg_time_send text"
                            >{{
                              message.Date.split("T")[0] +
                              " " +
                              message.Date.split("T")[1].split(".")[0]
                            }}
                          </span>
                        </b-col>
                        <img
                          class="border rounded-circle img-profile"
                          thumbnail
                          fluid
                          :src="profileImage"
                          width="40em"
                          height="40em"
                        />
                      </b-row>
                    </b-row>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </b-card-body>
            <b-card-footer v-if="messages.length">
              <b-row>
                <b-col md="11">
                  <b-textarea v-model="replayMessage"> </b-textarea>
                </b-col>
                <b-col md="1">
                  <div
                    v-if="sendingLoading"
                    class="lds-dual-ring"
                    style="
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                  ></div>

                  <button
                    class="btn btn-dark"
                    :disabled="!replayMessage"
                    @click="Replay()"
                  >
                    <b-icon icon="cursor"></b-icon>
                  </button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
   
  </div>
</template>
<script>
const { getterWhereQ, patchDataId , posts , getSingleCahpter} = require("../assets/js/service");
export default {
  data() {
    return {
      intloading: false,
      sendingLoading:false,
      loadingMessages: false,
      notificationMessages: [],
      workbookChapter: null,
      messages: [],
      items: [],
      profileImage: localStorage.getItem("profileImage"),
      replayMessage: null,
      currentNotificaton: null,
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token")
    };
  },
  mounted() {
    console.log("dfghjkhgfdfghjhgfdfghjkl");
    this.intloading = true;
    let database = "messages";
    let atribute = "customerId";
    let type2 = "from";

    let value2 = "mentor";
    let include = "mentorsMessage";
    let order = "DESC";
    getterWhereQ(
      database,
      this.token,
      atribute,
      this.userId,
      type2,
      value2,
      include,
      order
    )
      .then((resp) => {
        this.notificationMessages = resp.data;
        this.intloading = false;
        console.log(resp);
      })
      .catch((err) => {
        this.intloading = false;
        console.log(err);
      });
  },
  methods: {
    Replay() {
        this.sendingLoading = true;
      console.log("ress");
      let newMessage = {
        message: this.replayMessage,
        workbook_and_chapter: this.currentNotificaton.workbook_and_chapter,
        from: "customer",
        mentorId: this.currentNotificaton.mentorId,
        customerId: this.userId,
      };
      posts("messages",newMessage).then(resp=>{
                let database = "messages";

      let atribute = "customerId";
      let type2 = "workbook_and_chapter";

      let value2 = this.currentNotificaton.workbook_and_chapter;
      let include = "mentorsMessage";
      let order = "ASC";
      
        getterWhereQ(
          database,
          this.token,
          atribute,
          this.userId,
          type2,
          value2,
          include,
          order
        )
          .then((resp) => {
            this.messages = resp.data;
            this.replayMessage = null;
            this.sendingLoading = false;
            this.scrollToEnd();
          })
      })
      console.log(newMessage);
    },
    FindMessage(notif) {
      this.loadingMessages = true;
      this.currentNotificaton = notif;
      let database = "messages";

      let token = localStorage.getItem("token");
      let atribute = "customerId";
      let type2 = "workbook_and_chapter";

      let value2 = notif.workbook_and_chapter;
      let include = "mentorsMessage";
      let order = "ASC";
      patchDataId(notif.id, database + "/", token, {
        viewed_customer: true,
      }).then((resp) => {
        getterWhereQ(
          database,
          token,
          atribute,
          this.userId,
          type2,
          value2,
          include,
          order
        )
          .then((resp) => {
            this.loadingMessages = false;
            this.messages = resp.data;

            console.log(resp);

            this.workbookChapter = [
              "WorkBook " +
                notif.workbook_and_chapter.split(",")[0],
                getSingleCahpter(notif.workbook_and_chapter)
            ];
            let database = "messages";
            let token = localStorage.getItem("token");
            let atribute = "customerId";
            let type2 = "from";

            let value2 = "mentor";
            let include = "mentorsMessage";
            let order = "DESC";
            getterWhereQ(
              database,
              token,
              atribute,
              this.userId,
              type2,
              value2,
              include,
              order
            )
              .then((resp) => {
                this.notificationMessages = resp.data;
                this.intloading = false;
                console.log(resp);
              })
              .catch((err) => {
                this.intloading = false;
                console.log(err);
              });
          })
          .catch((err) => {
            this.loadingMessages = false;
            console.log(err);
          });
      });
    },







  	scrollToEnd: function() {    	
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },

  },
};
</script>
<style>
.notviewed {
  background: antiquewhite !important;
}
.lds-dual-ring {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(29, 27, 27);
  border-color: rgb(44, 43, 43) transparent rgb(201, 199, 199) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.twoline {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}
.msg_time_send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(0, 0, 0);
  font-size: 10px;
}
.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}
</style>