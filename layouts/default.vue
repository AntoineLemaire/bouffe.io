<template>
  <div>
    <header class="header">
      <h1>
        <nuxt-link :to="localePath('index')" class="contrast">
          Antoine Lemaire
        </nuxt-link>
      </h1>
      <div class="bio">
        <div class="avatar">
          <picture>
            <img
              decoding="async"
              src="~/assets/images/me.png"
              alt="Antoine Lemaire"
              height="200"
              width="200"
              loading="lazy"
            >
          </picture>
        </div>
        <p>
          {{ $t('header.description') }}
        </p>
        <div class="links">
          <a href="https://github.com/AntoineLemaire" :title="$t('header.links.github.title')" target="_blank">
            <font-awesome-icon :icon="['fab','github']" />
          </a>
          <a href="https://twitter.com/FecaBouffe" :title="$t('header.links.twitter.title')" target="_blank">
            <font-awesome-icon :icon="['fab','twitter']" />
          </a>
        </div>
      </div>
      <div class="dark-mode-toggle text-center w-100">
        <hr class="mb-4">
        <h4 class="toggle-name mb-3">
          <font-awesome-icon icon="adjust" />
          {{ $t('header.theme.label') }}
        </h4>

        <label for="switch">
          <input id="switch" v-model="themeCheck" type="checkbox" name="switch" role="switch">
        </label>
      </div>
    </header>
    <div class="main-wrapper">
      <section>
        <main class="container">
          <Nuxt />
        </main>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'dark',
      themeCheck: true,
    };
  },
  watch: {
    themeCheck () {
      this.toogleTheme();
    },
  },
  methods: {
    toogleTheme () {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      const button = document.querySelector('html');

      button.setAttribute('data-theme', this.theme);
    },
  },
};
</script>
