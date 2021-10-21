<template>
  <div class="data-body">
    <h1 class="title">{{ headerValues.title }}</h1>
    <div class="header">
      <div>
        <v-text-field
          :label="headerValues.dataValue"
          v-model="currentData"
          :disabled="disabled"
          @keypress.enter="appendData"
          :success-messages="alertMessage"
          class="mb-2"
        ></v-text-field> 
      </div>
      
      <div v-if="!confirmed">
        <v-btn class="success mb-2" block small @click="appendData">Add</v-btn>
        <v-btn color="success" block small outlined @click="saveDetails">Confirm</v-btn>
      </div>
      <v-btn v-else small class="error" @click="setComponentState(false)">Edit</v-btn>
      
    </div>
    
    <div class="pills">
      <span 
        class="pill mb-2" 
        v-for="pill in data" 
        :key="pill"
      >
        {{ pill }}
        <span v-if="!confirmed">
          <v-icon 
            small 
            color="white" 
            @click="removeData(pill)">mdi-close</v-icon>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['headerValues'],
  data(){
    return{
      data: [],
      currentData: '',
      disabled: false,
      alertMessage: '',
      confirmed: false
    }
  },
  methods: {
    appendData(){
      if(!this.data.includes(this.currentData.trim().toLowerCase()) && this.currentData.trim() !== ''){
        this.data.push(this.currentData.trim());
      }
      this.currentData = ``;
      if(this.data.length>0){
        this.alertMessage = 'Make sure to confirm before proceeding.'
      }
    },
    removeData(data){
      this.data = this.data.filter(item=>{
        return item!=data
      })
    },
    saveDetails(){
      this.$emit('fetchResults', this.data);
      this.setComponentState(true)
    },
    setComponentState(status){
      this.disabled = status;
      this.confirmed = status
    }
  }, 
}
</script>

<style scoped>
.pill{
  margin-right: 10px;
  background-color: forestgreen;
  color: #f3f3f3;
  border: none;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 13px;
  font-weight: bold; 
}
.data-body{
  background-color: white;
}
.header{
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-gap: 1rem;
  align-items: center;
}
.pills{
  display: flex;
  flex-wrap: wrap;
}
</style>