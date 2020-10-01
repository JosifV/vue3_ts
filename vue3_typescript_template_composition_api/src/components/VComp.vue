<template>
  <div>
    <input type="text" placeholder="Refered val" ref="refVal" />
    <button @click="referedValHandler">Log refered val</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    //* 5 ref je u pocetku nula
    const refVal = ref(null);

    //* 5 pristupi vrednosti ref dom elementa
    const referedValHandler = () => {
      //* 5 ovo je DOM inputa
      let refDomEl: any = refVal.value;
    //   console.dir(refDomEl);
      //* 5 ovo je vrednost tog dom elementa
      console.log(`REF DOM VAL >>> ${refDomEl.value}`);
    };
    return {
      refVal,
      referedValHandler,
    };
  },
};
</script>

