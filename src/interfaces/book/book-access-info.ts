import BookFormat from './book-format';

export default interface BookAccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: BookFormat;
  pdf: BookFormat;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}
