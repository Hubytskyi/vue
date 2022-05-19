import axios from 'axios';
import { useToast } from "vue-toastification";
import router from '../router';

const API_URL = 'http://localhost:9000/api/users';

const toast = useToast();

export const authModule = {
  state: () => ({
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }),
  getters: {

  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool
    },
    setSuccess(state, bool) {
      this.setUser();
      state.isSuccess = bool;
      toast.success('You have successfully registered');
      router.push('/')
    },
    setError(state, bool) {
      state.isError = bool;
    },
    setMessage(state, msg) {
      state.message = msg;
      this.setError(true)
      toast.error(`Something went wrong. Please, try again.`);
    },
    setUser(state) {
      state.user = JSON.parse(localStorage.getItem('user')) || null;
    }
  },
  actions: {
    async userRegistration({state, commit}, userDara) {
      try {
        commit('setLoading', true);
        const response = await axios.post(API_URL, userDara)

        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        commit('setSuccess', true);

        return response;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        commit('setMessage', message);
      } finally {
        commit('setLoading', false);
      }
    },
    async userLogin({state, commit}, userDara) {
      try {
        commit('setLoading', true);
        const response = await axios.post(`${API_URL}/login`, userDara)
        console.log(response);
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        commit('setSuccess', true);

        return response;
      } catch (e) {
        commit('setLoading', false);
        console.error('ERROR: ', e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
}