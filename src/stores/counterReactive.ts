import { reactive } from 'vue'

export const store = reactive({
  counter: 0,

  increment() {
    this.counter++
  },

  decrement() {
    this.counter--
  },

  doubleCount() {
    return this.counter * 2
  }

})