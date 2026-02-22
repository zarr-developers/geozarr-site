import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GeoZarr",
  description:
    "Modular Zarr conventions for storing and accessing multidimensional georeferenced grids",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { property: "og:title", content: "GeoZarr" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Modular Zarr conventions for storing and accessing multidimensional georeferenced grids",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
  ],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Conventions", link: "/conventions" },
      { text: "Roadmap", link: "/roadmap" },
      { text: "Implementations", link: "/implementations" },
      { text: "Get Involved", link: "/get-involved" },
      {
        text: "Resources",
        items: [
          {
            text: "Spec Draft (HTML) (lags behind convention development)",
            link: "https://zarr.dev/geozarr-spec/documents/standard/template/geozarr-spec.html",
          },
          {
            text: "Spec Draft (PDF) (lags behind convention development)",
            link: "https://zarr.dev/geozarr-spec/documents/standard/template/geozarr-spec.pdf",
          },
          {
            text: "geozarr-toolkit",
            link: "https://github.com/zarr-developers/geozarr-toolkit/",
          },
          {
            text: "geozarr-examples",
            link: "https://developmentseed.org/geozarr-examples/",
          },
          {
            text: "Zarr Conventions Framework",
            link: "https://github.com/zarr-conventions/.github/blob/main/profile/README.md",
          },
          {
            text: "OGC SWG Charter",
            link: "https://github.com/zarr-developers/geozarr-spec/blob/main/CHARTER.adoc",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "About",
        items: [
          { text: "Conventions", link: "/conventions" },
          { text: "Roadmap", link: "/roadmap" },
          { text: "Implementations", link: "/implementations" },
          { text: "Get Involved", link: "/get-involved" },
          { text: "FAQ", link: "/faq" },
          { text: "Resources", link: "/resources" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zarr-developers/geozarr-site",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message:
        'Content under <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Part of the <a href="https://www.ogc.org/">OGC</a> Standards programme.',
      copyright: "GeoZarr SWG",
    },

    editLink: {
      pattern:
        "https://github.com/zarr-developers/geozarr-site/edit/main/site/:path",
      text: "Edit this page on GitHub",
    },
  },
});
