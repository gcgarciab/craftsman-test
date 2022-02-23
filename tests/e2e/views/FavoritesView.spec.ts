import { mount, shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { createTestingPinia, TestingOptions } from '@pinia/testing';
import useBookStore from '@/stores/book';
import favoritesData from '@/mocks/books-by-id.json';
import FavoritesView from '@/views/FavoritesView.vue';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: favoritesData })),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('FavoritesView', () => {
  function factory(options?: TestingOptions) {
    const wrapper = mount(FavoritesView, {
      global: {
        plugins: [createTestingPinia(options)],
      },
    });

    const store = useBookStore();
    store.favorites = ['VvJZ3lp2sg0C', 'zt9fCQAAQBAJ', '3yfwAAAAMAAJ'];

    return { wrapper, store };
  }

  // it('FetchFavoriteBooks store action', async () => {
  //   const { store, wrapper } = factory({ stubActions: false });
  //   // await store.fetchFavoriteBooks();
  //   await flushPromises();

  //   // Calls fetchBookById 3 times
  //   expect(wrapper.html()).toMatchSnapshot();
  //   expect(store.fetchBookById).toHaveBeenCalledTimes(3);
  // });

  it('BeforeMount calls FetchFavoriteBooks action', async () => {
    const { store, wrapper } = factory({ stubActions: false });

    
  });
});