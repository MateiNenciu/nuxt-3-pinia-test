import {defineStore} from 'pinia'

export const useTestStore = defineStore('test', () => {
    const someBool = ref(false)
    const name = ref('Matei')
    const boolValue = computed(() => someBool.value)

    const changeBool = () => someBool.value = !someBool.value
  
    return { someBool, name, boolValue, changeBool }
  })