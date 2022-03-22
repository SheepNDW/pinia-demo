<template>
  <div class="about">
    <h2>{{ name }}</h2>
    <h2>{{ getUserName }}</h2>
    <h2>{{ wallet }}</h2>
    <br />
    <button type="button" @click="updateName">點我改名</button>
    <br />
    <button type="button" @click="updateData">點我更新</button>
    <br />
    <button type="button" @click="reset">點我 reset</button>
  </div>
</template>

<script>
import userStore from '@/stores/user'
import { storeToRefs } from 'pinia'

// Composittion API
export default {
  setup() {
    const user = userStore()
    // reactive
    // user.name = '許普'

    const { name, wallet, getUserName } = storeToRefs(user)
    // name.value = '許普'

    const { updateName } = user

    const updateData = () => {
      user.$patch({
        name: 'シープ',
        wallet: 1000
      })
    }

    const reset = () => {
      user.$reset()
    }

    return {
      user,
      name,
      wallet,
      getUserName,
      updateName,
      updateData,
      reset
    }
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
