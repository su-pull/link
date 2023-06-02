<template>
  <footer class="footer_main">
    <span class="footer_text">{{ year }} © S.watanabe. license MIT</span>
    <a class="rss" href="https://link.su-pull.net/rss.xml">RSS</a>
  </footer>
</template>

<script setup lang="ts">
  const time = new Date()
  const year = time.getFullYear()
</script>

<style scoped lang="scss">
  .footer_main {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
    white-space: nowrap;
  }
  .footer_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (max-width: 739.98px) {
    .footer_main {
      left: 10px;
      height: 40px;
    }
    .rss {
      position: absolute;
      right: 10px;
    }
  }
</style>
