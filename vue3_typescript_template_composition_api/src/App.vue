<template>
  <div id="app">
    <AComp
      class="aComp"
      :userName="userName"
      :objNum="obj.num"
      :nameChangeHandler="nameChangeHandler"
    />
    <br />
    <BComp :firstName="firstName" :lastName="lastName" />
    <br />
    <VComp />
    <button @click="addStoreHandler">Add to store counter</button>
    <br>
    <GComp/>
    <DComp/>
  </div>
</template>

<script lang="ts">
import AComp from "./components/AComp.vue";
import BComp from "./components/BComp.vue";
import VComp from "./components/VComp.vue";
import GComp from "./components/GComp.vue";
import DComp from "./components/DComp.vue";

import {
  ref,
  reactive,
  computed,
  watch,
  provide,
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated, 
  // onBeforeUnmount, 
  // onUnmounted
} from "vue";
import {  useStore } from "vuex";
//* 1 - varijable
//* 2 - metodi
//* 3 - computed
//* 4 - watch
//* 5 - ref dom elements / unutar VComp.vue
//* 6 - setup props args / unutar BComp.vue
//* 7 - setup context args / EVENTOVI / unutar AComp.vue
//* 8 - provide & inject / App.vue i AComp.vue
//* 9 - lifecycle hooks
//* 10 - vuex & composition API / unutar App.vue i BComp.vue
//* 11 - mixins - option API / unutar mixins/showHide.ts i GComp.vue
//* 12 - hooks - composition API / unutar hooks/someHook.ts i EComp.vue

export default {
  props: [], //* 1 props i komponente ostaju ovde, van setup metoda
  components: {
    AComp,
    BComp,
    VComp,
    GComp,
    DComp
  },
  setup() {
    //* 1 ref() je dobar za obicne vrednosti
    const userName = ref("abv");
    //* 1 reactive() je najbolji za objekte
    const obj = reactive({
      num: 33,
    });
    const firstName = ref("");
    const lastName = ref("");

    setTimeout(() => {
      //* 1 ovako se menja vrednost ref varijable - sa refVar.value
      userName.value = "ABV";
      //* 1 posto je obj na reactive() njegova vrednost se menja bez .value - tj kao obicnom objektu
      obj.num = 100;
    }, 1000);

    //* 2 definisanje metoda - kao obicna funkcija dodeljena varijabli
    const nameChangeHandler = () => (userName.value = `Josif Vacic`);

    //* 3 definisanje computed varijable
    const calcUserName = computed(() => `${firstName.value} ${lastName.value}`);
    //* 3 dalje u kodu, computed varijablu mozes samo citati, no ne i prepravljati, npr ovo dole nece raditi:
    // calcUserName.value = 'AAA'
    //* 3 dok ce ovo raditi
    // console.log(calcUserName);

    //* 4 watcher se vrlo intuitivno postavlja, prvi arg je varijabla na koju pazimo, drugi je callback funkcija koja se izvrsi kad se ta varijabla promeni
    watch(userName, (newValue, oldValue) => {
      //* 4 i u argsima imamo pristup staroj i novoj vrednosti gledane varijable
      console.log(
        `USERNAME CHANGED FROM ${oldValue} TO ${newValue} >>> DO SOMETHING`
      );
    });

    //* 7 primanje eventa ::: cekam na odgovor pa cu dodati
    // context.on('mouseOver', (payload:number)=>console.log(`WARNING >>> Mouse over the button num ::: ${payload}`))

    //* 8 u setupu navedes provide, i u argsima definises ime vrednosti, i samu vrednost
    const someProvideVal = ref("someProvidedValue");
    provide("providedValueName", someProvideVal);

    //* 9 beforeCreated & created hooks su isto sto i setup(), tako da ih nema u composition API
    // console.log("before created")
    // console.log("created")

    //* 9 beforeMounted & mounted hooks
    // onBeforeMount(() => console.log("before mounted"));
    // onMounted(() => console.log("mounted"));

    //* 9 beforeUpdated & updated hooks
    // onBeforeUpdate(() => console.log("before updated"));
    // onUpdated(() => console.log("updated"));

    //* 9 beforeUnmounted & unmounted hooks
    // onBeforeUnmount(()=>console.log("before unmounted"))
    // onUnmounted(()=>console.log("unmounted"))

    //* 10 uvek pocnes sa useStore()
    const store = useStore()
    //* 10 ovako pokreces akcije
    const addStoreHandler = () => store.dispatch('respAddVuexHandler')

    //* obavezan return svega sto si definisao i sto koristis u template-u
    return {
      userName,
      obj,
      nameChangeHandler,
      firstName,
      lastName,
      calcUserName,
      addStoreHandler
    };
  },
};
</script>

<style>
@import "./style/App.scss";
</style>