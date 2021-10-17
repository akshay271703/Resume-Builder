<template>
  <div class="resume-section contact">
    <v-text-field
      label="Address"
      v-model="contact.address"
    ></v-text-field>
    <v-text-field
      label="Phone"
      v-model="contact.phone"
    ></v-text-field>
    <v-text-field
      label="Email"
      v-model="contact.email"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contact: {
        address: '',
        phone: '',
        email: ''
      },
    }
  }
}
</script>

<style>

</style>