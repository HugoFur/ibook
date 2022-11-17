<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params }) {
    await books.show({ id: params.id as any })
  },
})
</script>

<style scoped></style>
