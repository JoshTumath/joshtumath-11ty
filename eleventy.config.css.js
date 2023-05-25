const postcss = require('postcss');
const postcssNested = require('postcss-nested');

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      return async () => {
        const output = await postcss([postcssNested]).process(content, {
          from: path,
        });

        return output.css;
      };
    },
  });
};
