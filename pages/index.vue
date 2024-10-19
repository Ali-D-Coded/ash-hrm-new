<script>
import { ref } from 'vue';
import {Dayjs} from "dayjs"
const value1 = ref();

</script>

<style></style>

<template>
  <div>
    <h1 class="text-lg">Index page</h1>
    <a-date-picker v-model:value="value1" />
  </div>
</template>
