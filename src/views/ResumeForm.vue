<template>
  <div class="form-body">
    <!-- <h1 class="title my-4">Please fill up the form and we'll generate your resume within seconds.</h1> -->
    <Profile 
      v-if="getResumeState==1" 
      @profileUpdated="handleProfileUpdated"
      :updatedProfile="user_data.profile"
    /> 
    <Contact v-if="getResumeState==2"
      @contactUpdated="handleContactUpdated"
      :updatedContact="user_data.contact"
     />
    <Social v-if="getResumeState==3"
      @socialUpdated="handleSocialUpdated"
      :updatedSocial="user_data.social"
     />
     <LanguageSkills v-if="getResumeState==4"
     />
     <EducationHistory v-if="getResumeState==5"
     />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Profile from '@/components/BuilderSections/Profile.vue'
import Contact from '@/components/BuilderSections/Contact.vue'
import Social from '@/components/BuilderSections/Social.vue'
import LanguageSkills from '@/components/BuilderSections/LanguageSkills.vue' 
import EducationHistory from '@/components/BuilderSections/EducationHistory.vue'
export default {
  components : { 
    Profile,
    Contact,
    Social,
    LanguageSkills,
    EducationHistory
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
    },
    handleSocialUpdated(socialData){
      this.user_data.social = socialData;
    }
  },
  computed: {
    ...mapGetters(['getResumeState'])
  }
}
</script>

<style scoped>

</style>