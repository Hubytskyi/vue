<template>
  <form @submit.prevent="setFormValues" class="form">
    <div class="form-group">
      <label for="email">Email</label>
      <input
          id="email"
          :value="email"
          @input="event => email = event.target.value"
          placeholder="jhondoe@gmail.com"
          type="email"
          name="email"
          autocomplete="off"/>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
          id="password"
          :value="password"
          @input="event => password = event.target.value"
          placeholder="*********"
          type="password"/>
    </div>
    <button :disabled="this.isLoading">Sign In <span class="loadingSpinner" v-if="isLoading"></span></button>
  </form>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { useToast } from 'vue-toastification';
import router from '../../../router';

const toast = useToast();

export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions({
      userLogin: 'signup/userLogin',
    }),
    ...mapMutations({
      setUser: 'signup/setUser',
    }),
    setFormValues() {
      if (!this.email || !this.password) {
        return toast.error('Fill in all the fields');
      }

      const userData = {
        email: this.email,
        password: this.email,
      };

      this.userLogin(userData);
      this.resetForm();
    },
    resetForm() {
      this.email = '';
      this.password = '';
    },
  },
  computed: {
    ...mapState({
      user: state => state.signup.user,
      isSuccess: state => state.signup.isSuccess,
      isLoading: state => state.signup.isLoading,
    }),
  },
  mounted() {
    this.setUser();
    if (this.isSuccess || this.user) {
      router.push('/')
    }
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}
</style>
