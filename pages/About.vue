<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import AboutTemplate from "~/components/templates/AboutTemplate.vue";

export default Vue.extend({
  components: { AboutTemplate },
  layout: "ibook",
});
</script>

<style scoped></style>
