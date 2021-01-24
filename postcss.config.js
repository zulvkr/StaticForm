const cssnano = require('cssnano')

module.exports = {
    plugins: [
        require('tailwindcss')('./src/styles/tailwind.config.js'),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null
    ]
}