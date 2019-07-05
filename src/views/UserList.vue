<template>
  <div id="content">
    <div class="top">
      <h2>사용자 목록<small>{{ users.length }} 건</small></h2>
    </div>
    <div class="board bg">
      <ul class="users">
        <li v-for="user in users" :key="user.id">
          <div class="board-content">
            <div class="info">
              <span class="info-name">{{ user.username }} . {{ user.name }}</span>
              <span class="info-email">{{ user.email }}</span>
              <span class="info-phone">{{ user.phone }}</span>
              <span class="info-website">{{ user.website }}</span>
            </div>
            <div class="text">{{ user.company.bs }}, {{ user.company.catchPhrase }}, {{ user.company.name }}</div>
          </div>
          <div class="board-btn">
            <button
              class="btn small link"
              @click="showUserInfo(user.id)">상세보기</button>
          </div>
        </li>
      </ul>
    </div>

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
