<template>
  <section class="home wrapper">
    <AppButton
      icon="heart"
      class="absolute top-5 right-5"
      title="Go to favorites"
      :type="ButtonType.BUTTON"
      :color="ButtonColor.DANGER"
      @click="$router.push({ name: 'Favorites' })"
    />

    <form @submit.prevent="searchBook()" class="books-search">
      <img
        src="../assets/images/craftsman-logo.png"
        alt="Craftman Logo"
        title="Craftman Logo"
        class="mb-10 w-3/4 lg:w-3/5"
      />

      <div class="form-row">
        <div class="search-input w-full">
          <AppInputField
            v-model="search"
            icon="search"
            placeholder="Search books by volume"
          />
        </div>

        <AppButton
          text="Search"
          :type="ButtonType.SUBMIT"
          :color="ButtonColor.PRIMARY"
          :disabled="allowSearchButton"
        />
      </div>
    </form>

    <div v-if="!mainStore.isLoading" class="books-result m-auto lg:w-5/6">
      <div
        v-if="bookStore.books.length > 0"
        class="book-cards flex flex-col m-auto"
      >
        <BookCard
          v-for="book in bookStore.books"
          :key="book.id"
          :id="book.id"
          :show-detail-link="true"
          :volume-info="book.volumeInfo"
          :is-favorite="favorites.includes(book.id)"
          @toggle-favorite="toggleFavoriteBook(book.id)"
        />

        <AppButton
          text="Load more"
          icon="spinner"
          :margin-top="true"
          :type="ButtonType.BUTTON"
          :color="ButtonColor.DEFAULT"
          @click="loadMoreBooks()"
        />
      </div>

      <ErrorMessage
        v-if="searchDone && bookStore.books.length === 0"
        title="Error!"
        description="Not found data, try again."
        icon="exclamation-triangle"
      />
    </div>

    <AppLoader v-else />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

import useBookStore from '../stores/book';
import useMainStore from '../stores/main';
import ButtonType from '../enums/button-type';
import ButtonColor from '../enums/button-color';
import BookCard from '../components/BookCard.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import AppInputField from '../ui/AppInputField.vue';
import AppButton from '../ui/AppButton.vue';
import AppLoader from '../ui/AppLoader.vue';

const search = ref('');
const bookStore = useBookStore();
const mainStore = useMainStore();
const searchDone = ref(false);
const { favorites } = storeToRefs(bookStore);

const allowSearchButton = computed(
  () => search.value.length <= 2 || search.value === bookStore.currentSearch
);

/**
 * Calls fetchBooks action from store.
 * and allow isLoading component.
 */
async function searchBook(): Promise<void> {
  mainStore.$patch({ isLoading: true });

  await bookStore.fetchBooks(search.value).catch(() => mainStore.$reset());

  searchDone.value = true;
  mainStore.$reset();
}

/**
 * Calls fetchBooks action from book store specifying the page.
 */
function loadMoreBooks(): void {
  bookStore.fetchBooks(search.value, bookStore.currentPage + 1);
}

/**
 * Calls toggleFavoriteBook action from book store to add or
 * remove specific book from favorites state.
 * @param id => Book id
 */
function toggleFavoriteBook(id: string) {
  bookStore.toggleFavoriteBook(id);
}
</script>

<style scoped>
.books-search {
  @apply m-auto flex flex-col items-center;
  @apply lg:w-full;
}

.form-row {
  @apply flex flex-row items-start justify-between w-full;
  @apply lg:w-5/6;
}
</style>
