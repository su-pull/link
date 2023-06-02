<template>
  <Main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title.slice(2, 12) }}...</h1>
      <ContentRenderer :key="doc.date" :value="doc" />
    </ContentDoc>
  </Main>
</template>
