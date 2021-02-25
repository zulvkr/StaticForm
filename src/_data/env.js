module.exports = {
  git: {
    url: process.env.REPOSITORY_URL,
    branch: process.env.BRANCH
  },
  deploy: {
    url: process.env.URL
  },
  devProxy: process.env.NETLIFY_PROXY,
  cmsBackend: process.env.CMS_BACKEND,
  showHero: process.env.SHOW_HERO,
  disableIdentity: process.env.DISABLE_IDENTITY
};
