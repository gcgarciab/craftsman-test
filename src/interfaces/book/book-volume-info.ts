import BookImage from './book-image';
import BookIdentifier from './book-identifier';
import BookReadingMode from './book-reading-mode';
import BookPanelizationSummary from './book-panelization-summary';
import BookDimension from './book-dimension';

export default interface BookVolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating?: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description?: string;
  dimensions?: Partial<BookDimension>;
  id?: string;
  imageLinks: Partial<BookImage>;
  industryIdentifiers: BookIdentifier[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary?: BookPanelizationSummary;
  previewLink: string;
  printType: string;
  printedPageCount?: number;
  publishedDate: string;
  publisher: string;
  ratingsCount?: number;
  readingModes: BookReadingMode;
  subtitle?: string;
  title: string;
}
