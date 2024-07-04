<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800" :class="{ 'sticky top-0 bg-white shadow': sticky }">
    <div class="flex items-center justify-end px-8 py-1 text-white bg-blue-gradient lg:hidden">
      <img :src="require('~/assets/img/icons/phone.svg')" class="w-4 h-4 mr-1 bg-white rounded" />
      <div>Call for details <a href="tel:" class="text-white underline">+6019-379 2803</a></div>
    </div>
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:py-4 lg:items-center lg:justify-between lg:flex-row">
      <div class="flex flex-col items-center space-x-4 lg:flex-row xl:space-x-8">
        <div class="flex flex-row items-center justify-between w-full py-6">
          <a v-smooth-scroll href="#top">
            <!-- Logo: -->
            <img :src="require('~/assets/img/logo/logo.svg')" class="w-24 xl:w-28" alt="Logo" />
          </a>
          <button
            class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            @click.prevent.stop="openToggler()"
          >
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="flex flex-col flex-grow w-full h-auto pb-4 space-y-3 duration-300 origin-top lg:items-center lg:pb-0 lg:justify-end lg:flex-row xl:space-x-2 lg:space-y-0"
        >
          <NavLink name="Course Overview" url="#course-overview" @click="open = false" />
          <NavLink name="Key Facts" url="#key-facts" @click="open = false" />
          <NavLink name="Course Structure" url="#course-structure" @click="open = false" />
          <NavLink name="Requirements" url="#entry-requirements" @click="open = false" />
          <NavLink name="Intakes" url="#intake-dates" @click="open = false" />
          <NavLink name="Lecturer" url="#lecturer" @click="open = false" />
          <!-- <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler"
              @blur="dropdownToggler"
            >
              <span>Products</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex flex-col py-1 pl-2 rounded-md lg:absolute max-w-42 lg:bg-white lg:shadow-md lg:pl-0"
              >
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Exchange</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wallet</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Explorer</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Charts</a>
                </li>
              </ul>
            </transition>
          </li> -->
        </ul>
      </div>
      <div class="hidden space-x-3 lg:flex">
        <!-- <BaseButton class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          Login
        </BaseButton> -->
        <BaseButton
          class="flex items-center px-8 xl:px-10 py-3 mt-2 mb-4 md:mt-0 lg:mb-0 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white whitespace-nowrap"
          @click="openTel()"
        >
          <img :src="require('~/assets/img/icons/phone.svg')" class="w-8 h-8 mr-3 bg-white rounded-lg" />
          <div>
            <div>Call for details</div>
            <div class="font-bold">+6019-379 2803</div>
          </div>
        </BaseButton>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      openAtPosY: 0,
      dropdownNavbar: false,
      sticky: false,
      scrollThreshold: 110,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar
    },
    openToggler() {
      this.open = !this.open
      this.openAtPosY = this.open ? window.scrollY : 0
    },
    openTel() {
      window.location.href = 'tel:+60193792803'
    },
    handleScroll() {
      // Check scroll position
      if (window.scrollY >= this.scrollThreshold && !this.sticky) {
        this.sticky = true
        // this.open = false
      } else if (window.scrollY < 5 && this.sticky) {
        // Undo action when scrolled back to top
        this.sticky = false
        // this.open = false
      }
      // else if (this.openAtPosY && Math.abs(this.openAtPosY - window.scrollY) >= 10) {
      //   // this.open = false
      // }
    },
  },
}
</script>
