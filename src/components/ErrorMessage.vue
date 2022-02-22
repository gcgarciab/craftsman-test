<template>
  <div class="error-message">
    <fa v-if="icon" class="icon text-8xl" :icon="icon" />

    <h2 class="title mt-10">{{ title }}</h2>

    <div class="error-description">
      <p>{{ description }}</p>
    </div>

    <BackToHomeButton v-if="backToHome" />
  </div>
</template>

<script setup lang="ts">
import BackToHomeButton from './BackToHomeButton.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  backToHome: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped>
.error-message {
  @apply px-5 py-10 md:p-20 flex flex-col border shadow-md rounded-md md:items-center;
}
</style>
