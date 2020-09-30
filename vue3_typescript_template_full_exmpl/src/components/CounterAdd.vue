<template>
  <div>
    <button @click="addVuexHandler(5)">Add 5</button>
    <button @click="subtractVuexHandler(5)">Subtract 5</button>
    <button @click="respAddVuexHandler">Async add random</button>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapActions } from "vuex";
export default {
  name: "CounterAdd",
  methods: {
//* ovako lakse i jednostavije pozivamo mutacije i akcije, samo ih definisemo unutar arg niza, a payload vrednosti unesemo kao argse tamo gde ih pozivamo (vidi gore)
    ...mapMutations(['addVuexHandler', 'subtractVuexHandler']),
    ...mapActions(['respAddVuexHandler'])
  },
};
</script>
