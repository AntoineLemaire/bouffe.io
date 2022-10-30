<template>
  <div>
    <h2>Lead Developper - Symfony</h2>
    <h3 class="section-title">
      {{ $t('index.title.skills') }}
    </h3>
    <div class="container text-center">
      <div class="skills">
        <skill-card
          :icons="[['fab','symfony']]"
          name="symfony"
        />
        <skill-card
          :icons="[['fab','php']]"
          name="php"
        />
        <skill-card
          :icons="[['fa','database']]"
          name="databases"
        />
        <skill-card
          :icons="[['fa','magnifying-glass']]"
          name="search"
        />
        <skill-card
          :icons="[['fab','js']]"
          name="js"
        />
        <skill-card
          :icons="[['fab','html5'], ['fab','css3']]"
          name="html"
        />
        <skill-card
          :icons="[['fab','sass'], ['fab','less']]"
          name="sass"
        />
        <skill-card
          :icons="[['fab','vuejs']]"
          name="vuejs"
        />
        <skill-card
          :icons="[['fa','code-merge']]"
          name="git"
        />
        <skill-card
          :icons="[['fa','terminal']]"
          name="devops"
        />
      </div>
    </div>

    <h3 class="section-title">
      {{ $t('index.title.github') }}
    </h3>
    <GithubCalendar username="AntoineLemaire" />
  </div>
</template>

<script>
// import GitHubCalendar from 'github-calendar';

export default {
  name: 'IndexPage',
};
</script>
