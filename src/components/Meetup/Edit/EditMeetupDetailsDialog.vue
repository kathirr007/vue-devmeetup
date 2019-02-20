<template>
  <v-dialog max-width="500px" persistent v-model="editDialog">
    <v-btn fab class="teal white--text" slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-title class="px-0">
                        <h4 class="headline teal--text">Edit Mettup</h4>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-text>
                        <v-text-field name="title" v-model="editedTitle" label="Title" id="title" required></v-text-field>
                        <v-textarea label="Description" v-model="editedDescription" name="description" required></v-textarea>
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-actions class="pa-0 mt-3">
                        <v-btn class="teal--text darken-1 ma-0 mr-3" @click="editDialog=false">Close</v-btn>
                        <v-btn class="teal--text darken-1 ma-0" @click="onSaveChanges">Save</v-btn>
                    </v-card-actions>
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
            editedTitle: this.meetup.title,
            editedDescription: this.meetup.description
        }
    },
    methods: {
        onSaveChanges() {
            if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
                return
            }
            this.editDialog = false
            this.$store.dispatch('updateMeetupData', {
                id: this.meetup.id,
                title: this.editedTitle,
                description: this.editedDescription
            })
        }
    }
};
</script>

<style scoped>
</style>