// removes css that is not used
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html'
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const plugins =
    process.env.NODE_ENV === 'production'
        ? ['tailwindcss', 'autoprefixer', purgecss]
        : ['tailwindcss'];

module.exports = { plugins };
