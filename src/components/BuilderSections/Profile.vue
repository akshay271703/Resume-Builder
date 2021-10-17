<template>
  <div class="resume-section ">
    <div class="profile elevation-5 pa-5">
      <h1 class="title">Let's start with the basic</h1>
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
        v-model="profile.introduction"
        placeholder="Min 50 words"
      ></v-text-field> 
      <div class="errorMessageDiv my-2 error white--text px-5" v-if="errorMessage" >{{ errorMessage }}</div>
      <SectionFooter @next="handleOnNext" />
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { profileValidator } from '@/composables/validators';
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  components: { SectionFooter },
  data(){
    return {
      profile: {
        name: '',
        profession: '',
        introduction: '',
        image: ''
      },
      errorMessage: ``
    }
  },
  methods: {
    handleOnNext(){
      const response = profileValidator(
        this.profile.name.trim(),
        this.profile.profession.trim(),
        this.profile.introduction.trim()
      ) 
      if(!response[0]){
        this.errorMessage = response[1];
        setTimeout(()=>{
          this.errorMessage = ``
        }, 2000);
        return;
      }
      // Move to next Section
      this.$emit('profileUpdated', this.profile);
      this.$store.dispatch('setResumeState', this.getResumeState + 1);
    }
  },
  computed : {
    ...mapGetters(['getResumeState'])
  }
}
</script>

<style scoped>
.profile{
  width: 100%;
}

</style>