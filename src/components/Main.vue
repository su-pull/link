<template>
  <main class="container"><slot /></main>
</template>

<style scoped lang="scss">
  .container {
    padding: 120px 0;
    text-align: left;
  }
  ul {
    margin: 0 16px;
  }

  li {
    margin: 8px 14px;
    word-break: keep-all;
    list-style-type: disc;
  }
  @media screen and (max-width: 739.98px) {
    .container {
      padding: 120px 16px;
    }
  }
</style>
