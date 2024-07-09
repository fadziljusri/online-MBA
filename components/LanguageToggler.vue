<template>
  <label
    for="language"
    class="inline-flex items-center p-1 cursor-pointer bg-[#468ef9] text-black rounded-lg"
    @click.prevent.stop="toggleLanguage"
  >
    <input id="language" v-model="language" type="checkbox" class="hidden peer" />
    <span
      class="min-w-[35px] text-center rounded-lg text-sm px-2 py-1 bg-white peer-checked:bg-[#468ef9] peer-checked:text-white"
      >EN</span
    >
    <span
      class="min-w-[35px] text-center rounded-lg text-sm px-2 py-1 bg-[#468ef9] text-white peer-checked:bg-white peer-checked:text-black"
      >BM</span
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      language: this.$i18n.locale === 'ms', // true - bm, false en,
    }
  },
  watch: {
    '$i18n.locale'(newVal) {
      this.language = newVal === 'ms'
    },
  },
  methods: {
    toggleLanguage() {
      this.language = !this.language
      this.$i18n.setLocale(this.language ? 'ms' : 'en')
    },
  },
}
</script>
