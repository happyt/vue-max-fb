import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'http://img.over-blog-kiwi.com/1/76/78/35/20160329/ob_ea2688_statue-lib.jpg',
       id: '1', title: 'New York', date: '2017-07-17'},
      {imageUrl: 'https://media.istockphoto.com/photos/cityscape-of-paris-by-the-sunset-picture-id604371970?k=6&m=604371970&s=612x612&w=0&h=M7MvwJMPYLJS6VB3jUlvmWxiJAlXbddzOivgI0Ys9Js=',
       id: '2', title: 'Paris', date: '2017-07-11'},
      {imageUrl: 'http://homecaprice.com/wp-content/uploads/2015/10/palace-of-london-home-caprice.jpg',
       id: '3', title: 'London', date: '2017-07-18'}
    ],
    user: {
      id: 'abc',
      registeredMeetups: ['apple']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
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
