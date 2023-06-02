<template>
  <Main>
    <ContentList v-slot="{ list }">
      <article v-for="page in list" :key="page._path">
        <NuxtLink :to="page._path">
          <h2>{{ page.title }}</h2>
        </NuxtLink>
      </article>
    </ContentList>
  </Main>
</template>
