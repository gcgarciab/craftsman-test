import { mount } from '@vue/test-utils';
import { createTestingPinia, TestingOptions } from '@pinia/testing';
import flushPromises from 'flush-promises';
import useBookStore from '@/stores/book';
import findById from '@/utils/find-by-id';
import favoritesData from '@/mocks/books-by-id.json';
import BookDetailView from '@/views/BookDetailView.vue';

const fakeSelectedId = 'VvJZ3lp2sg0C';

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({ name: 'BookDetail', params: { id: 'VvJZ3lp2sg0C' } })),
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: findById(favoritesData, fakeSelectedId) })),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('BookDetailView', () => {
  function factory(options?: TestingOptions) {
    const wrapper = mount(BookDetailView, {
      global: {
        plugins: [
          createTestingPinia(options),
        ],
        mocks: { $route: { 
          name: 'BookDetail',
          params: { id: fakeSelectedId } } }
      },
    });

    const store = useBookStore();

    return { wrapper, store };
  }

  it('Read fakeSelectedId bookId great', async () => {
    const { store, wrapper } = factory({ stubActions: false });

    expect(wrapper.vm.$route.name).toBe('BookDetail');
    expect(wrapper.vm.$route.params.id).toBe('VvJZ3lp2sg0C');
  });

  it('Call fetchBookById action from store', async () => {
    const { store, wrapper } = factory({ stubActions: false });

    await flushPromises();

    expect(store.fetchBookById).toBeCalled();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Call toggleFavoriteBook action from store', async () => {
    const { store, wrapper } = factory({ stubActions: false });

    await flushPromises();

    const favoriteButton = wrapper.find('[data-test="add-to-favorites"]');
    await favoriteButton.trigger('click');

    expect(store.favorites.length).toBe(1);

    await favoriteButton.trigger('click');
    expect(store.favorites.length).toBe(0);
  });

  it('Call goToLink method on preview and info buttons', async () => {
    window.open = jest.fn();
    const { store, wrapper } = factory({ stubActions: false });

    await flushPromises();

    const previewButton = wrapper.find('[data-test="preview-link"]');
    console.log(previewButton);
    await previewButton.trigger('click');
    expect(window.open).toBeCalledTimes(1);
    
    const infoButton = wrapper.find('[data-test="info-link"]');
    await infoButton.trigger('click');
    expect(window.open).toBeCalledTimes(2);
  });
})