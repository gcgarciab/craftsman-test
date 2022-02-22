import BookPrice from './book-price';

export default interface BookOffer {
  finskyOfferType: number;
  listPrice: BookPrice;
  retailPrice: BookPrice;
}
