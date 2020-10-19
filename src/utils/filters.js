import Vue from "vue";

Vue.filter("removeDash", (value) => {
  return value.replace("_", " ");
});
