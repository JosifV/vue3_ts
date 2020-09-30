<template>
  <div>
    <h4>TAB PROP</h4>
    <h5>VAL >>> {{$route.params.val}}</h5>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabProp",
  mounted(){
      let that: any = this //* mora ovako zbog typeScripta
      console.log(that.$route); //* log celog objekta - korisno
      console.log(that.$route.params.val);
  }
};
</script>

