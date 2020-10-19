<template>
  <div
    v-if="showAlert"
    :class="[alertType == 'success' ? 'bg-green-500' : 'bg-red-700']"
    class="alert fixed w-full top-0 text-white px-2 text-center py-4"
  >
    {{ message }}
  </div>
</template>
<script>
export default {
  model: {
    prop: "showAlert",
    event: "displayAlert",
  },
  props: {
    alertType: {
      type: String,
    },
    message: {
      type: String,
    },
    showAlert: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      timeoutId: null,
    };
  },
  methods: {
    close() {
      this.$emit("displayAlert", false);
    },
  },
  updated() {
    if (this.showAlert) {
      clearTimeout(this.timeoutId); //clear any existing timeout
      this.timeoutId = setTimeout(() => {
        this.close();
      }, 3000);
    }
  },
};
</script>
<style>
.alert {
  font-size: 18px;
  z-index: 100;
}
</style>
