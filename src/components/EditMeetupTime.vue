<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Time
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Meetup Time</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-time-picker v-model="editableTime" style="..." actions format="24hr">
              <template >
                <v-btn flat class="blue--text darken-1"
                        @click.native="editDialog = false">Cancel</v-btn>
                <v-btn flat class="blue--text darken-1"
                        @click.native="onSaveChanges">Save</v-btn>
                </template>  
            </v-time-picker>
          </v-flex>
        </v-layout>
         
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableTime: '0.00'
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const hours = this.editableTime.match(/^(\d+)/)[1]
      const minutes = this.editableTime.match(/:(\d+)/)[1]
      newDate.setHours(hours)
      newDate.setMinutes(minutes)
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    let date = new Date(this.meetup.date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    this.editableTime = hours + ":" + minutes;
    console.log(this.editableTime)
  }
}
</script>

