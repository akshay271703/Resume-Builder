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
      <SectionFooter @next="handleOnNext" @prev="handleOnPrev" />
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { contactValidator } from '@/composables/validators';
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  props: ['updatedContact'],
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
  created(){
    if(this.updatedContact.email){
      this.contact = this.updatedContact
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
      this.$emit('contactUpdated', this.contact);
      this.$store.dispatch('setResumeState', this.getResumeState + 1);
    },
    handleOnPrev(){
      this.$store.dispatch('setResumeState', this.getResumeState - 1);
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