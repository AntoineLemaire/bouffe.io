<template>
  <div>
    <header class="header">
      <h1>
        <nuxt-link :to="localePath('index')" class="contrast">
          Antoine Lemaire
        </nuxt-link>
        <h2 class="hidden-lg">Lead Developper - Symfony</h2>
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
        <p class="hidden-lg">
          {{ $t('header.description') }}
        </p>
        <ul class="list-bio">
          <li>
            <font-awesome-icon icon="cake-candles" /> 33 {{ $t('header.years') }}
          </li>
          <li>
            <font-awesome-icon icon="location-dot" /> Pineuilh (33)
          </li>
        </ul>
        <div class="links">
          <a href="https://github.com/AntoineLemaire" :title="$t('header.links.github.title')" class="contrast" target="_blank">
            <font-awesome-icon :icon="['fab','github']" />
          </a>
          <a href="https://bsky.app/profile/bouffe.io" :title="$t('header.links.bluesky.title')" class="contrast" target="_blank">
            <font-awesome-icon :icon="['fab','bluesky']" />
          </a>
        </div>
      </div>
      <div class="header-footer">
        <hr>
        <div class="dark-mode-toggle text-center w-100">
          <label for="switch">
            <font-awesome-icon icon="sun" />
            <input id="switch" v-model="themeCheck" type="checkbox" name="switch" role="switch">
            <font-awesome-icon icon="moon" />
          </label>
        </div>
        <div class="language-switcher">
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ $t('header.switch_lang', locale.code) }}
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="main-wrapper">
      <section>
        <main class="container">
          <Nuxt />
        </main>
      </section>
    </div>
    <footer class="footer">
      <div class="dark-mode-toggle text-center w-100">
        <label for="switch">
          <font-awesome-icon icon="sun" />
          <input id="switch" v-model="themeCheck" type="checkbox" name="switch" role="switch">
          <font-awesome-icon icon="moon" />
        </label>
      </div>
      <div class="language-switcher">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ $t('header.switch_lang', locale.code) }}
        </nuxt-link>
      </div>
    </footer>
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
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
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
