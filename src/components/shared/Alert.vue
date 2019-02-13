<template>
        <v-alert
      :value="true"
      color="error"
      icon="warning" error dismissible @input="onClose"
    >
      {{ text }}
    </v-alert>
</template>

<script>
    export default {
        props: ['text'],
        methods: {
            onClose() {
                this.$emit('dismissed');
            }
        }
    };
</script>

<style scoped>

</style>