<template>
  <section class="home wrapper">
    <AppButton
      icon="heart"
      class="absolute top-5 right-5"
      :type="ButtonType.BUTTON"
      :color="ButtonColor.DANGER"
      @click="$router.push({ name: 'Favorites' })"
    />

    <form @submit.prevent="searchBook()" class="books-search">
      <img
        src="../assets/images/craftsman-logo.png"
        alt="Craftman Logo"
        title="Craftman Logo"
        class="mb-10 w-3/4 lg:w-4/5"
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
          :disabled="search.length <= 2"
        />
      </div>
    </form>

    <div v-if="searchDone" class="books-result">
      <!-- <div class="books-result"> -->
      <template v-if="store.books.length > 0">
        <div class="book-cards">
          <BookCard
            v-for="book in store.books"
            :key="book.id"
            :id="book.id"
            :show-detail-link="true"
            :volume-info="book.volumeInfo"
            :is-favorite="favorites.includes(book.id)"
            @toggle-favorite="toggleFavoriteBook(book.id)"
          />
        </div>

        <AppButton
          text="Load more"
          :margin-top="true"
          :type="ButtonType.BUTTON"
          :color="ButtonColor.DEFAULT"
          @click="loadMoreBooks()"
        />
      </template>

      <div v-else class="no-results">
        <img
          src="../assets/images/no-result.gif"
          alt="No results image"
          title="No results image"
          class="m-auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import useBookStore from '../stores/book';
import ButtonType from '../enums/button-type';
import ButtonColor from '../enums/button-color';
import BookCard from '../components/BookCard.vue';
import AppButton from '../ui/AppButton.vue';
import AppInputField from '../ui/AppInputField.vue';

const search = ref('');
const store = useBookStore();
const searchDone = ref(false);
const { favorites } = storeToRefs(store);

/**
 * Calls fetchBooks action from store.
 */
function searchBook(): void {
  searchDone.value = true;
  store.fetchBooks(search.value);
}

/**
 * Calls fetchBooks action from store specifying the page.
 */
function loadMoreBooks(): void {
  store.fetchBooks(search.value, store.currentPage + 1);
}

/**
 * Calls toggleFavoriteBook action from store to add or remove
 * specific book from favorites state.
 * @param id => Book id
 */
function toggleFavoriteBook(id: string) {
  store.toggleFavoriteBook(id);
}
</script>

<style scoped>
.books-search {
  @apply m-auto flex flex-col items-center;
  @apply lg:w-3/4;
}

.form-row {
  @apply flex flex-row items-start justify-between w-full;
  @apply lg:w-5/6;
}
</style>
