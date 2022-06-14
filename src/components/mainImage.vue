<template>
  <Item
      v-for="n in todos"
      :key="n.id"
      :todos="n"
      :handleCheckSingle="handleCheckSingle"
  />
</template>