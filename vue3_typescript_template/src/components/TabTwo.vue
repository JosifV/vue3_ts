<template>
  <div>
    <h4>TAB TWO</h4>
    <h5>This is just TAB TWO</h5>
    <AsyncComponent/>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

//* lazy loading sa opcijama da se prikaze spinner komponenta dok se zeljena komponenta ucitava, i da se prikaze error komponenta ako ucitavanje nije uspelo
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./lazyCompDeepDive/Comp.vue'), //* komponenta koju ucitavamo
  delay: 2000,
  timeout: 3000,
  loadingComponent: defineAsyncComponent(()=> import('./lazyCompDeepDive/Loading.vue')), //* loading komponenta / spinner
  errorComponent: defineAsyncComponent(()=> import('./lazyCompDeepDive/Error.vue')) //* error komponenta
})

export default {
  name: "TabTwo",
  components:{
    AsyncComponent
  }
};
</script>

