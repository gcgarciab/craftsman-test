/* eslint-disable vue/multi-word-component-names */
import { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBook,
  faExclamationTriangle,
  faHeart,
  faHome,
  faInfoCircle,
  faMoneyBillWave,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBook);
library.add(faHome);
library.add(faHeart);
library.add(faSearch);
library.add(faInfoCircle);
library.add(faMoneyBillWave);
library.add(faExclamationTriangle);

export default (app: App) => {
  app.component('fa', FontAwesomeIcon);
};
