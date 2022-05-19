<template>
  <div class="registration">
    <h1>This is a Registration page</h1>
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from '@/components/forms/registration/RegistrationForm.vue';

export default {
  name: "RegistrationView",
  components: {
    RegistrationForm
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .registration {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
