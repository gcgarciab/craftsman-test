<template>
  <div class="w-100 h-screen overflow-x-hidden">
    <router-view />

    <notifications position="bottom right" />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import useBookStore from './stores/book';

const store = useBookStore();

/**
 * Set Favorites newValue to localStorage to persist store changes.
 * This watch is here because we use the same watch on HomeView,
 * DetailBookView and FavoritesView.
 */
watch(
  store.favorites,
  (newValue) => {
    localStorage.setItem('favorites', JSON.stringify(newValue));
  },
  { deep: true }
);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
