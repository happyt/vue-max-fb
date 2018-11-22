<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class='text-xs-center text-sm-right' >
                <v-btn large router to="/meetups" class='secondary'>Explore meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class='text-xs-center text-sm-left' >
                <v-btn large router to="/meetup/new" class='info'>Organise meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
           <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="primary"
                    :width="7" :size="70"
                    ></v-progress-circular>
            </v-flex> 
        </v-layout>
        <Carousel v-if="!loading" />
    </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'home',
    components: {
        Carousel
    },
    computed: {
        loading () {
            return this.$store.getters.loading 
        }
    }
}
</script>

