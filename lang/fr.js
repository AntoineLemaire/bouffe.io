export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenue',
    header: {
      description: "Salut ! Moi c'est Antoine, développeur Web passionné, je passe le plus clair de mon temps sur des projets Symfony depuis bientôt 10 ans. Codeur le jour, codeur la nuit (en dormant), Papa le reste du temps. Si je peux me lancer une partie de jeu par-ci par-là, c'est bonus.",
      links: {
        github: {
          title: 'Mon Github',
        },
        twitter: {
          title: 'Suivez-moi sur Twitter',
        },
      },
      theme: {
        label: 'Thème sombre',
      },
      years: 'ans',
      switch_lang: 'Passer en Français   🇫🇷',
    },
    index: {
      title: {
        skills: 'Mes compétences',
        github: 'Mes contributions Github',
      },
    },
    skill: {
      symfony: {
        title: 'Symfony',
        description: 'Meilleur framework ever, bientôt 10 ans à travailler avec',
      },
      php: {
        title: 'PHP',
        description: 'Ma véritable LV2',
      },
      vuejs: {
        title: 'VueJs',
        description: "Le backend c'est mieux, mais j'ai fini par prendre mes marques avec VueJS",
      },
      databases: {
        title: 'Databases',
        description: 'MySQL, MariaDB, PostgreSQL, Redis, MongoDB',
      },
      git: {
        title: 'Versionning',
        description: 'Git, Github, Gitlab',
      },
      devops: {
        title: 'Devops',
        description: 'AWS, Alpine Linux, Debian, NGINX',
      },
      js: {
        title: 'Javascript',
        description: 'Il en faut, vanilla, nodejs etc.',
      },
      search: {
        title: 'Elasticsearch',
        description: 'Pour des recherches ultra rapides',
      },
      sass: {
        title: 'SASS & Less',
        description: "C'est quand même plus simple que du pûr CSS",
      },
      html: {
        title: 'HTML5 & CSS3',
        description: 'On a tous commencé par là',
      },
    },
  });
};
