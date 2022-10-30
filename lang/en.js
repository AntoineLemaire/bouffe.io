export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    header: {
      description: "Hi, I'm Antoine, passionate Web developer, I spend most of my time on Symfony projects since almost 10 years. Coder by day, coder by night (while sleeping), Daddy the rest of the time. If I can play video games sometimes between, it's a bonus.",
      links: {
        github: {
          title: 'My Github',
        },
        twitter: {
          title: 'Follow me on Twitter',
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
        description: 'foo bar lorem ipsum',
      },
      php: {
        title: 'PHP',
        description: 'foo bar lorem ipsum',
      },
      vuejs: {
        title: 'VueJs',
        description: 'foo bar lorem ipsum',
      },
      databases: {
        title: 'Databases',
        description: 'foo bar lorem ipsum',
      },
      git: {
        title: 'git',
        description: 'foo bar lorem ipsum',
      },
      devops: {
        title: 'Devops',
        description: 'AWS, Alpine Linux, Debian, nginx, php-fpm',
      },
      js: {
        title: 'Javascript',
        description: 'foo bar lorem ipsum',
      },
      search: {
        title: 'Elasticsearch',
        description: 'foo bar lorem ipsum',
      },
      sass: {
        title: 'SASS & Less',
        description: 'foo bar lorem ipsum',
      },
      html: {
        title: 'HTML5 & CSS3',
        description: 'foo bar lorem ipsum',
      },
    },
  });
};
