module.exports = {
    // Collect data from environment variable provided by Netlify Build
    git: {
        url: process.env.REPOSITORY_URL,
        branch: process.env.BRANCH
    },
    deploy: {
        url: process.env.URL
    }
};