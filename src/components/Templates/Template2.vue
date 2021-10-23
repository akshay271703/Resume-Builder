<template>
  <div class="template-body">

    <div class="header-section theme-divider">
      <div class="section-dark avatar-container ">
        <img src="https://source.unsplash.com/Ly2bD64YY38" alt="" class="user-image">
      </div> 
      <div class="profile-section">
        <div class="name-section">
          <h1>{{ getFirstName }}</h1>
          <h1>{{ getLastName }}</h1>
          <p class="user-profession">{{ data.profile.profession }}</p>
        </div>
        <div class="contact-section section">
          <div>
            <v-icon size="20">mdi-map-marker</v-icon>
            <span>{{ data.contact.address }}</span>
          </div>
          <div>
            <v-icon size="20">mdi-phone</v-icon>
            <span>{{ data.contact.phone }}</span>
          </div>
          <div>
            <v-icon size="20">mdi-mail</v-icon>
            <span>{{ data.contact.email }}</span>
          </div>
        </div>
      </div> 
    </div>

    <div class="about-work-experience theme-divider">
      <div class="section-dark">
        <h1 class="section-title">ABOUT ME</h1>
        <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ratione nesciunt deleniti. Facilis neque tenetur quaerat ipsum repellendus odio iste voluptas facere, earum, amet modi rem aliquam quos, temporibus veritatis beatae consectetur? Atque.</p>
      </div>
      <div class="experience-section section">
        <h1 class="section-title">WORK EXPERIENCE</h1>
        <div class="work"
          v-for="work in data.work_history" :key="work.id" 
        >
          <div class="work-place">
            <p class="work-institute">{{ work.institute }}</p>
            <p class="work-description">New York</p>
            <p class="work-description">{{ work.startDate }} - {{ work.endDate }}</p>
          </div>
          <div class="work-details">
            <p class="work-title">{{ work.title }}</p>
            <p class="work-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nemo! Dicta id iure tempora eaque non.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="websites-education theme-divider">
      <div class="section-dark">
        <h1 class="section-title">SOCIAL LINKS</h1>
        <div class="social-link">
          <v-icon size="20" color="white">mdi-linkedin</v-icon>
          <a :href="data.social.linkedin_url" v-if="data.social.linkedin_url" target="_blank">LinkedIn</a>
        </div>
        
      </div>
    </div>


  </div>
</template>

<script>
import { getDummyData } from '../../composables/userData'
export default {
  data(){
    return{
      data: getDummyData()
    }
  },
  computed: {
    getFirstName(){
      return this.data.profile.name.split(" ")[0].toUpperCase();
    },
    getLastName(){
      return this.data.profile.name.split(" ")[1].toUpperCase();
    }
  }
}
</script>

<style scoped>
.test{
  border: 1px solid red
}
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.template-body{
  max-width: 800px;
  margin: auto;
}
.section-dark{
  background-color: darkslategray;
  color: #f3f3f3;
  padding: 10px 30px;
}
.header-section{
  min-height: 150px; 
}
.avatar-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.user-image{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.theme-divider{
  display: grid;
  grid-template-columns: 225px 575px; 
  padding: 0;
}
.profile-section{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}
.name-section h1{
  font-size: 40px; 
  letter-spacing: 5px;
  line-height: 1cm;
  font-family: 'Bebas Neue', cursive;
}
.user-profession{
  letter-spacing: 2px;
  font-size: 20px;
  font-family: 'Bebas Neue', cursive;
}
.contact-section div{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.contact-section div span {
  margin-left: 20px; 
}
.section-title{
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}
.description, p.description{
  font-size: 14px; 
}
.section{
  padding: 10px 20px;
}
.work{
  display: grid;
  grid-template-columns: 25% 75%;
  margin-bottom: 10px;
}
.work p{
  margin: 0;
}
.work-institute{
  font-family: 'Bebas Neue', cursive;
  font-size: 20px;
  letter-spacing: 2px;
}
.work-title{
  font-size: 20px;
}
.work-description{
  color: #777;
  font-size: 15px; 
}
</style>