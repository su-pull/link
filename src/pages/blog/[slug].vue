<template>
  <Main>
    <ContentDoc v-slot="{ doc }">
      <time>{{ doc.date }}</time>
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :key="doc.date" :value="doc" />
    </ContentDoc>
  </Main>
</template>
