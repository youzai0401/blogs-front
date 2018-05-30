<template>
  <section class="container">
    <div>
      <!--<app-logo/>-->
      <!--<testq/>-->
      <h1 class="title">
        nuxt-blog-node
      </h1>
      <h2 class="subtitle">
        blog-ssr
        blog-ssr
        blog-ssr
        blog-ssr
        blog-ssr
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      {{name}}
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import testq from '~/components/testq.vue'


export default {
  components: {
    AppLogo,testq
  },
  transition: 'test',
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
//  head () {
//    // Set Meta Tags for this Page
//  },
  // and more functionality to discover
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
