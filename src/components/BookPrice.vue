<template>
  <div class="price ml-2">{{ bookPrice }} {{ price.currencyCode }}</div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import BookPrice from '@/interfaces/book/book-price';
import formatNumber from '@/utils/format-number';

const props = defineProps({
  price: {
    type: Object as PropType<BookPrice>,
    required: true,
  },
});

const bookPrice = computed(() => formatNumber(props.price.amount!));
</script>

<style scoped></style>
