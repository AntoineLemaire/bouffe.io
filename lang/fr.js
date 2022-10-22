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
    },
    index: {
      title: {
        skills: 'Mes compétences',
        github: 'Mes contributions Github',
      },
    },
  });
};
