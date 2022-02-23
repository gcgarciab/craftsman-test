import Book from '../book';

export default interface BookState {
  books: Book[],
  favorites: string[],
  totalItems: number,
  currentPage: number,
  currentSearch: string,
  itemsPerPage: number,
}
