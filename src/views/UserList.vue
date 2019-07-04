<template>
  <div>
    <h1>User List</h1>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        {{ user.username }}. {{ user.name }}
        <button @click="showUserInfo(user.id)">View</button>
      </li>
    </ul>
    <LayerPopup @toggleLayerPopup="toggleLayerPopup" v-if="showPopup">
      <UserInfo :user="user"></UserInfo>
    </LayerPopup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { FETCH_USERS, FETCH_USER } from '@/store/modules/user.type'
import LayerPopup from '@/components/Layer/Popup.vue'
import UserInfo from '@/components/User/UserInfo.vue'

export default {
  name: 'UserList',
  components: {
    LayerPopup,
    UserInfo
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_USERS)
    ]).then(next)
  },
  data() {
    return {
      showPopup: false
    }
  },
  computed: {
    ...mapGetters(['users', 'user'])
  },
  methods: {
    showUserInfo(userId) {
      Promise.all([
        this.$store.dispatch(FETCH_USER, userId)
      ]).then(() => this.showPopup = true)
    },
    toggleLayerPopup() {
      this.$store.commit('setUser', null)
      this.showPopup = !this.showPopup
    }
  }
}
</script>
