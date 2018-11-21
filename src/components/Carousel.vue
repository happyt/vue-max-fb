<template>
    <span>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item v-for="(item) in meetups"
                    v-bind:src="item.imageUrl"
                    :key="item.id"
                    @click="onLoadMeetup()">
                    <div class="title">
                        {{item.title}}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
            <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Carousel pictures</p>
            </v-flex>
        </v-layout>
    </span>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        }
    },
    methods: {
        onLoadMeetup(id) {
            this.$router.push('/meetup/' + id)
        }
    }
}
</script>
<style>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgb(7, 42, 73);
        color: aliceblue;
        padding: 10px;
    }

</style>
