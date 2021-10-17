<template>
  <div class="footer">
    <span>Step {{ getResumeState }} of 7</span>
      <div>
        <v-btn color="success" class="mr-4" @click="handleNavigation(true)" outlined v-if="getResumeState>1">Back</v-btn>
        <v-btn class="success" @click="handleNavigation(true)"> Next</v-btn>
      </div> 
  </div>
</template>

<script> 
import { mapGetters } from 'vuex';
export default {
  methods: {
    handleNavigation(value){
      if(value){
        this.$emit('next')
      } else {
        this.$emit('prev')
      }
    }
  },
  computed :{
    ...mapGetters(['getResumeState'])
  }
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer span{

}
</style>