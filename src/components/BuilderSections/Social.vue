 <template>
  <div class="resume-section ">
    <div class="social elevation-5 pa-5">
      <h1 class="title">Would you like to add them ?</h1>
      <v-text-field
        label="LinkedIn Url"
        v-model="social.linkedin_url"
      ></v-text-field>
      <v-text-field
        label="Github Url"
        v-model="social.github_url"
      ></v-text-field>
      <v-text-field
        label="Porfolio Website"
        v-model="social.portfolio_url"
      ></v-text-field>
      <v-text-field
        label="Blogging Website"
        v-model="social.blogging_url"
      ></v-text-field> 
      <SectionFooter @next="handleOnNext" @prev="handleOnPrev" />
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SectionFooter from '@/components/UI/SectionFooter.vue';
export default {
  props: ['updatedSocial'],
  components: { SectionFooter },
  data(){
    return{
      social: {
        linkedin_url: '',
        github_url: '',
        portfolio_url: '',
        blogging_url: ''
      }
    }
  },
  created(){
    if(this.updatedSocial){
      this.social = this.updatedSocial
    }
  },
  methods: { 
    handleOnNext(){  
      // Move to next Section
      this.$emit('socialUpdated', this.social);
      this.$store.dispatch('setResumeState', this.getResumeState + 1);
    },
    handleOnPrev(){
      this.$store.dispatch('setResumeState', this.getResumeState - 1);
    }
  },
  computed : {
    ...mapGetters(['getResumeState'])
  }
}
</script>

<style scoped>
.social{
  width: 100%;
}
</style>