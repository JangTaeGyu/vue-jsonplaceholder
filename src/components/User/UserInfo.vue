<template>
  <div>
    <h2>User Info</h2>
    <ul>
      <li>{{ user.id }}</li>
      <li>{{ user.username }}. {{ user.name }}</li>
      <li>{{ user.email }}</li>
      <li>{{ user.phone }}</li>
      <li>{{ user.website }}</li>
      <li>{{ user.company.name }}. {{ user.company.catchPhrase }}</li>
    </ul>
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
  }
}
</script>

