<template>
  <div>
    <button v-on:click='onClick'>CLICK {{cnt}}</button>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    data() {
      return {
        cnt: 0,
      }
    },
    methods: {
      onClick() {
        this.cnt++;
      }
    }
  })
</script>