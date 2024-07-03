<template>
  <li class="space-y-2">
    <div class="flex items-start space-x-2">
      <CheckCircleIcon :size="20" class="text-[#0c66ee] mt-1" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'LandingListItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
