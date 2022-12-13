<template>
  <footer class="mainfooter">
    <Container>
      <MainLogo />
      <p>Hugo Furtado, <br />{{ currentYear }}</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import MainLogo from '../atoms/MainLogo.vue'
import Container from '../bosons/Container.vue'

export default Vue.extend({
  components: { Container, MainLogo },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
})
</script>

<style lang="scss" scoped>
.mainfooter {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  position: absolute;
  bottom: 0;
  left: 0;
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>
