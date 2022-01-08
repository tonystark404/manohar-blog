module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        // Website configuration
        website: {
          title: "Manohar's Blog", // Homepage title
          titleShort: "Manohar", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
          name: "Manohar's Blog", // Website name used for homescreen (PWA) and SEO
          description: "Personal blog of Manohar", // Website description used for RSS feeds/meta description tag
          language: "en", // Sets the global HTML lang attribute
          logoUrl: "/logos/logo-1024.png", // Logo used for SEO
          // fbAppId: "1825356251115265", // FB Application ID for using app insights
          twitterName: "manoharlk", // Twitter handle of the website
          url: "https://manohar.blog", // Domain of your website without the pathPrefix
          rss: "/rss.xml", // Path to the RSS file
          rssTitle: "Manohar's Blog", // Title of the RSS feed

          googleAnalyticsId: "UA-111528742-1", // GA tracking ID
          copyright: `© Copyright ${new Date().getFullYear()} | Manohar Lakkoju`, // Copyright string for the footer of the website and RSS feed.

          themeColor: "#D83850", // Used for setting manifest and progress theme colors.
          backgroundColor: "#F7F7F7", // Used for setting manifest background color.
        },

        // User configuration
        user: {
          id: "manoharlakkoju", // Unique identifier of the user on the website. Used for OpenGraph SEO tags
          firstName: "Manohar", // Used for SEO
          lastName: "Lakkoju", // Used for SEO
          twitterName: "manoharlk", // Twitter username used for SEO
          linkedIn: "manohar.lakkoju", // Used for contact information
          github: "tonystark404", // Used for contact information
          email: "mnhrlkkj@gmail.com", // Used for contact information and displayed in the RSS feed
          location: "Hyderabad, India", // User location used for SEO
          about: "A software developer looking to expand his knowledge!", // User information used for the author section
          avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
        },

        // Organization information used for SEO
        organization: {
          name: "Manohar",
          description: "Manohar's Blog",
          logoUrl: "/logos/logo-512.png",
          url: "https://manohar.blog", // URL of the organization website
        },

        // Gatsby Configuration
        pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

        contentDir: undefined, // Directory for MDX posts. Defaults to "content".
        assetDir: undefined, // Asset directory. Defaults to "static".

        embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
        embeddedVideoWidth: 920, // MDX embedded video width in pixels

        iconPath: undefined, // Icon used for manifest icon creation.
        iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
        iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

        // basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
      },
    },
  ],
};
