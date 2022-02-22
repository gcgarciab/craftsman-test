<template>
  <section class="book-detail wrapper">
    <div v-if="!isSelectedBookEmpty" class="book-info">
      <h2 class="title">Book detail</h2>

      <div class="volume-info item">
        <BookCard
          :id="currentBook.id"
          :volume-info="currentBook.volumeInfo"
          :is-favorite="favorites.includes(currentBook.id)"
          @toggle-favorite="toggleFavoriteBook(currentBook.id)"
        />
      </div>

      <div v-if="volumeInfo.description" class="description item">
        <h4 class="subtitle">Description</h4>
        <div
          class="description-data text-left px-5"
          v-html="volumeInfo.description"
        />
      </div>

      <div v-if="volumeInfo.categories?.length" class="categories item">
        <h4 class="subtitle">Categories</h4>

        <p
          v-for="(category, index) in volumeInfo.categories"
          :key="`category-${index + 1}`"
          class="category px-5"
        >
          {{ category }}
        </p>
      </div>

      <div class="book-links item">
        <h4 class="subtitle">Quick links</h4>

        <div class="links flex items-center">
          <div class="book-link">
            <AppButton
              text="Preview"
              icon="book"
              @click="goToLink(volumeInfo.previewLink!)"
            />
          </div>

          <div class="book-link">
            <AppButton
              text="Info"
              icon="book"
              @click="goToLink(volumeInfo.infoLink!)"
            />
          </div>

          <div class="book-link">
            <AppButton
              text="Canonical"
              icon="book"
              @click="goToLink(volumeInfo.canonicalVolumeLink!)"
            />
          </div>
        </div>
      </div>

      <div
        v-if="saleInfo.saleability !== BookSaleability.NOT_FOR_SALE"
        class="sale-info item"
      >
        <h4 class="subtitle">Price</h4>

        <div class="prices px-5">
          <div class="price-items flex justify-between border">
            <p v-if="saleInfo.listPrice?.amount" class="book-price">
              <span>List Price:</span>
              <BookPrice :price="saleInfo.listPrice" />
            </p>

            <p v-if="saleInfo.retailPrice?.amount" class="book-price">
              <span>Retail Price:</span>
              <BookPrice :price="saleInfo.retailPrice" />
            </p>

            <div
              v-if="saleInfo.buyLink"
              class="sale-action w-1/3 flex justify-center my-5"
            >
              <AppButton
                icon="money-bill-wave"
                text="Buy"
                :type="ButtonType.BUTTON"
                :color="ButtonColor.SUCCESS"
                @click="goToLink(saleInfo.buyLink!)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppLoader v-if="mainStore.isLoading" />

    <ErrorMessage
      v-if="isSelectedBookEmpty && !mainStore.isLoading"
      title="Error!"
      description="Not found data from current book"
      icon="exclamation-triangle"
      :back-to-home="true"
    />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { computed, onBeforeMount, reactive } from 'vue';

import useBookStore from '../stores/book';
import useMainStore from '../stores/main';
import Book from '../interfaces/book';
import ButtonType from '../enums/button-type';
import ButtonColor from '../enums/button-color';
import BookSaleability from '../enums/book-saleability';
import BookCard from '../components/BookCard.vue';
import BookPrice from '../components/BookPrice.vue';
import AppButton from '../ui/AppButton.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import AppLoader from '../ui/AppLoader.vue';

const route = useRoute();
const bookStore = useBookStore();
const mainStore = useMainStore();
const currentBook = reactive<Book>({} as Book);
const { favorites } = storeToRefs(bookStore);
const bookId = route.params.id as string;

/**
 * Check if current book data was loaded successfully.
 */
const isSelectedBookEmpty = computed(
  () => Object.keys(currentBook).length === 0
);

const saleInfo = computed(() => currentBook.saleInfo);
const volumeInfo = computed(() => currentBook.volumeInfo);

/**
 * Open Book URL in a new tab.
 * @param url => Buy URL
 */
function goToLink(url: string): void {
  window.open(url, '_blank');
}

/**
 * Calls toggleFavoriteBook action from store to add or remove
 * specific book from favorites state.
 * @param id => Book id
 */
function toggleFavoriteBook(id: string) {
  bookStore.toggleFavoriteBook(id);
}

onBeforeMount(async () => {
  mainStore.$patch({ isLoading: true });
  const data = await bookStore.fetchBookById(bookId);
  Object.assign(currentBook, data);
  mainStore.$reset();
});
</script>

<style scoped>
.item {
  @apply my-10 text-left;
}

.description-data >>> p {
  @apply my-6;
}

.price-items > :nth-child(2) {
  @apply border-x;
}

.price-items .book-price {
  @apply w-1/3 flex justify-center items-center;
}

.book-link {
  @apply w-1/3 flex flex-col px-10;
}
</style>
