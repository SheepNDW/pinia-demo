<script>
import userStore from '@/stores/user'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(userStore, ['name'])
  }
}
</script>

<template>
  <div class="about">
    <h2>{{ name }}</h2>
  </div>
</template>
