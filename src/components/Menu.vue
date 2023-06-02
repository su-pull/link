<script setup lang="ts">
  const articles = ref<{ href: string; title: string }[]>([])
  articles.value = [
    {
      href: '/',
      title: '🏡Home'
    },
    {
      href: '/link',
      title: '😆 Link'
    },
    {
      href: '/blog',
      title: '😁 Blog'
    },
    {
      href: '/resume',
      title: '😊 Resume'
    }
  ]

  const showMenu = ref(false)
  function toggleMenu() {
    showMenu.value = !showMenu.value
  }
</script>

<template>
  <div>
    <div class="Line">
      <button
        aria-label="Toggle mobile navigation menu"
        type="button"
        :aria-expanded="showMenu"
        @click="toggleMenu"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <div class="show_menu">
      <nav :aria-expanded="showMenu">
        <ul class="menu_list">
          <li v-for="article in articles" :key="article.href">
            <NuxtLink :to="{ path: article.href }" @click="showMenu = false">
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @media screen and (max-width: 739.98px) {
    .Line button {
      position: relative;
      z-index: 4;
      padding: 30px 12px 6px;
      background: rgb(253, 233, 233);
      border: none;
      border-radius: 12%;
      outline: none;
      transition-duration: 0.5s;
    }

    .Line {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 4;
      display: inline-block;
      cursor: pointer;
    }
    .Line [aria-expanded='true'] {
      transform: scale(1.2);
    }

    .Line span {
      position: relative;
      display: block;
      width: 18px;
      height: 2px;
      background: rgb(102, 102, 102);
      border-radius: 8px;
    }

    .Line span:nth-of-type(1) {
      bottom: 18px;
    }

    .Line span:nth-of-type(2) {
      bottom: 12px;
    }

    .Line span:nth-of-type(3) {
      bottom: 6px;
    }

    .Line [aria-expanded='true'] span:nth-of-type(1) {
      transition-duration: 0.1s;
      transform: rotate(45deg) translateY(5.5px) translateX(5.75px) scale(0.8);
    }

    .Line [aria-expanded='true'] span:nth-of-type(2) {
      opacity: 0;
      transition-duration: 0.25s;
    }

    .Line [aria-expanded='true'] span:nth-of-type(3) {
      transition-duration: 0.1s;
      transform: rotate(-45deg) translateY(-5.5px) translateX(5.75px) scale(0.8);
    }

    .Line [aria-expanded='false'] span:nth-of-type(1) {
      transition-duration: 0.1s;
    }

    .Line [aria-expanded='false'] span:nth-of-type(2) {
      transition-duration: 0.1s;
    }

    .Line [aria-expanded='false'] span:nth-of-type(3) {
      transition-duration: 0.1s;
    }

    .show_menu {
      display: block;
    }

    .show_menu [aria-expanded='true'] {
      visibility: visible;
    }

    .show_menu [aria-expanded='false'] {
      visibility: hidden;
      .menu_list {
        opacity: 0;
      }
      .menu_list li {
        opacity: 0;
        transform: translateY(-96px);
      }
    }
    .menu_list {
      position: fixed;
      top: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      text-align: center;
      background: rgba(220, 204, 204, 0.2);
      transition: 0.2s;
      backdrop-filter: blur(1px);
    }

    .menu_list li {
      position: relative;
      top: 96px;
      width: 64%;
      list-style: none;
      background: #fff;
      border-radius: 8px;
      transition: 0.2s;
    }

    .menu_list a {
      display: block;
      padding: 12px 28px;
      text-align: left;
    }
  }
</style>
