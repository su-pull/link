<script setup lang="ts">
  const articles = ref<{ href: string; title: string }[]>([])
  articles.value = [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '/about',
      title: 'About'
    },
    {
      href: '/resume',
      title: 'Resume'
    }
  ]
</script>

<template>
  <header class="header__main">
    <nav class="header__nav">
      <ul class="header__ul">
        <li v-for="article in articles" :key="article.href">
          <NuxtLink :to="{ path: article.href }" class="link_container">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  li {
    padding: 20px;
    list-style: none;
  }
  .header__main {
    position: absolute;
    width: 100%;
    height: 74px;
  }

  .header__nav {
    position: relative;
    left: -128px;
    z-index: 1;
    width: fit-content;
  }
  .header__ul {
    display: flex;
    padding: 20;
  }
  .link_container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 42px;
    padding: 12px 24px 16px;
    font-size: 14px;
    white-space: nowrap;
  }
</style>
