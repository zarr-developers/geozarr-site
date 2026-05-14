import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GeoZarr",
  description:
    "Modular Zarr conventions for storing and accessing multidimensional georeferenced grids",
  sitemap: {
    hostname: "https://geozarr.org",
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "canonical", href: "https://geozarr.org" }],
    ["meta", { property: "og:title", content: "GeoZarr" }],
    ["meta", { property: "og:url", content: "https://geozarr.org" }],
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
      { text: "Minutes", link: "/minutes/" },
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
            text: "GeoZarr online validator",
            link: "https://inspect.geozarr.org",
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

    sidebar: {
      "/minutes/": [
        {
          text: "SWG Meeting Minutes",
          items: [
            { text: "Overview", link: "/minutes/" },
            { text: "6 May 2026", link: "/minutes/2026-05-06" },
            { text: "1 April 2026", link: "/minutes/2026-04-01" },
            { text: "4 March 2026", link: "/minutes/2026-03-04" },
            { text: "4 February 2026", link: "/minutes/2026-02-04" },
            { text: "7 January 2026", link: "/minutes/2026-01-07" },
            { text: "3 December 2025", link: "/minutes/2025-12-03" },
          ],
        },
      ],
    },

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
