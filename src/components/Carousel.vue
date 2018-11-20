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
            meetups: [
                {imageUrl: 'http://img.over-blog-kiwi.com/1/76/78/35/20160329/ob_ea2688_statue-lib.jpg', id: 'abc', title: 'New York'},
                {imageUrl: 'https://media.istockphoto.com/photos/cityscape-of-paris-by-the-sunset-picture-id604371970?k=6&m=604371970&s=612x612&w=0&h=M7MvwJMPYLJS6VB3jUlvmWxiJAlXbddzOivgI0Ys9Js=', id: 'def', title: 'Paris'},
                {imageUrl: 'http://homecaprice.com/wp-content/uploads/2015/10/palace-of-london-home-caprice.jpg', id: 'ghi', title: 'London'}
            ]
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
