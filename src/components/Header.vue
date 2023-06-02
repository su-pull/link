<script setup lang="ts">
  const headers = ref<{ href: string; title: string }[]>([])
  headers.value = [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '/link',
      title: 'Link'
    },
    {
      href: '/blog',
      title: 'Blog'
    },
    {
      href: '/resume',
      title: 'Resume'
    }
  ]
  const pathname = useRoute()
  const isCurrentActive = (href: string, currentPath: string) => {
    if (href === '/') {
      return href === currentPath
    }
    return currentPath.match(href)
  }
</script>

<template>
  <header class="header__main">
    <Menu />
    <nav class="header__nav">
      <ul class="header__ul">
        <li v-for="header in headers" :key="header.href">
          <NuxtLink
            :to="{ path: header.href }"
            class="link_container"
            :class="{ active: isCurrentActive(header.href, pathname.path) }"
          >
            {{ header.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .active {
    color: rgb(213, 177, 177);
    background: rgb(253, 233, 233);
  }

  li {
    list-style: none;
  }
  .header__main {
    position: absolute;
    width: 100%;
    height: 64px;
  }

  .header__nav {
    position: relative;
    left: -128px;
    z-index: 1;
    width: fit-content;
  }
  .header__ul {
    display: flex;
    column-gap: 16px;
  }

  .link_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    padding: 12px;
    white-space: nowrap;
    border-radius: 16px;
    transition-duration: 0.4s;
  }
</style>
