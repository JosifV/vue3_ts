<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ objNum }}</h3>
    <button @click="nameChangeHandler" @mouseover="emitWarningHandler">
      Change name
    </button>
    <h3>Provide & Inject result >>> {{injectedVal}}</h3>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
export default {
  props: ["userName", "objNum", "nameChangeHandler"],
  //* 7 drugi arg koji setup metod ima jeste context
  setup(_: any, context: any) {
    //* 7 context kad se loguje izgleda kao prazan objekat, no ima 3 elementa
    //* 7 attrs: to su atributi koji su preneti na ovu komponentu, no ne kao props, vec kao html atributi, npr ovde cemo naci ime css klase koju smo dodeli komponenti u App.vue - class: "aComp"
    //* 7 slots: sluzi da programaticki pristupis podacima slot komponente
    //* 7 emit: i najbitnije, emmit sluzi da emitujes eventove iz ove komponente
    // console.log(context);

    //* 7 i onda samo posaljes event iz komponente
    const emitWarningHandler = () => context.emit('mouseOver', 123)

    //* 8 i primis injected vrednost navodeci njeno dodeljeno ime kao arg inject funkcije
    let injectedVal = inject('providedValueName')
    //* 8 preporuka je da ne menjas injected value tamo gde primas tu vrednost, nego tamo gde je provide-ujes, npr ovo ce mozda raditi a mozda i nece
    // injectedVal = 'qwerty'

    return {
      emitWarningHandler,
      injectedVal
    };
  },
};
</script>

