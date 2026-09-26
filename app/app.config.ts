export default defineAppConfig({
  global: {
    picture: {
      dark: '/assets/images/about.jpg',
      light: '/assets/images/about.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/aghiljosecareer/15min',
    email: 'career@aghiljose.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `All rights reserved © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-medium',
      'to': 'https://medium.com/@aghiljv',
      'target': '_blank',
      'aria-label': 'Medium'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/aghil-jose/',
      'target': '_blank',
      'aria-label': 'Linkedin'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/aghiljv',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  }
})
