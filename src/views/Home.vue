<template> 
<div id="resume-body">
  <ResumeForm class="resume-body"/> 
</div>
</template>

<script> 
import ResumeForm from './ResumeForm.vue'
  export default {
    name: 'Home',
    components: { ResumeForm }
  }
</script>

<style>
#resume-body{
  min-width: 100vw;
  min-height: 100vh;
  background: url('https://source.unsplash.com/5tW1ca0Zq18')no-repeat center center/cover;
  z-index: 1;
}
.resume-body{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 5;
}
.resume-section{
  max-width: 600px;
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media(max-width: 768px){
  #resume-body{
    background: none;
  }
  .resume-body{
    position: relative;
    max-width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0,0);
  }
}
</style>