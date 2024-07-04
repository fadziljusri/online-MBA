<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid grid-cols-1">
        <div class="w-full flex flex-col items-center py-6 space-y-4 sm:py-12 sm:border-r-0 border-[#DDDDDD]">
          <a v-smooth-scroll href="#top">
            <img :src="require('~/assets/img/logo/logo.svg')" class="w-30" alt="Logo" />
          </a>
          <ul class="flex space-x-4">
            <NavLink name="Facebook" url="#" />
            <NavLink name="LinkedIn" url="#" />
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2024 Faizal Jusri. <br class="md:hidden"> All rights reserved
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
