<template>
  <Main>
    <Head>
      <Title>Posts</Title>
      <Meta name="description" content="My posts" />
    </Head>
    <h1>Posts</h1>
    <ContentList v-slot="{ list }">
      <article v-for="page in list.slice().reverse()" :key="page._path">
        <NuxtLink :to="page._path">
          <h2>{{ page.title }}</h2>
        </NuxtLink>
      </article>
    </ContentList>
  </Main>
</template>
