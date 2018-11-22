<template>
  <v-container>
    <v-layout v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <Alert @dismissed="onDismissed" :text="error.message"> </Alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field 
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required>Enter your email
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field 
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required>Enter your password
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
      Alert
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }

  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignIn () {
      // Vuex
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
