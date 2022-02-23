import { mount } from '@vue/test-utils';
import { createTestingPinia, TestingOptions } from '@pinia/testing';
import useBookStore from '@/stores/book';
import favoritesData from '@/mocks/books-by-id.json';
import BookDetailView from '@/views/BookDetailView.vue';

const fakeSelectedId = 'VvJZ3lp2sg0C';

// jest.mock('vue-router', () => ({
//   useRoute: jest.fn(() => ({ name: 'BookDetail', params: { id: 'VvJZ3lp2sg0C' } }))
// }));

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: favoritesData
      .find(book => book.id === fakeSelectedId)
    })),
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
      },
      mocks: { $route: { params: { id: fakeSelectedId } } }
    });

    const store = useBookStore();

    return { wrapper, store };
  }

  it('Read fakeSelectedId bookId great', async () => {
    const { store, wrapper } = factory({ stubActions: false });
    // console.log(wrapper.vm.$route.params.id);
    expect(wrapper.vm.$route.name).toBe('BookDetail');
  });
})