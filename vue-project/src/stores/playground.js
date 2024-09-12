import { shallowRef } from 'vue'
import { defineStore } from 'pinia'

export const usePlaygroundStore = defineStore('playground', () => {
  const component = shallowRef(null)

  return { component }
})
