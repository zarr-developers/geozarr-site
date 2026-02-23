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
      { text: "FAQ", link: "/faq" },
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
            text: "Zarr Conventions Organization",
            link: "https://github.com/zarr-conventions/",
          },
          {
            text: "OGC SWG Charter",
            link: "https://github.com/zarr-developers/geozarr-spec/blob/main/CHARTER.adoc",
          },
        ],
      },
    ],

    sidebar: false,

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
        'Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.',
      copyright: "Copyright © 2026 GeoZarr Developers",
    },

    editLink: {
      pattern:
        "https://github.com/zarr-developers/geozarr-site/edit/main/site/:path",
      text: "Edit this page on GitHub",
    },
  },
});
