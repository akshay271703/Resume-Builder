<template>
  <div class="print-screen-body">
    <VueHtml2pdf
      :show-layout="false"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1000"
      filename="resume"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="900px"
      ref="html2Pdf"
    >
      <section slot="pdf-content" class="html2pdf__page-break">
        <Template1 />
      </section>
      <section slot="pdf-content" class="html2pdf__page-break">
        <Template2 />
      </section>
      <section slot="pdf-content" class="html2pdf__page-break">
        <Template3 />
      </section>
    </VueHtml2pdf>
    <v-btn class="success my-15" @click="generateReport">Print</v-btn>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import Template1 from "@/components/Templates/Template1.vue";
import Template2 from "@/components/Templates/Template2.vue";
import Template3 from "@/components/Templates/Template3.vue";
export default {
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },

  components: {
    VueHtml2pdf,
    Template1,
    Template2,
    Template3,
  },
};
</script>

<style scoped>
.pdf-section {
  /* padding: 20px; */
}
</style>
