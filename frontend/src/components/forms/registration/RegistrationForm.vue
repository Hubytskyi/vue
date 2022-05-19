<template>
  <form @submit.prevent="setFormValues" class="form">
    <div class="form-group">
      <label for="name">Name</label>
      <input
          id="name"
          :value="name"
          @input="event => name = event.target.value"
          placeholder="Jhon Doe"/>
    </div>
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
    <div class="form-group">
      <label for="password2">Repeat password</label>
      <input
          id="password2"
          :value="password2"
          @input="event => password2 = event.target.value"
          placeholder="*********"
          type="password"/>
    </div>
    <button :disabled="this.isLoading">Sign Up <span class="loadingSpinner" v-if="isLoading"></span></button>
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
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  },
  methods: {
    ...mapActions({
      userRegistration: 'signup/userRegistration',
    }),
    ...mapMutations({
      setUser: 'signup/setUser',
    }),
    async setFormValues() {
      if (!this.name || !this.email || !this.password) {
        return toast.error('Fill in all the fields');
      }

      if (this.password !== this.password2) {
        return toast.error('Passwords do not match');
      }

      const userData = {
        name: this.name,
        email: this.email,
        password: this.email,
        password2: this.email,
      };

      await this.userRegistration(userData);
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.password2 = '';
    },
  },
  computed: {
    ...mapState({
      user: state => state.signup.user,
      isSuccess: state => state.signup.isSuccess,
      isLoading: state => state.signup.isLoading,
      isError: state => state.signup.isError,
      message: state => state.signup.message,
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
