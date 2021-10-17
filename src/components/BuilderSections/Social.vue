<template>
  <div class="resume-section social">
    <v-text-field
      label="LinkedIn Url"
      v-model="social.linkedin_url"
    ></v-text-field>
    <v-text-field
      label="Github Url"
      v-model="social.github_url"
    ></v-text-field>
    <v-text-field
      label="Porfolio Website"
      v-model="social.portfolio_url"
    ></v-text-field>
    <v-text-field
      label="Blogging Website"
      v-model="social.blogging_url"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data(){
    return{
      social: {
        linkedin_url: '',
        github_url: '',
        portfolio_url: '',
        blogging_url: ''
      }
    }
  }
}
</script>

<style>

</style>