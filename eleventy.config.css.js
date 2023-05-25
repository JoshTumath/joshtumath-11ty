const bundlerPlugin = require('@11ty/eleventy-plugin-bundle');
const postcss = require('postcss');
const postcssNested = require('postcss-nested');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(bundlerPlugin, {
    transforms: [
      async function (content) {
        if (this.type === 'css') {
          let result = await postcss([postcssNested]).process(content, { from: this.page.inputPath, to: null });
          return result.css;
        }

        return content;
      },
    ],
  });
};
