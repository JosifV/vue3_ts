<template>
  <div>
    <h1 v-if="showTitle">Mixin Title D</h1>
    <button @click="titleToggleHandler">Toggle Title D</button>
  </div>
</template>

<script lang="ts">
import mixin from '../mixins/showHide'

export default {
  mixins:[mixin]
};
</script>

