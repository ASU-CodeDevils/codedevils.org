export type ProfileType = {
  name: string;
  position: string;
  avatar: string;
  links: {
    portfolio_url?: string | undefined;
    linkedin?: string | undefined;
  };
};

export const officers = [
  {
    name: 'Frank Lin',
    position: 'President',
    avatar: '/images/officers/frank-lin.png',
    links: {
      portfolio_url: 'https://yellowrubberduckie.com/',
      linkedin: 'https://www.linkedin.com/in/frankjlin/',
    },
  },
  {
    name: 'Remi Godin',
    position: 'Vice President',
    avatar: '/images/officers/Remi-Godin.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Remi-Godin-282225e0b6fe4b01948e707cf1a793f4?pvs=4',
      linkedin: 'https://www.linkedin.com/in/remi-godin-179719282/',
    },
  },
  {
    name: 'Pita Sherwood',
    position: 'Technical Project Manager',
    avatar: '',
    links: {
      portfolio_url: 'https://pita.blue',
      linkedin: 'https://www.linkedin.com/in/pita/',
    },
  },

  {
    name: 'Tyler Kruer',
    position: 'Treasurer',
    avatar: '/images/officers/Tyler-Kruer.png',
    links: {
      portfolio_url: 'https://www.tkruer.com/',
      linkedin: 'https://www.linkedin.com/in/tkruer/',
    },
  },
  {
    name: 'Ansh Dani',
    position: 'Treasurer',
    avatar: '/images/officers/Ansh-Dani.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Ansh-Dani-e0f7ac83afac446a988f38b63c3b8a27',
      linkedin: 'https://www.linkedin.com/in/ansh-dani/',
    },
  },

  {
    name: 'Krishna Balaji',
    position: 'Secretary',
    avatar: '/images/officers/Krishna-Balaji.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Krishna-Balaji-ef2b59b1aaff4e10a7bf8bd680d3964d',
      linkedin: 'https://www.linkedin.com/in/krishna-balaji-53785a257/',
    },
  },
  {
    name: 'Haamid Juvale',
    position: 'Industry Director',
    avatar: '/images/officers/Haamid-Juvale.jpeg',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Haamid-Juvale-f21cb8be651445bfad01d2e175dcfda0?pvs=74',
      linkedin: 'https://www.linkedin.com/in/haamidjuvale/',
    },
  },
  {
    name: 'Pranith Molakalapalli',
    position: 'Events Director',
    avatar: '/images/officers/Pranith-Molakalapalli.jpeg',
    links: {
      portfolio_url: 'https://prani.tech/',
      linkedin: 'https://www.linkedin.com/in/pranith-molakalapalli/',
    },
  },
  {
    name: 'Mason Biegel',
    position: 'Events Coordinator',
    avatar: '/images/officers/Mason-Biegel.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Mason-Biegel-0d5e30317aab4ae1bec995c152c8c9e0?pvs=4',
      linkedin: 'https://www.linkedin.com/in/masonb3/',
    },
  },

  {
    name: 'Jaith Darrah',
    position: 'Events Coordinator',
    avatar: '/images/officers/Jaith-Darrah.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Jaith-Darrah-1a7e24d6556e48ac95482c791e1f8e8a?pvs=4',
      linkedin: 'https://www.linkedin.com/in/jaithdarrah/',
    },
  },

  {
    name: 'Isabella Faris',
    position: 'Marketing Director',
    avatar: '/images/officers/Isabella-Faris.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Isabella-Faris-abd5605cf2d24b2cb886ebc4e9abd088?pvs=4',
      linkedin: 'https://www.linkedin.com/in/isabellafaris/',
    },
  },
];

export const projectLeads = [
  {
    name: 'Pita Sherwood',
    position: 'Projects Manager',
    avatar: '',
    links: {
      portfolio_url: 'https://www.davidnevarez.info/',
      linkedin: 'https://www.linkedin.com/in/fernando-d-nevarez/',
    },
  },

  {
    name: 'Rhett Harrison',
    position: 'Website Project Lead',
    avatar: '/images/project_leads/Rhett_Harrison.jpeg',
    links: {
      portfolio_url: 'https://www.rhettharrison.com/home',
      linkedin: 'https://www.linkedin.com/in/rhettharrison/',
    },
  },
  {
    name: 'Ian Castellanos',
    position: 'Discord Bot Project Lead',
    avatar: '/images/project_leads/Ian_Castellanos.jpeg',
    links: {
      linkedin: 'https://www.linkedin.com/in/ian-castellanos-719a2115b/',
    },
  },
  {
    name: 'Jason Michelson',
    position: 'Discord Bot Project Lead',
    avatar: '/images/project_leads/Jason_Michelson.jpeg',
    links: {
      linkedin: 'https://www.linkedin.com/in/jasonmichelson/',
    },
  },
  {
    name: 'Remi Godin',
    position: 'Discord Bot Project Lead',
    avatar: '/images/officers/Remi-Godin.png',
    links: {
      portfolio_url:
        'https://codedevils.notion.site/Remi-Godin-282225e0b6fe4b01948e707cf1a793f4?pvs=4',
      linkedin: 'https://www.linkedin.com/in/remi-godin-179719282/',
    },
  },
  {
    name: 'Frank Lin',
    position: 'React Components Library Project Lead',
    avatar: '/images/officers/frank-lin.png',
    links: {
      portfolio_url: 'https://yellowrubberduckie.com/',
      linkedin: 'https://www.linkedin.com/in/frankjlin/',
    },
  },
];

export const socialLinks = {
  discord: 'https://discord.gg/codedevils',
  sundevilsync: 'https://asu.campuslabs.com/engage/organization/codedevils/',
  linkedin: 'https://www.linkedin.com/company/codedevils-official/',
  instagram: 'https://www.instagram.com/codedevils.asu/',
  github: 'https://github.com/ASU-CodeDevils/',
};