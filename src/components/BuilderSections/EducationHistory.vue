<template>
  <div class="resume-section pa-5">
    <div class="header">
      <h1 class="title">Education History</h1>
      <v-btn x-small class="success" fab @click="appendData">+</v-btn>
    </div>
    <div class="education-history">
      <div class="education-item"
        v-for="item in education"
        :key="item.id"
      >
        <input type="text" class="input-element" placeholder="Title" v-model="item.title">
        <div class="education-details">
          <div class="detail">
            <v-text-field
              type="date"
              label="Start Date"
            ></v-text-field>
          </div>
          <div class="detail">
            <v-text-field
              type="date"
              label="End Date"
            ></v-text-field>
          </div>
          <div class="detail">
            <v-text-field
            label="Grade"
            ></v-text-field>
          </div>
        </div> 
      </div>
    <p class="error--text" v-if="errorMessage">{{ errorMessage }}</p>
    <SectionFooter @next="handleOnNext" class="mt-5"/>
    </div>
  </div>
</template>

<script>
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  components: { SectionFooter },
  data(){
    return{
      education: [],
      errorMessage: '',
    }
  },
  methods:{
    appendData(){
      if(this.education.length > 2){
        this.errorMessage = `Cannot add more than 3 sections.`
        setTimeout(()=>{
          this.errorMessage = ``
        }, 2000)
        return;
      }
      this.education.push({
        id: Math.floor(Math.random()*1000),
        startDate: ``,
        endDate: ``,
        title: ``,
        grade: ``
      })
    },
    handleOnNext(){

    }
  },
  created(){
    this.appendData()
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
} 
.education-history{
  width: 100%;
}
.education-item{
  width: 100%;
  margin: 10px 0;
}
.input-element{
  width: 100%;
  border: none;
  padding: 5px;
}
.education-details{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
@media(max-width: 768px){ 
  .education-details{ 
    grid-template-columns: 1fr; 
    grid-gap: 0;
  }
}
.test{
  border: 1px solid red; 
}
</style>