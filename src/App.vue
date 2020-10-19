<template>
  <div id="app">
    <alert
      v-model="notify.show"
      :alertType="notify.type"
      :message="notify.message"
    />
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
