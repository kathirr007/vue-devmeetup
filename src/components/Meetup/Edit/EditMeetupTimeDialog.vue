<template>
  <v-dialog max-width="500px" persistent v-model="editDialog">
    <v-btn class="teal white--text ma-0 mb-3 ml-3" slot="activator">
      Edit Time
    </v-btn>
    <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-title class="px-0">
                        <h4 class="headline teal--text">Edit Mettup Time</h4>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-time-picker full-width v-model="editableTime"  actions format="24hr" style="width:100%">
                        <template slot-scope="">
                            <v-flex xs12 justify-end class="text-xs-right">
                                <v-btn class="teal white--text text-capitalize" flat @click.native="editDialog = false">Close</v-btn>
                                <v-btn class="teal white--text text-capitalize" flat @click.native="onSaveChanges">Save</v-btn>
                            </v-flex>
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
        data() {
            return {
                editDialog: false,
                editableTime: null
            }
        },
        methods: {
            onSaveChanges() {
                const newDate = new Date()
                const hours = this.editableTime.match(/^(\d+)/)[1];
                const minutes = this.editableTime.match(/:(\d+)/)[1];
                newDate.setHours(hours)
                newDate.setMinutes(minutes)
                this.$store.dispatch('updateMeetupData', {
                    id: this.meetup.id,
                    date: newDate
                })
                this.editDialog = false
            }
        },
        created() {
            this.editableTime = new Date();
        }
    }
</script>

<style scoped>

</style>