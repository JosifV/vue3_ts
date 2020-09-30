<template>
  <div>
    <h4>TAB ONE</h4>
    <CounterResult />
    <CounterAdd />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import CounterAdd from "./CounterAdd.vue";

//* primer lazy loadinga komponente 
// import CounterResult from "./CounterResult.vue"; //* umesto ovoga
const CounterResult = defineAsyncComponent(()=> import('./CounterResult.vue')) //* moze ici ovo //// , props:{'someProp':'qwerty'}

export default {
  name: "TabOne",
  components: {
    CounterResult, //* i naravno navedes ga kao komponentu
    CounterAdd,
  },
};
</script>

