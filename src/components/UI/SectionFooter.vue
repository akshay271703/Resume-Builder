<template>
  <div class="footer">
    <div class="progress">
      <v-icon 
        v-for="(progress, index) in 7" 
        :key="index"
        :color="getResumeState <= index ? '#aaa' : 'green'">
        mdi-checkbox-blank-circle
      </v-icon>
    </div>
      <div>
        <v-btn color="success" class="mr-4" @click="handleNavigation(false)" outlined v-if="getResumeState>1">Back</v-btn>
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
</style>