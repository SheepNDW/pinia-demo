import { defineStore } from 'pinia'

// 1. Store 名稱
// 2. 屬性參數
export default defineStore('User Store', {
  // Data
  state: () => {
    return {
      name: '綿羊',
      wallet: 300
    }
  },

  // Computed
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.name}`
  },

  // Methods
  actions: {
    // 可以使用 this
    updateName() {
      this.name = 'Sheep'
    }
  }
})