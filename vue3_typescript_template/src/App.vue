<template>
  <div id="app">
    <div class="navCont">
      <router-link to="/one"> <span>ONE</span></router-link>
      <router-link to="/two"><span>TWO</span></router-link>
      <router-link :to="`/prop/${counterGetter}`"
        ><span>PROP {{ counterGetter }}</span></router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapGetters(["counterGetter"]),
  },
};
</script>

<style>
@import "./style/App.scss";
</style>
