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
  // const showMenu = useState('open', () => false)
  const showMenu = ref(false)
  function toggleMenu() {
    showMenu.value = !showMenu.value
  }
</script>

<template>
  <div>
    <div class="Line">
      <button
        class="button_open"
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
            <NuxtLink
              :to="{ path: article.href }"
              class="link_container"
              @click="showMenu = false"
            >
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
      border: none;
      border-radius: 12%;
      outline: none;
      transition-duration: 0.5s;
    }

    .Line {
      position: fixed;
      top: 12px;
      right: 16px;
      z-index: 4;
      display: inline-block;
      cursor: pointer;
    }
    .Line [aria-expanded='true'] {
      transform: rotate(-90deg);
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
    }

    .menu_list {
      position: fixed;
      top: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      margin: auto;
      background: rgba(255, 135, 153, 0.3);
      border: solid 2px var(--color-text);
      border-radius: 6px;
      transition-duration: 0.2s;
      backdrop-filter: blur(5px);
    }

    .menu_list a {
      display: block;
      height: 58px;
      padding: 14px 28px;
      font-size: 16px;
    }

    .menu_list li {
      position: relative;
      top: 55%;
      left: 10%;
      width: 80%;
      margin: 8px 0;
      text-align: left;
      list-style: none;
      background: rgb(255, 200, 200);
      border-radius: 8px;
    }
  }
</style>
