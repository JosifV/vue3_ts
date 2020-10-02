<template>
  <div>
    <h5 @click="hookHandler">
      {{ someLocalData }} - HOOKS {{ stringExtension }}
    </h5>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useExample } from "../hooks/someHook";

export default {
  setup() {
    //* 12 sa hooks mozes i lokalne stavke da imas
    const someLocalData = ref("CLicK");

    return {
      someLocalData,
      //* 12 i samo dodelis return vrednost hook funkcije
      //* 12 hooks mogu primati i argse - kao i sve druge funkcije
      ...useExample('plural_mode'),
    };
  },
};
</script>

