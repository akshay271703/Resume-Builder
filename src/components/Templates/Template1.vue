<template>
  <div class="template-body">
    <h1 class="display-1">{{ data.profile.name }}</h1>
    <p class="designation mb-10">{{ data.profile.profession }}</p>

    <div class="intro-section theme-divider">
      <div class="inner-section contact-section">
        <h1 class="section-heading">CONTACT</h1>
        <div class="d-flex align-center">
          <v-icon size="20">mdi-map-marker</v-icon>
          <span>{{ data.contact.address }}</span>
        </div>
        <div class="d-flex align-center">
          <v-icon size="20">mdi-phone</v-icon>
          <span>{{ data.contact.phone }}</span>
        </div>
        <div class="d-flex align-center">
          <v-icon size="20">mdi-mail</v-icon>
          <span>{{ data.contact.email }}</span>
        </div>
      </div>
      <div class="inner-section profile-section">
        <h1 class="section-heading">PROFILE</h1>
        <span>{{ data.profile.introduction }}</span>
      </div>
    </div>

    <div class="theme-divider mt-10">
      <div class="skill-section inner-section">
        <h1 class="section-heading">SKILLS</h1>
        <ul>
          <li v-for="(skill, index) in data.skills" :key="index">
            <span>{{ skill }}</span>
          </li>
        </ul>

        <h1 class="section-heading mt-10">EDUCATION</h1>
        <div
          class="education mb-3"
          v-for="item in data.education_history"
          :key="item.id"
        >
          <p class="degree-header">{{ item.title }}</p>
          <p class="degree-header">{{ item.institute }}</p>
          <span>{{ item.startDate }} - {{ item.endDate }}</span>
        </div>

        <h1 class="section-heading mt-10">CERTIFICATES</h1>
        <div
          class="certificate mb-3"
          v-for="item in data.certifications"
          :key="item.id"
        >
          <p class="degree-header">{{ item.title }}</p>
          <span class="d-block">{{ item.institute }}</span>
          <span>Completed - {{ item.date }}</span>
        </div>
      </div>
      <div class="experience-section inner-section">
        <h1 class="section-heading">EXPERIENce</h1>
        <div
          class="experience mb-3"
          v-for="exp in data.work_history"
          :key="exp.id"
        >
          <p class="header">
            {{ exp.title }} at {{ exp.institute }} |
            <span>{{ exp.startDate }} - {{ exp.endDate }}</span>
          </p>

          <span class="institute_intro"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            dolore culpa quia nemo itaque! Doloribus rerum quos praesentium,
            quia fugit illo dignissimos unde sit iusto laudantium repudiandae,
            asperiores aliquid odio!</span
          >
        </div>

        <h1 class="section-heading mt-10">Projects</h1>
        <div class="project mb-3" v-for="item in data.projects" :key="item.id">
          <p class="header">{{ item.title }}</p>
          <span>{{ item.description }}</span>
        </div>
      </div>
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
  margin: auto;
  padding: 20px;
}
.designation {
  color: #aaa;
}
h1.section-heading {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
}
.contact-section span {
  margin-left: 10px;
}
.inner-section span {
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1px;
}
.theme-divider {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.experience-section p,
p.header {
  margin-bottom: 0;
}
p.degree-header {
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 0;
}
.experience-section span {
  color: #444;
  font-size: 13px;
  font-weight: 300;
}

.inner-section:nth-child(even) {
  border-left: 2px solid #aaa;
  padding-left: 10px;
}
.py-5 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.px-2 {
  padding-right: 10px;
  padding-left: 10px;
}
.display-1 {
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif !important;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.mt-10 {
  margin-top: 40px !important;
}
.mb-3 {
  margin-bottom: 12px !important;
}
.d-block {
  display: block;
}
ul li {
  margin-left: 20px;
}
.mb-10 {
  margin-bottom: 40px;
}
</style>
