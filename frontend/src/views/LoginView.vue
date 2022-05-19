<template>
  <div class="login">
    <h1>This is a Login page</h1>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/login/LoginForm.vue';

export default {
  name: "LoginView",
  components: {
    LoginForm,
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
