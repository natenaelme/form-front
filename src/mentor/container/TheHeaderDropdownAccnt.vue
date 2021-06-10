<template>
<CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">

    <template #toggler>
        <CHeaderNavLink>
            <div>
                <em><img class="border rounded-circle img-profile" thumbnail fluid :src="profileImage" width="40em" height="40em"></em>

            </div>
        </CHeaderNavLink>
    </template>

    <CDropdownHeader tag="div" class="text-center" color="light">
        <strong class="text-center">{{fullName}}</strong>
    </CDropdownHeader>
    <CDropdownItem to="/admin/profile">
        <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem @click="logOut()">
        <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>

</CDropdown>
</template>

<script>
const {
    logout
} = require('../../assets/js/service')
import LocaleSwitcher from '../../containers/LocaleSwitcher'
export default {
    name: 'TheHeaderDropdownAccnt',
    components: {

        LocaleSwitcher
    },
    data() {
        return {
            profileImage: '',
            fullName: ''
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
}
</script>

<style scoped>
.c-icon {
    margin-right: 0.3rem;
}
</style>
