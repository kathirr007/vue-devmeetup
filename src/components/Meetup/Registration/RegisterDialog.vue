<template>
  <v-dialog persistent v-model="registerDialog">
    <v-btn class="teal white--text ma-0 mb-3" slot="activator">
      {{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-title class="px-0" v-if="userIsRegistered">
                        <h4 class="headline teal--text">Unregister from Meetup?</h4>
                    </v-card-title>
                    <v-card-title class="px-0" v-else>
                        <h4 class="headline teal--text">Register for Meetup?</h4>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-text>
                        You can always change your decision later on.
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-actions>
                        <v-btn class="red--text darken-1" flat @click="registerDialog = false">Cancel</v-btn>
                        <v-btn class="green--text darken-1" flat @click="onAgee">Confirm</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
        props: ['meetupId'],
        data() {
            return {
                registerDialog: false
            }
        },
        computed: {
            userIsRegistered() {
                return this.$store.getters.user.registeredMeetups.findIndex(meetupId => meetupId === this.meetupId) >= 0
            }
        },
        methods: {
            onAgee() {
                if (this.userIsRegistered) {
                    this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
                } else {
                    this.$store.dispatch('registerUserForMeetup', this.meetupId)
                }
            }
        }
    }
</script>

<style scoped>

</style>