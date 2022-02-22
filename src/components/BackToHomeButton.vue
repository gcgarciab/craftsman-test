<template>
  <AppButton
    icon="home"
    text="Back to home"
    :margin-top="true"
    :type="ButtonType.BUTTON"
    :color="ButtonColor.PRIMARY"
    @click="$router.push({ name: 'Home' })"
  />
</template>

<script setup lang="ts">
import AppButton from '@/ui/AppButton.vue';
import ButtonType from '@/enums/button-type';
import ButtonColor from '@/enums/button-color';
</script>
