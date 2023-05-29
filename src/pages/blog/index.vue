<template>
  <ContentList v-slot="{ list }">
    <article v-for="page in list" :key="page._path">
      <nuxt-link :to="page._path">
        <h2>{{ page.title }}</h2>
      </nuxt-link>
    </article>
  </ContentList>
</template>
