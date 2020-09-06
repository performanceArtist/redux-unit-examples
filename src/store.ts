import { createStore } from 'redux';

import { todoReducer } from './unit';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __PRELOADED_STATE__: any;
  }
}

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(todoReducer, devTools);

export default store;
