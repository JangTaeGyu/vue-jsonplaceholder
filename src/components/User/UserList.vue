<template>
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
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_USER } from '@/store/action.types'

export default {
  name: 'UserList',
  props: {
    showPopup: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    showUserInfo(userId) {
      Promise.all([
        this.$store.dispatch(FETCH_USER, userId)
      ]).then(() => {
        this.$emit('update:showPopup', true)
      })
    }
  }
}
</script>
