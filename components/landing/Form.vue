<template>
  <section class="mt-8 md:mt-0">
    <form class="space-y-6" action="https://formspree.io/f/fadziljusri@gmail.com" method="post">
      <BaseInput v-model="form.email" title="Email" name="email" type="email" required />
      <BaseInput v-model="form.fullname" title="Full Name" name="fullname" required />
      <BaseButton
        type="submit"
        disabled
        class="w-full px-5 py-4 text-base font-medium text-white opacity-50 bg-blue-gradient"
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
        email: '',
        fullname: '',
      },
    }
  },
}
</script>

<style>
</style>