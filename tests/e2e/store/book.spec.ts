import { setActivePinia, createPinia } from 'pinia';
import useBookStore from '@/stores/book';

describe('Book store', () => {
  beforeEach(() => setActivePinia(createPinia()));

  const favoritesMock = ['b-hH4Ma4Hq0C', 'qtmxDwAAQBAJ', 'zt9fCQAAQBAJ'];

  it('ToggleFavoriteBook action', () => {
    const bookStore = useBookStore();
    
    bookStore.favorites = favoritesMock;
    
    // Add
    bookStore.toggleFavoriteBook('UOAiEAAAQBAJ');
    expect(bookStore.favorites.length).toBe(4);
    // Remove
    bookStore.toggleFavoriteBook('qtmxDwAAQBAJ');
    expect(bookStore.favorites.length).toBe(3);
    // Toggle
    bookStore.toggleFavoriteBook('UOAiEAAAQBAJ');
    expect(bookStore.favorites.length).toBe(2);
  });

  it('FetchBooks action', async () => {
    const bookStore = useBookStore();
    await bookStore.fetchBooks('soccer');

    expect(bookStore.books.length).toBeGreaterThan(0);
  });

  /**
   * Another actions are tested on views components.
   */
});
