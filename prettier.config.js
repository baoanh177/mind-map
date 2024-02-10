// prettier.config.js
module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.js',
    tailwindAttributes: ['myClassList'],
    tailwindFunctions: ['clsx']
  }