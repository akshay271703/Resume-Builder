<template> 
  <ResumeForm/>
</template>

<script> 
import ResumeForm from './ResumeForm.vue'
  export default {
    name: 'Home',
    components: { ResumeForm }
  }
</script>

<style>
.resume-section{
  max-width: 600px;
  margin: auto;
  min-height: 80vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>