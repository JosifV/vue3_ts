<template>
  <div>
    <EComp />
    <h5>{{ someLocalData }}</h5>
    <h1 v-if="showTitle">Mixin Title G</h1>
    <button @click="titleToggleHandler">Toggle Title G</button>
  </div>
</template>

<script lang="ts">
import EComp from "./EComp.vue";
import mixin from "../mixins/showHide";

export default {
  //* 11 mixini mogu samo sa options API ?
  //* 11 ovako uvezes mixine
  mixins: [mixin],

  //* 11 lokalne opcije definises kao i uvek, vue ih na kraju spoji sa opcijama iz mixina
  data() {
    return {
      someLocalData: "someLocalData",
    };
  },

  //* 11 inace, komponente ne mogu biti registrovane u mixinima, vec moraju u samoj komponenti - ovako
  components: {
    EComp,
  },
};
</script>

