<template>
  <div>
    <h4>{{ counterGetter }}</h4>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  name: "CounterResult",
  computed: {
    ...mapGetters(["counterGetter"]), //* ovako lakse i jednostavije pozivamo gettere, samo ih definisemo unutar arg niza
  },
};
</script>

