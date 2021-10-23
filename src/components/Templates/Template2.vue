<template>
  <div class="template-body">
    <div class="header-section theme-divider">
      <div class="section-dark avatar-container ">
        <img
          src="https://source.unsplash.com/Ly2bD64YY38"
          alt=""
          class="user-image"
        />
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
        <p class="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          ratione nesciunt deleniti. Facilis neque tenetur quaerat ipsum
          repellendus odio iste voluptas facere, earum, amet modi rem aliquam
          quos, temporibus veritatis beatae consectetur? Atque.
        </p>
      </div>
      <div class="experience-section section">
        <h1 class="section-title">WORK EXPERIENCE</h1>
        <div class="work" v-for="work in data.work_history" :key="work.id">
          <div class="work-place">
            <p class="work-institute">{{ work.institute }}</p>
            <p class="work-description">New York</p>
            <p class="work-description">
              {{ work.startDate }} - {{ work.endDate }}
            </p>
          </div>
          <div class="work-details">
            <p class="work-title">{{ work.title }}</p>
            <p class="work-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, nemo! Dicta id iure tempora eaque non.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="websites-education theme-divider">
      <div class="section-dark">
        <h1 class="section-title mt-5">SKILLS</h1>
        <div class="skills-container">
          <span class="skill-pill" v-for="skill in data.skills" :key="skill">{{
            skill
          }}</span>
        </div>

        <h1 class="section-title mt-5">SOCIAL LINKS</h1>
        <div class="social-link" v-if="data.social.linkedin_url">
          <v-icon size="20" color="white">mdi-linkedin</v-icon>
          <a :href="data.social.linkedin_url" target="_blank">LinkedIn</a>
          <span class="social-link-data">{{ data.social.linkedin_url }}</span>
        </div>
        <div class="social-link" v-if="data.social.github_url">
          <v-icon size="20" color="white">mdi-github</v-icon>
          <a :href="data.social.github_url" target="_blank">Github</a>
          <span class="social-link-data">{{ data.social.github_url }}</span>
        </div>
        <div class="social-link" v-if="data.social.portfolio_url">
          <v-icon size="20" color="white">mdi-github</v-icon>
          <a :href="data.social.portfolio_url" target="_blank">Github</a>
          <span class="social-link-data">{{ data.social.portfolio_url }}</span>
        </div>
      </div>

      <div class="education-section section">
        <h1 class="section-title mt-5">EDUCATION</h1>
        <div
          class="education"
          v-for="education in data.education_history"
          :key="education.id"
        >
          <div class="education-place">
            <p class="education-institute">{{ education.institute }}</p>
            <p class="education-description">New York</p>
            <p class="education-description">
              {{ education.startDate }} - {{ education.endDate }}
            </p>
          </div>
          <div class="education-details">
            <p class="education-title">{{ education.title }}</p>
            <p class="education-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, nemo! Dicta id iure tempora eaque non.
            </p>
          </div>
        </div>
      </div>

      <div class="certificate-projects theme-divider">
        <div class="section-dark">
          <h1 class="section-title mt-5">CERTIFICATES</h1>
          <div
            class="certificate"
            v-for="certificate in data.certifications"
            :key="certificate.id"
          >
            <p class="certificate-title">{{ certificate.title }}</p>
            <p class="certificate-issuer">
              Awarded By: {{ certificate.institute }}
            </p>
          </div>
          <h1 class="section-title mt-5">LANGUAGES</h1>
          <div class="language-container">
            <span
              class="language-pill"
              v-for="language in data.languages"
              :key="language"
              >{{ language }}</span
            >
          </div>
        </div>
        <div class="section-projects section">
          <h1 class="section-title mt-5">PROJECTS</h1>
          <div
            class="project"
            v-for="project in data.projects"
            :key="project.id"
          >
            <p class="project-title">{{ project.title }}</p>
            <p class="project-description">{{ project.description }}</p>
          </div>
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
  computed: {
    getFirstName() {
      return this.data.profile.name.split(" ")[0].toUpperCase();
    },
    getLastName() {
      return this.data.profile.name.split(" ")[1].toUpperCase();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.template-body {
  max-width: 900px;
  margin: auto;
}
.section-dark {
  background-color: darkslategray;
  color: #f3f3f3;
  padding: 10px 30px;
}
.header-section {
  min-height: 150px;
}
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.user-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.theme-divider {
  display: grid;
  grid-template-columns: 250px 550px;
  padding: 0;
}
.profile-section {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}
.name-section h1 {
  font-size: 40px;
  letter-spacing: 5px;
  line-height: 1cm;
  font-family: "Bebas Neue", cursive;
}
.user-profession {
  letter-spacing: 2px;
  font-size: 20px;
  font-family: "Bebas Neue", cursive;
}
.contact-section div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.contact-section div span {
  margin-left: 20px;
}
.section-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}
.description,
p.description {
  font-size: 14px;
}
.section {
  padding: 10px 20px;
}
.work,
.education {
  display: grid;
  grid-template-columns: 25% 75%;
  margin-bottom: 10px;
}
.work p,
.education p {
  margin: 0;
}
.work-institute,
.education-institute {
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  letter-spacing: 2px;
}
.work-title .education-title {
  font-size: 20px;
}
.work-description,
.education-description {
  color: #777;
  font-size: 15px;
}
.social-link {
  margin-top: 5px;
}
.social-link a {
  color: white;
  text-decoration: none;
}
.social-link-data {
  display: block;
  font-size: 13px;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
}
.skill-pill,
.language-pill {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
  margin-bottom: 5px;
  margin-right: 5px;
}
.mt-5 {
  margin-top: 20px;
}
.certificate {
  margin-bottom: 10px;
}
.certificate p {
  margin-bottom: 0;
}
.certificate p.certificate-issuer {
  font-size: 13px;
  color: #ccc;
  font-style: italic;
}
.project {
  margin-bottom: 10px;
}
.project p {
  margin-bottom: 0;
}
.project .project-title {
  font-weight: 500;
  font-size: 19px;
}
.project .project-description {
  color: #777;
  font-size: 14px;
  text-align: justify;
}
.language-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
