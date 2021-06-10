<template>
<div>
    <div>
        <b-navbar toggleable="sm" variant="light" type="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <!--<b-nav-text><a href="/question/main">{{$t('Common.Home')}}</a></b-nav-text>-->
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown class="lang" text="Lang">
                        <LocaleSwitcher />
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>

            <b-nav-item-dropdown>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em><img class="border rounded-circle img-profile" thumbnail fluid :src="profileImage" width="40em" height="40em"><span class="d-none d-lg-inline mr-2 text-gray-600 small">{{fullName}}</span></em>
                </template>
                <b-dropdown-item to="/admin/profile">Profile</b-dropdown-item>
                <b-dropdown-item @click="logOut()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <!--<b-button @click="logOut()" variant="outline" class="mb-2">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
            </b-button>-->
        </b-navbar>
    </div>

</div>
</template>

<script>
const {
    logout
} = require('../../assets/js/service')
import LocaleSwitcher from '../../containers/LocaleSwitcher'
export default {
    name: 'NavBar',
    components: {

        LocaleSwitcher
    },

    data() {
        return {
            profileImage: localStorage.getItem("profileImage"),
            fullName: localStorage.getItem("fullName")
        }
    },
    mounted() {
        this.profileImage = localStorage.getItem("profileImage"),
            this.fullName = localStorage.getItem("fullName")
    },
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },
        logOut() {
            const token = localStorage.getItem('token');
            if (token == '') {
                localStorage.clear();
                this.$router.replace('/login')
            } else {
                logout(token)
                    .then(
                        resp => {
                            localStorage.clear();
                            console.log(resp);
                            this.$router.replace('/login');
                        },
                        err => {
                            this.makeToast("danger", "Some Error has Happened");
                        }
                    );
            }
        }
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
