<template>
  <div class="resume-section ">
    <div class="contact elevation-5 pa-5">
      <h1 class="title">Something Personal!</h1>
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
      <div class="errorMessageDiv my-2 error white--text px-5" v-if="errorMessage" >{{ errorMessage }}</div>
      <SectionFooter @next="handleOnNext" />
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { contactValidator } from '@/composables/validators';
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  components: { SectionFooter },
  data(){
    return{
      contact: {
        address: '',
        phone: '',
        email: ''
      },
      errorMessage: ``
    }
  },
  methods :{
    handleOnNext(){
      const response = contactValidator(
        this.contact.address.trim(),
        this.contact.phone.trim(),
        this.contact.email.trim()
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
.contact{
  width: 100%;
}
</style>