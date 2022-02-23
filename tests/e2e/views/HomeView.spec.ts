import { mount } from '@vue/test-utils';
import { createTestingPinia, TestingOptions } from '@pinia/testing';
import HomeView from '@/views/HomeView.vue';
import useBookStore from '@/stores/book';
import AppButton from '@/ui/AppButton.vue';
import AppInputField from '@/ui/AppInputField.vue';
import data from '@/mocks/books-search.json';
import BookCard from '@/components/BookCard.vue';
import flushPromises from 'flush-promises';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data })),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('HomeView', () => {
  let wrapper: any;
  let store: any;

  function factory(options?: TestingOptions) {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createTestingPinia(options)],
        mocks: {
          $router: { push: jest.fn() }
        }
      },
    });

    const store = useBookStore();

    return { store , wrapper };
  }

  beforeEach(async () => {
    const testfactory = factory({ stubActions: false });
    store = testfactory.store;
    wrapper = testfactory.wrapper;

    const searchInputContainer = wrapper.find('.search-input')
      .getComponent(AppInputField).find('[data-test="input-field"]');
    
    await searchInputContainer.setValue('soccer');
    await wrapper.find('form').trigger('submit.prevent');
    await flushPromises();
  });

  afterEach(() => wrapper.unmount());

  it('Call fetchBooks action from store, and render results', async () => {
    expect(store.books.length).toBe(10);
    expect(wrapper.html()).toMatchSnapshot();
    expect(store.fetchBooks).toHaveBeenCalledTimes(1);
  });

  it('Call toggleFavoriteBook action on fetched book card', async () => {
    expect(store.favorites.length).toBe(0);

    const firstBookCard = wrapper.findAllComponents(BookCard).at(0);
    const favoriteButton = firstBookCard?.findAllComponents(AppButton).at(1);
    await favoriteButton?.trigger('click');
    await flushPromises();

    expect(store.favorites.includes('b-hH4Ma4Hq0C'));
    expect(store.favorites.length).toBe(1);
    
    await favoriteButton?.trigger('click');
    await flushPromises();

    expect(store.favorites.length).toBe(0);
  });

  it('Call fetchBooks action from store, using "load more" button', async () => {
    const loadMoreButton = wrapper.find('.books-result').find('[data-test="load-more"]');

    await loadMoreButton.trigger('click');
    await flushPromises();

    expect(store.books.length).toBe(20);
    expect(store.fetchBooks).toHaveBeenCalledTimes(2);
  });
});