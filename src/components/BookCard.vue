<template>
  <div class="book-card">
    <div class="book-header">
      <div class="book-image w-36 h-48 flex justify-center items-center border">
        <img
          :src="volumeInfo.imageLinks?.smallThumbnail"
          alt="Book image"
          title="Book image"
        />
      </div>

      <div class="main-info">
        <h3 class="book-title">
          {{ volumeInfo.title }}

          <span v-if="volumeInfo.subtitle" class="book-subtitle">{{
            volumeInfo.subtitle
          }}</span>
        </h3>

        <h4 class="authors">
          <span
            v-for="(author, index) in volumeInfo.authors"
            :key="`author-${index + 1}`"
            >{{ author }}</span
          >
        </h4>

        <p v-if="volumeInfo.publisher" class="published mt-3">
          {{ volumeInfo.publisher }},
          {{ volumeInfo.publishedDate }}
        </p>

        <div v-if="volumeInfo.language" class="language mt-3">
          Language: ({{ volumeInfo.language.toUpperCase() }})

          <span v-if="volumeInfo.pageCount" class="total-pages mt-3">
            - Pages: {{ volumeInfo.pageCount }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="card-actions absolute right-6 top-6 w-20 flex"
      :class="showDetailLink ? 'justify-between' : 'justify-end'"
    >
      <AppButton
        v-if="showDetailLink"
        icon="info-circle"
        focus-text="See more"
        :type="ButtonType.BUTTON"
        :color="ButtonColor.PRIMARY"
        @click="goToCurrentBook(id)"
      />

      <AppButton
        icon="heart"
        :focus-text="`${isFavorite ? 'Remove from' : 'Add to'} favorites`"
        :type="ButtonType.BUTTON"
        :color="isFavorite ? ButtonColor.DANGER : ButtonColor.DEFAULT"
        @click="emit('toggleFavorite')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useRouter } from 'vue-router';
import AppButton from '@/ui/AppButton.vue';
import ButtonType from '@/enums/button-type';
import ButtonColor from '@/enums/button-color';
import BookVolumeInfo from '@/interfaces/book/book-volume-info';

const router = useRouter();
const emit = defineEmits(['toggleFavorite']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  volumeInfo: {
    type: Object as PropType<Partial<BookVolumeInfo>>,
    required: true,
  },
  showDetailLink: {
    type: Boolean,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    required: false,
  },
});

/**
 * Redirect to Book detail view.
 * @param id => Book id
 */
function goToCurrentBook(id: string): void {
  router.push({ name: 'BookDetail', params: { id } });
}
</script>

<style scoped>
.book-card {
  min-height: 16rem;
  @apply relative rounded-lg shadow-md px-6 py-10 w-full;
  @apply md:px-10 md:py-8 border my-6;
}

.book-header {
  @apply flex flex-col items-center;
  @apply md:flex-row md:items-start;
}

.book-title {
  @apply px-16 font-semibold;
  @apply md:pl-0 pr-20 md:text-left;
}

.main-info {
  @apply w-full mt-10 text-center;
  @apply md:mt-0 md:ml-5 md:text-left md:w-3/4;
  @apply lg:w-5/6;
}

.authors span::after {
  content: '-';
  position: relative;
  margin: 0 8px;
}

.authors span:last-of-type::after {
  display: none;
}
</style>
