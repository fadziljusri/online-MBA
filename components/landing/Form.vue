<template>
  <section class="mt-8 md:mt-0">
    <form class="space-y-6" action="https://formspree.io/f/fadziljusri@gmail.com" method="post">
      <BaseInput v-model="form.email" title="Email" name="email" type="email" required />
      <BaseInput v-model="form.fullname" title="Full Name" name="fullname" required />
      <BaseInput v-model="form.tel" title="Phone Number" name="tel" type="tel" required />
      <BaseButton
        type="submit"
        :disabled="disabled"
        class="w-full px-5 py-4 text-base font-medium text-white bg-blue-gradient"
        :class="{ 'opacity-50': disabled }"
      >
        Submit
      </BaseButton>
    </form>
  </section>
</template>

<script>
export default {
  name: 'LandingForm',
  data() {
    return {
      form: {
        tel: '',
        email: '',
        fullname: '',
      },
    }
  },
  computed: {
    disabled() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const phonePattern = /^\+?(\d{1,3})?[-. (]?\d{1,4}[-. )]?\d{1,4}[-. ]?\d{1,9}[-. ]?\d{1,9}$/
      return !emailPattern.test(this.form.email) || !phonePattern.test(this.form.tel) || this.form.fullname?.length < 6
    },
  },
}
</script>

<style>
</style>