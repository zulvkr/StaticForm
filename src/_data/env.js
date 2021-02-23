module.exports = {
  // Collect data from environment variable provided by Netlify Build
  git: {
    url: process.env.REPOSITORY_URL,
    branch: process.env.BRANCH
  },
  deploy: {
    url: process.env.URL
  },
  devProxy: process.env.NETLIFY_PROXY,
  cmsBackend: process.env.CMS_BACKEND,
  site: {
    showHero: process.env.SHOW_HERO
  }

};
