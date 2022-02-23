import { mount, shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { createTestingPinia, TestingOptions } from '@pinia/testing';
import useBookStore from '@/stores/book';
import data from '@/mocks/books-by-id.json';
import FavoritesView from '@/views/FavoritesView.vue';
import findById from '@/utils/find-by-id';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn((id: string) => Promise.resolve({ data: findById(data, id) })),
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

  it('Call fetchFavoriteBooks store action', async () => {
    const { store, wrapper } = factory({ stubActions: false });

    await flushPromises();
    await flushPromises();
    await flushPromises();
    
    // Await beforemount calls
    expect(store.fetchFavoriteBooks).toBeCalled();
    expect(wrapper.html()).toMatchSnapshot();
  });
});