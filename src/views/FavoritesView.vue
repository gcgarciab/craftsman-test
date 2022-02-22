<template>
  <section class="favorites wrapper">
    <h2 class="title">Favorites</h2>

    <div v-if="booksToShow.length > 0" class="favorite-items items-container">
      <BookCard
        v-for="book in booksToShow"
        :key="book.id"
        :id="book.id!"
        :show-detail-link="true"
        :volume-info="book"
        :is-favorite="favorites.includes(book.id!)"
        @toggle-favorite="toggleFavoriteBook(book.id!)"
      />

      <BackToHomeButton />
    </div>

    <template v-else>
      <AppLoader v-if="favorites.length > 0" />

      <ErrorMessage
        v-else
        title="Ups!"
        description="You don't have favorites yet"
        icon="exclamation-triangle"
        :back-to-home="true"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onBeforeMount, ref } from 'vue';

import useBookStore from '@/stores/book';
import AppLoader from '@/ui/AppLoader.vue';
import BookCard from '@/components/BookCard.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import BackToHomeButton from '@/components/BackToHomeButton.vue';
import BookVolumeInfo from '@/interfaces/book/book-volume-info';

const store = useBookStore();
const { favorites } = storeToRefs(store);
const favoritesData = ref<Partial<BookVolumeInfo>[]>([]);

/**
 * Check if each favorite id is in current favoritesData.
 */
const booksToShow = computed(() =>
  favoritesData.value.filter((book) => favorites.value.includes(book.id!))
);

/**
 * Calls toggleFavoriteBook action from store to add or remove
 * specific book from favorites state.
 * @param id => Book id
 */
function toggleFavoriteBook(id: string) {
  store.toggleFavoriteBook(id);
}

onBeforeMount(async () => {
  favoritesData.value = await store.fetchFavoriteBooks();
});
</script>

<style scoped></style>
