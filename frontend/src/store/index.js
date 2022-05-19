import {createStore} from 'vuex';
import {authModule} from './authModule';

export default createStore({
  modules: {
    signup: authModule,
  }
})