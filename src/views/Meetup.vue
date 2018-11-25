<template>
    <v-container>
        <v-layout row wrap v-if="loading">
           <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="primary"
                    :width="7" :size="70"
                    ></v-progress-circular>
            </v-flex> 
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h5 class="primary--text">{{ meetup.title }}</h5>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <edit-details-dialog :meetup="meetup"></edit-details-dialog>
                        </template>
                    </v-card-title>
                    <v-img 
                        :src="meetup.imageUrl"
                        height="400px"
                        >
                    </v-img>
                    <v-card-text>
                        <div class="info--text">
                            {{meetup.date | date}} - {{meetup.location}}
                        </div>
                        <div>
                            <edit-date-dialog
                                 :meetup="meetup" v-if="userIsCreator">
                            </edit-date-dialog> 
                            <edit-time-dialog
                                 :meetup="meetup" v-if="userIsCreator">
                            </edit-time-dialog>
                        </div>
                        <div>
                            {{meetup.description}}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <register-dialog :meetupId="meetup.id"></register-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }, 
        userIsAuthenticated () {
            return (this.$store.getters.user !== null
                    && this.$store.getters.user !== undefined)
        }, 
        userIsCreator () {
            if (!this.userIsAuthenticated) {
                return false
            }
            return (this.$store.getters.user.id === this.meetup.creatorId)
        },
        loading () {
            return this.$store.getters.loading 
        }
    }
}
</script>
