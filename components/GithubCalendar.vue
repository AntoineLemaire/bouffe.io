<template>
  <div class="github-calendar">
    <font-awesome-icon icon="spinner" spin />
    Loading the data just for you.
  </div>
</template>

<script>
import GitHubCalendar from 'github-calendar';

export default {
  name: 'GithubCalendar',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  mounted () {
    // https://github.com/Bloggify/github-calendar
    GitHubCalendar(
      '.github-calendar',
      this.username,
      {
        responsive: true,
        summary_text: '',
        global_stats: false,
        tooltips: true,
      },
    );
  },
};
</script>
