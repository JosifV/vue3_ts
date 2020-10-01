<template>
  <div>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <h3>Computed from inputs: {{ calcUserNameLocal }}</h3>
      <h3>State of vuex: {{counter}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import {useStore} from "vuex";

export default {
  props: ["firstName", "lastName"],
  //* 6 setup prima arg props, u kome se nalaze svi propsi preneti ovoj komponenti u vidu Proxy reactive objekta
  setup(props: any) {
    const calcUserNameLocal = computed(() => `${props.firstName} ${props.lastName}`);

    //* 10 uvek pocnes sa useStore()
    const store = useStore()
    //* 10 ovako dobavljas gettere, preko computed
    const counter = computed(()=> store.getters.counterGetter)

    return {
      calcUserNameLocal,
      counter
    };

  },
};
</script>

