<template>
  <div class="form-body">
    <h1 class="title my-4">Please fill up the form and we'll generate your resume within seconds.</h1>
    <Profile /> 
    <Contact />
    <Social />
  </div>
</template>

<script>
import Profile from '@/components/BuilderSections/Profile.vue'
import Contact from '@/components/BuilderSections/Contact.vue'
import Social from '@/components/BuilderSections/Social.vue'
export default {
  components : { 
    Profile,
    Contact,
    Social
  },
  data(){
    return{
      user_data: {
        profile: {},
        contact: {},
        social: {},
        languages: [], 
        skills: [],
        work_history: [],
        education_history: [],
        certifications: [],
        projects: []
      }
    }
  }
}
</script>

<style scoped>

</style>