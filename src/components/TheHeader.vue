<template>
  <header>
    <RouterLink to="/">
      Home.
    </RouterLink>
    <RouterLink to="/about">
      About.
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>
