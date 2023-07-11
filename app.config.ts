export default defineAppConfig({
  docus: {
    title: "Shift Collective Docs",
    description: "Shift Collective documentation.",
    socials: {
      github: "shiftcollective-org/Docs",
      lemmy: {
        label: "Lemmy",
        icon: "simple-icons:lemmy",
        href: "https://join-lemmy.org/",
      },
    },
    github: {
      branch: "main",
      repo: "Docs",
      owner: "shiftcollective-org",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      title: "Shift Collective - Docs",
      logo: false,
      showLinkIcon: false,
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev",
      },
    },
  },
});
