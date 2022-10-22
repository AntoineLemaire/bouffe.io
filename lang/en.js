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
    },
    index: {
      title: {
        skills: 'My skills',
        github: 'Github contributions',
      },
    },
  });
};
