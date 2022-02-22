import BookSaleInfo from './book-sale-info';
import BookAccessInfo from './book-access-info';
import BookSearchInfo from './book-search-info';
import BookVolumeInfo from './book-volume-info';

export default interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Partial<BookVolumeInfo>;
  saleInfo: Partial<BookSaleInfo>;
  accessInfo: Partial<BookAccessInfo>;
  searchInfo: BookSearchInfo;
}
