import { computed } from 'vue'
import { useStore } from 'vuex'

export function useCurrentUser() {
  const store = useStore()

  const currentUser = computed(() => {
    return store.state.user
  })

  return {
    currentUser
  }
}