<template>
  <v-dialog max-width="500px" persistent v-model="editDialog">
    <v-btn class="teal white--text ma-0 mb-3" slot="activator">
      Edit Date
    </v-btn>
    <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-title class="px-0">
                        <h4 class="headline teal--text">Edit Mettup Date</h4>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-date-picker full-width v-model="editableDate" style="width: 100%" actions>
                        <template slot-scope="">
                            <v-flex xs12 class="text-xs-right">
                                <v-btn class="teal white--text text-capitalize" flat @click.native="editDialog = false">Close</v-btn>
                                <v-btn class="teal white--text text-capitalize" flat @click.native="onSaveChanges">Save</v-btn>
                            </v-flex>
                        </template>
                    </v-date-picker>
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
                editableDate: null
            }
        },
        methods: {
            onSaveChanges() {
                const newDate = new Date(this.meetup.date)
                const newDay = new Date(this.editableDate).getUTCDate()
                const newMonth = new Date(this.editableDate).getUTCMonth()
                const newYear = new Date(this.editableDate).getUTCFullYear()
                newDate.setUTCDate(newDay)
                newDate.setUTCMonth(newMonth)
                newDate.setUTCFullYear(newYear)
                this.$store.dispatch('updateMeetupData', {
                    id: this.meetup.id,
                    date: newDate
                })
                this.editDialog = false
            }
        },
        created() {
            this.editableDate = new Date(this.meetup.date).toISOString().substr(0, 10)
        }
    }
</script>

<style scoped>

</style>