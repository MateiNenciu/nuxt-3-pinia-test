import {storeToRefs} from 'pinia'
import { useTestStore } from "~/stores/test"

export default defineNuxtPlugin(nuxtApp => {
    const {$pinia} = useNuxtApp()
    
    const testStore = useTestStore()
    const {boolValue} = storeToRefs(testStore)
    console.log(`initially on ${process.server ? 'server' : 'client'} value of bool ref is ${boolValue.value}`)
    
    testStore.changeBool()

    console.log(`finally on ${process.server ? 'server' : 'client'} value of bool ref is ${boolValue.value}`)

    return {
        provide: {
            hello: (msg: string) => `Hello ${msg}!`
        }
    }
})