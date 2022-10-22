<template>
  <div>
    <h2 class="section-title">
      {{ $t('index.title.skills') }}
    </h2>
    <div class="container text-center">
      <div class="skills">
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','symfony']" />
            </div>
            <h3 class="item-title">
              Symfony
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','php']" />
            </div>
            <h3 class="item-title">
              PHP
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fa','database']" />
            </div>
            <h3 class="item-title">
              Databases
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fa','search']" />
            </div>
            <h3 class="item-title">
              ElasticSearch
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','js']" />
            </div>
            <h3 class="item-title">
              Javascript
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','html5']" />
              <font-awesome-icon :icon="['fab','css3']" />
            </div>
            <h3 class="item-title">
              HTML5 & CSS3
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','sass']" />
              <font-awesome-icon :icon="['fab','less']" />
            </div>
            <h3 class="item-title">
              SASS & Less
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','vuejs']" />
            </div>
            <h3 class="item-title">
              VueJS
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fab','git']" />
            </div>
            <h3 class="item-title">
              Git
            </h3>
            <div class="item-desc">
            </div>
          </article>
        </div>
        <div class="item">
          <article>
            <div class="item-icon">
              <font-awesome-icon :icon="['fa','terminal']" />
            </div>
            <h3 class="item-title">
              Devops
            </h3>
            <div class="item-desc">
              AWS, Alpine Linux, Debian, nginx, php-fpm,
            </div>
          </article>
        </div>
        <div class="item placeholder" />
        <div class="item placeholder" />
        <div class="item placeholder" />
      </div>
    </div>

    <h2 class="section-title">
      {{ $t('index.title.github') }}
    </h2>
    <GithubCalendar username="AntoineLemaire"/>
  </div>
</template>

<script>
import GitHubCalendar from 'github-calendar';

export default {
  name: 'IndexPage',
};
</script>
