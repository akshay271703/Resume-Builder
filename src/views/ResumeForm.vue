<template>
  <div class="form-body">
    <h1 class="title my-4">Please fill up the form and we'll generate your resume within seconds.</h1>
    <Profile 
      v-if="getResumeState==1" 
      @profileUpdated="handleProfileUpdated"
      :updatedProfile="user_data.profile"
    /> 
    <Contact v-if="getResumeState==2"
      @contactUpdated="handleContactUpdated"
      :updatedContact="user_data.contact"
     />
    <Social v-if="getResumeState==3" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  methods: {
    handleProfileUpdated(profileData){
      this.user_data.profile = profileData;
    },
    handleContactUpdated(contactData){
      this.user_data.contact = contactData;
    }
  },
  computed: {
    ...mapGetters(['getResumeState'])
  }
}
</script>

<style scoped>

</style>