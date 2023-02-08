<template>
  <header class="page-header">
    <h1>
      <a href="/">
        <img :src="require('@/assets/images/h1.svg')" alt="home" />
      </a>
    </h1>

    <nav>
      <ul class="gnb">
        <li><a href="#">About</a></li>
        <li><a href="#">Learn Sass</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Issues</a></li>
        <li><a href="#">Install</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: 'hello',
    }
  },
}
</script>
