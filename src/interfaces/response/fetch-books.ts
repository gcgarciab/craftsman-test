import Book from '../book';

export default interface FetchBooksResponse {
  items: Book[];
  kind: string;
  totalItems: number;
}
