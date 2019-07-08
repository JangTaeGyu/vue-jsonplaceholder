<template>
  <div id="content">
    <div class="top">
      <h2>사용자 목록<small>{{ this.count }} 건</small></h2>
    </div>
    <UserList :showPopup.sync="showPopup" />
    <LayerPopup @toggleLayerPopup="toggleLayerPopup" v-if="showPopup">
      <UserInfo :user="user" />
    </LayerPopup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_USERS } from '@/store/action.types'
import { SET_USER } from '@/store/mutation.types'
import UserList from '@/components/User/UserList.vue'
import UserInfo from '@/components/User/UserInfo.vue'
import LayerPopup from '@/components/Layer/Popup.vue'

export default {
  name: 'UserIndex',
  components: {
    UserList,
    UserInfo,
    LayerPopup
  },
  data() {
    return {
      count: 10,
      showPopup: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
    showPopup(show) {
      this.showPopup = show
    }
  },
  methods: {
    toggleLayerPopup() {
      this.$store.commit(SET_USER, null)
      this.showPopup = !this.showPopup
    }
  },
  created() {
    this.$store.dispatch(FETCH_USERS)
  }
}
</script>
