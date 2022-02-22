import BookOffer from './book-offer';
import BookPrice from './book-price';
import BookSaleability from '../../enums/book-saleability';

export default interface BookSaleInfo {
  buyLink: string;
  country: string;
  isEbook: boolean;
  listPrice: BookPrice;
  offers: BookOffer[];
  retailPrice: BookPrice;
  saleability: BookSaleability;
}
