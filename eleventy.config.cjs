const HR_MJESECI = ["siječnja","veljače","ožujka","travnja","svibnja","lipnja",
  "srpnja","kolovoza","rujna","listopada","studenoga","prosinca"];

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addFilter("datehr", (value) => {
    const d = (value instanceof Date) ? value : new Date(value);
    return `${d.getUTCDate()}. ${HR_MJESECI[d.getUTCMonth()]} ${d.getUTCFullYear()}.`;
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
