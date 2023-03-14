import { createStore } from 'vuex'
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const store = createStore ({

  state: {
    user: null
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    }
  },
  
  actions: {
    async signup(context, { email, password, repeat_password }) {
      console.log('signup action')

      const res = await createUserWithEmailAndPassword(auth, email, password, repeat_password)
      console.log(res)
      if (res) {
        context.commit('setUser', res.user)
      }else {
        throw new Error('could not complete login')
      }


    },
    async login(context, {email, password}) {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      if (res) {
        context.commit('setUser', res.user)
      }else {
        throw new Error('could not complete signup')
      }
    }
  }
})

export default store