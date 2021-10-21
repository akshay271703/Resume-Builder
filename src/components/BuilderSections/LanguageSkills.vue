<template>
  <div class="resume-section pa-5">
    <div class="skills"> 
      <LanguageSkills 
        :headerValues="headers.skills"  
        @fetchResults="handleSkills"
      />
      <LanguageSkills 
        :headerValues="headers.languages" 
        @fetchResults="handleLanguages"
      /> 
      <p class="error--text pa-2" v-if="errorMessage">{{ errorMessage }}</p>
      <SectionFooter 
        @next="handleOnNext" class="mt-5" 
      />
    </div>
  </div>
</template>

<script>
import LanguageSkills from '@/components/BuilderSections/Fragments/LanguageSkills.vue'
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  components: { LanguageSkills, SectionFooter },
  data(){
    return{
      headers:{
        skills: {
          title: `Please Enter Relevant Skills`,
          dataValue: `Skills`
        },
        languages: {
          title: `Please enter your fluent languages.`,
          dataValue: `Languages`
        },
      },
      dataValue: {
        skills: [],
        languages: []
      },
      errorMessage: ``
    }
  },
  methods:{
    handleOnNext(){
      console.log(this.dataValue)
      if(this.dataValue.skills.length <= 0){
        this.errorMessage = `Please add atleast 1 skills`;
        return
      }
      if(this.dataValue.languages.length <= 0){
        this.errorMessage = `Please add atleast 1 language`;
        return
      }
      this.errorMessage = ``
    },
    handleSkills(skills){
      this.dataValue.skills = skills
    },
    handleLanguages(languages){
      this.dataValue.languages = languages
    }
  },
}
</script>

<style scoped>
.skills{
  width: 100%;
  background-color: white;
}
</style>