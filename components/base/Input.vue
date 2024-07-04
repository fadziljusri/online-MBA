<template>
  <div class="flex items-center space-x-4">
    <div class="w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
      <input
        :id="lowercase(name)"
        v-model="model"
        :type="type"
        class="w-full text-sm font-medium text-left border-none ring-0 focus:outline-none focus:ring-0"
        :name="name"
        :placeholder="title"
        :required="required"
        @input="sanitizePhoneNumber"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingExchange',
  model: { prop: 'value', event: 'update' },
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('update', v)
      },
    },
  },
  methods: {
    lowercase(str) {
      return str.toLowerCase()
    },
    sanitizePhoneNumber(event) {
      if (this.type === 'tel') {
        this.model = event.target.value.replace(/[^\d+(). -]/g, '')
        this.$forceUpdate()
      }
    },
  },
}
</script>

<style scoped>
::placeholder {
  --tw-text-opacity: 0.5;
  color: rgb(12 102 238 / var(--tw-text-opacity));
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder {
  /* Edge 12 -18 */
  --tw-text-opacity: 1;
  color: rgb(12 102 238 / var(--tw-text-opacity));
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
