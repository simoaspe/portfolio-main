module.exports = {
  siteMetadata: {
    title: `projects | simoaspe`,
    name: `simoaspe`,
    siteUrl: `https://novela.narative.co`,
    description: `Un portolio curato dei progetti sviluppati da Simone Asperti, visual designer di Begramo`,
    hero: {
      heading: `<a href="./authors/simone-asperti">Simone Asperti</a>, visual designer e digital marketer.<br>- scopri <a href="./authors/simone-asperti" style="color: #2ECC71;">chi sono</a>.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `instagram`,
        url: `https://www.instagram.com/simoaspe/?hl=it`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/simoneasperti/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/simoaspe?lang=it`,
      },
      {
        name: `mailto`,
        url: `mailto:simone.asperti.as@gmail.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-0L4B944KJN", 
        ],
      },
    },
  ],
};
