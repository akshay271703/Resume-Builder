<template>
  <div class="resume-section profile">
    <v-text-field
      label="Full Name"
      v-model="profile.name"
    ></v-text-field>
    <v-text-field
      label="Profession"
      v-model="profile.profession"
    ></v-text-field>
    <v-text-field
      label="About You"
      v-model="profile.name"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data(){
    return {
      profile: {
        name: '',
        profession: '',
        introduction: '',
        image: ''
      },
    }
  }
}
</script>

<style>

</style>