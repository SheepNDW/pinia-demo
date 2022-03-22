<template>
  <div class="about">
    <h2>{{ name }}</h2>
    <h2>{{ getUserName }}</h2>
    <h2>{{ wallet }}</h2>
    <button type="button" @click="updateName">點我改名</button>
  </div>
</template>

<script>
import userStore from '@/stores/user'
import { mapActions, mapState } from 'pinia'

// Options API
export default {
  computed: {
    // 1. Store
    // 2. 要帶入的 State, Getters
    ...mapState(userStore, ['name', 'getUserName', 'wallet'])
  },
  methods: {
    ...mapActions(userStore, ['updateName'])
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
