import { ref, computed } from 'vue'

const counter = ref<number>(0)

export function useCounterStore() {
  const doubleCount = computed( ()=> counter.value * 2);

  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }

  return {
    counter,
    doubleCount,
    increment,
    decrement,
  }
}