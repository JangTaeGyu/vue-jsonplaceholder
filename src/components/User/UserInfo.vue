<template>
  <div style="padding: 0;">
    <div class="form-group">
      <label for="name">이름</label>
      <input type="text" id="name" class="form-control" v-model="fullname" />
    </div>
    <div class="form-group">
      <label for="email">이메일</label>
      <input type="text" id="email" class="form-control" v-model="user.email" />
    </div>
    <div class="form-group">
      <label for="phone">연락처</label>
      <input type="text" id="phone" class="form-control" v-model="user.phone" />
    </div>
    <div class="form-group">
      <label for="website">웹사이트</label>
      <input type="text" id="website" class="form-control" v-model="user.website" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed : {
    fullname() {
      return this.user.username + ' . ' + this.user.name
    }
  }
}
</script>

