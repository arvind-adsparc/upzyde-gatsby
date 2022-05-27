module.exports = {
  siteMetadata: {
    title: `Upzyde`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdownpage",
        path: `${__dirname}/src/markdown-pages`,
      },
      __key: "images",
    },
    "gatsby-transformer-remark",
  ],
};
