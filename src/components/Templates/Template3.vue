<template>
  <div class="template-body">
    <div class="header-section">
      <h1 class="name">{{ data.profile.name }}</h1>
      <h1 class="profession">{{ data.profile.profession }}</h1>
      <div class="contact-section section">
        <div class="contact-item">
          <p>Phone</p>
          <p>{{ data.contact.phone }}</p>
        </div>
        <div class="contact-item">
          <p>Email</p>
          <p>{{ data.contact.email }}</p>
        </div>
        <div class="contact-item">
          <p>LinkedIn</p>
          <p>{{ data.social.linkedin_url }}</p>
        </div>
        <div class="contact-item">
          <p>Github</p>
          <p>{{ data.social.github_url }}</p>
        </div>
      </div>
    </div>
    <div class="section">
      <p>{{ data.profile.introduction }}</p>
    </div>
    <div class="section">
      <h1 class="section-header">Experience</h1>
      <div class="work-experience-section section">
        <div class="work" v-for="work in data.work_history" :key="work.id">
          <p>{{ work.startDate }} - {{ work.endDate }}</p>
          <div class="work-details">
            <h1 class="element-header">{{ work.title }}</h1>
            <h1 class="element-sub-header">{{ work.institute }}</h1>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                suscipit modi nihil soluta!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                suscipit modi nihil soluta!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 class="section-header">Education</h1>
      <div class="education-section section">
        <div
          class="education"
          v-for="education in data.education_history"
          :key="education.id"
        >
          <p>{{ education.startDate }} - {{ education.endDate }}</p>
          <div class="education-details">
            <h1 class="element-sub-header">
              {{ education.title }} from {{ education.institute }}
            </h1>
          </div>
        </div>
      </div>
      <h1 class="section-header">Skills</h1>
      <div class="skill-container">
        <span class="repeater" v-for="item in data.skills" :key="item">
          {{ item }}</span
        >
      </div>
      <h1 class="section-header">Certifications</h1>
      <ul class="section">
        <li v-for="item in data.certifications" :key="item.id">
          {{ item.title }}, {{ item.institute }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDummyData } from "../../composables/userData";
export default {
  data() {
    return {
      data: getDummyData(),
    };
  },
};
</script>

<style scoped>
.template-body {
  max-width: 900px;
}
p {
  margin-bottom: 0;
}
.header-section {
  background-color: #333;
  color: white;
  padding: 30px 20px 20px 20px;
}
.section {
  padding: 20px 20px 0 20px;
  max-width: 800px;
}
.header-section h1 {
  font-weight: 400;
}
.header-section h1.name {
  font-size: 45px;
}
.header-section h1.profession {
  font-size: 25px;
}
.contact-section {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
}
.contact-item p:nth-child(1) {
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
}
.contact-item p:nth-child(2) {
  font-size: 14px;
}
h1.section-header {
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}
.work,
.education {
  display: grid;
  grid-template-columns: 15% 85%;
  align-items: flex-start;
  margin-bottom: 20px;
}
.element-header {
  font-size: 20px;
  font-weight: 500;
}
.element-sub-header {
  font-size: 15px;
  font-style: italic;
}
.skill-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
}
.repeater {
  margin-bottom: 5px;
  margin-right: 5px;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 2px;
  padding: 5px 10px;
}
</style>
