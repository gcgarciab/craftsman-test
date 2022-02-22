<template>
  <div class="error px-5 py-10 md:p-20">
    <fa v-if="icon" class="icon text-sm" :icon="icon" />

    <h2 class="title">{{ title }}</h2>

    <div class="error-description">
      <p>{{ description }}</p>
    </div>

    <AppButton
      v-if="backToHome"
      text="Back to home"
      icon="home"
      :color="ButtonColor.PRIMARY"
      :type="ButtonType.BUTTON"
      @click="$router.push({ name: 'HomeView' })"
    />
  </div>
</template>

<script setup lang="ts">
import AppButton from '../ui/AppButton.vue';
import ButtonType from '../enums/button-type';
import ButtonColor from '../enums/button-color';

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

<style scoped></style>
