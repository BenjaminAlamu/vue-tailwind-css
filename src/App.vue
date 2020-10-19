<template>
  <div id="app">
    <alert
      v-model="notify.show"
      :alertType="notify.type"
      :message="notify.message"
    />
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="inline-flex">
      <button
        @click.prevent="errorAlert"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Error
      </button>
      <button
        @click.prevent="successAlert"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Success
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HelloWorld: () => import("@/components/HelloWorld"),
    Alert: () => import("@/components/shared/alert"),
  },
  data: () => ({
    notify: {
      type: null,
      show: false,
      message: "",
    },
  }),
  mounted() {
    this.$Bus.$on("notify", (data) => {
      this.notify.show = true;
      this.notify.type = data.type;
      this.notify.message = data.message;
    });
  },
  methods: {
    errorAlert() {
      this.$Bus.$emit("notify", {
        type: "error",
        message: "This is an error message",
      });
    },
    successAlert() {
      this.$Bus.$emit("notify", {
        type: "success",
        message: "This is a success message",
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
