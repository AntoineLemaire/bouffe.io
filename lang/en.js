export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    header: {
      description: "Hi, I'm Antoine, passionate Web developer, I spend most of my time on Symfony projects since almost 10 years. Coder by day, coder by night (while sleeping), Daddy the rest of the time. If I can play video games sometimes between, it's a bonus.",
      links: {
        github: {
          title: 'My Github',
        },
        bluesky: {
          title: 'Follow me on Bluesky',
        },
      },
      theme: {
        label: ' Dark Mode',
      },
      years: 'yo',
      switch_lang: 'Switch to English 🇬🇧',
    },
    index: {
      title: {
        skills: 'My skills',
        github: 'Github contributions',
      },
    },
    skill: {
      symfony: {
        title: 'Symfony',
        description: 'Best framework I met. I work with it since almost 10 years',
      },
      php: {
        title: 'PHP',
        description: 'My second language after French',
      },
      vuejs: {
        title: 'VueJs',
        description: 'I prefere Backend, but VueJS is something I also use everyday',
      },
      databases: {
        title: 'Databases',
        description: 'MySQL, MariaDB, PostgreSQL, Redis, MongoDB',
      },
      git: {
        title: 'git',
        description: 'Git, Github, Gitlab',
      },
      devops: {
        title: 'Devops',
        description: 'AWS, Alpine Linux, Debian, nginx, php-fpm',
      },
      js: {
        title: 'Javascript',
        description: 'We need it! Vanilla, nodejs, etc.',
      },
      search: {
        title: 'Elasticsearch',
        description: 'For fast searches',
      },
      sass: {
        title: 'SASS & Less',
        description: 'Better and easier than classic CSS',
      },
      html: {
        title: 'HTML5 & CSS3',
        description: 'We all started here',
      },
    },
  });
};
