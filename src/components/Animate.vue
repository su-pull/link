<template>
  <div v-motion-slide-bottom class="container"><slot /></div>
</template>

<style scoped lang="scss">
  .container {
    padding: 120px 0;
    text-align: left;

    ul {
      margin: 0 16px;
    }

    li {
      margin: 8px 14px;
      word-break: keep-all;
      list-style-type: disc;
    }
  }
</style>
