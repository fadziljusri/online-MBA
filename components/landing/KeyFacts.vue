<template>
  <div class="grid gap-4">
    <div v-for="(item, index) in datasets" :key="index" class="flex items-start w-full">
      <div class="circle-icon">
        <img :src="require(`~/assets/img/key-facts/${item.img}`)" />
      </div>
      <div class="flex flex-col ml-4">
        <div class="font-medium">{{ item.text }}</div>
        <div class="text-sm leading-relaxed tracking-wide text-gray-700" v-html="item.label"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingKeyFacts',
  props: {
    datasets: {
      type: Array,
      default: () => {
        const sampleIcons = ['monitor.svg', 'institution.svg']
        const samples = new Array(7).fill().map((e, index) => ({
          text: 'Text',
          label: 'Label',
          img: sampleIcons[index % 2],
        }))

        return samples
      },
    },
  },
}
</script>

<style scoped>
.circle-icon {
  width: 60px; /* Adjust this value to set the square size */
  height: 60px; /* Same as width to make it square */
  overflow: hidden; /* Ensure content doesn't overflow */
  position: relative; /* Needed for absolute positioning */
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
  padding: 1rem;
  border-radius: 50%;
}
.circle-icon img {
  width: 100%; /* Ensures the image fills the square container */
  height: 100%; /* Ensures the image fills the square container */
  object-fit: contain; /* Scale the image while maintaining aspect ratio */
}
</style>