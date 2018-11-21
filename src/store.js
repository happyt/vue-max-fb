import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'http://img.over-blog-kiwi.com/1/76/78/35/20160329/ob_ea2688_statue-lib.jpg',
       id: '1', title: 'New York', date: new Date(),
       location: 'New York City',
       description: 'Marathon runners in the extreme'
      },
      {imageUrl: 'https://media.istockphoto.com/photos/cityscape-of-paris-by-the-sunset-picture-id604371970?k=6&m=604371970&s=612x612&w=0&h=M7MvwJMPYLJS6VB3jUlvmWxiJAlXbddzOivgI0Ys9Js=',
       id: '2', title: 'Paris', date: new Date(),
       location: 'Champs ELyssee',
       description: 'Down in the jungle'
      },
      {imageUrl: 'http://homecaprice.com/wp-content/uploads/2015/10/palace-of-london-home-caprice.jpg',
       id: '3', title: 'London', date: new Date(),
       location: 'Osterley',
       description: 'Party in the park'
      }
    ],
    user: {
      id: 'abc',
      registeredMeetups: ['apple']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '99'
      }
      // store in firebase
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        reply => {
          const newUser = {
            id: reply.user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB ) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups ( state, getters) {
      return getters.loadedMeetups.slice(0,5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
