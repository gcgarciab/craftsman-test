import { defineStore } from 'pinia';
import { notify } from '@kyvg/vue3-notification';
import requests from '../helpers/http';
import BookState from '../interfaces/store/book-state';
import Book from '../interfaces/book';
import BookVolumeInfo from '../interfaces/book/book-volume-info';
// import booksSearchMock from '../mocks/books-search';

const localFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

const useBookStore = defineStore({
  id: 'book',

  state: () => ({
    books: [],
    // books: booksSearchMock.items,
    favorites: localFavorites || [],
    totalItems: 0,
    currentPage: 1,
    currentSearch: '',
    itemsPerPage: 20,
  } as BookState),

  actions: {
    /**
     * Make a GET request with search value to fetch books
     * by volume filtering by its value, and concat to book
     * state variable.
     * @param search => Value to search
     */
    async fetchBooks(search: string, page: number = 1): Promise<void> {
      const response = await requests.get(
        `/volumes?q=${search}&startIndex=${page}&maxResults=${this.itemsPerPage}`
      );

      if (!response.items) {
        // Show notify modal
        this.books = [];

        notify({
          title: 'No results found!',
          text: 'Try again with another keyword',
          type: 'error',
          duration: 3000,
          ignoreDuplicates: true,
        });
      } else if (this.currentSearch === search) {
        // Concat results
        this.books = [...this.books, ...response.items];
      } else {
        // Set new results
        this.currentSearch = search;
        this.books = [...response.items];
      }

      this.totalItems = response.totalItems;
    },

    /**
     * Make a GET request with Book id to fetch
     * its information and return it.
     * @param id  => Book id
     * @returns => Book data
     */
    async fetchBookById(id: string): Promise<Book> {
      return requests.get(`/volumes/${id}`);
    },

    /**
     * Make a GET request by any favorite id in state
     * and return only BookVolumeInfo and Id to show
     * in Favorites view.
     * @returns => BookVolumeInfo[]
     */
    async fetchFavoriteBooks(): Promise<Partial<BookVolumeInfo>[]> {
      if (this.favorites.length === 0) {
        return [];
      }

      return Promise.all(
        this.favorites.map(async (bookId) => {
          const bookData = await this.fetchBookById(bookId);
          
          console.log(bookData.volumeInfo);
          console.log({ id: bookId });
          return { ...bookData.volumeInfo, id: bookId };
        })
      );
    },

    /**
     * Check if received id exists in favorites array and
     * deletes it in that case, adds it if not.
     * @param id => Book id
     */
    toggleFavoriteBook(id: string): void {
      if (this.favorites.includes(id)) {
        const bookIndex = this.favorites.indexOf(id);

        this.favorites.splice(bookIndex, 1);
      } else {
        this.favorites.push(id);
      }
    },
  },
});

export default useBookStore;
