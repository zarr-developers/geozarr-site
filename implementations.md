---
description: Libraries and tools implementing GeoZarr conventions — Python, C++, JavaScript, and TypeScript support across geo-proj, spatial, and multiscales.
---

# Implementations

GeoZarr conventions advance in maturity through diverse implementations. The [Zarr Conventions Framework](https://github.com/zarr-conventions/.github/blob/main/profile/README.md) requires 3+ independent implementations for **Candidate** maturity.

## Implementation Matrix

| Implementation                                                        | Language   | geo-proj    | spatial     | multiscales | Notes                                                               |
| --------------------------------------------------------------------- | ---------- | ----------- | ----------- | ----------- | ------------------------------------------------------------------- |
| [eopf data-model](https://github.com/EOPF-Explorer/data-model)        | Python     | Full        | Full        | Full        | Reference implementation for EOPF Sentinel data                     |
| [zarr-cm](https://github.com/zarr-conventions/zarr-cm)                | Python     | Full        | Full        | Full        | Zero-dependency conventions metadata library                        |
| [GDAL](https://gdal.org/en/latest/drivers/raster/zarr.html)           | C++        | Full        | Full        | Full        | Read/write in 3.13; `GEOREFERENCING_CONVENTION=SPATIAL_PROJ` option |
| [rioxarray](https://github.com/corteva/rioxarray)                     | Python     | Full (Write TBR)        | Full (Write TBR)       | —           | Read/write via `Convention.Zarr`                                    |
| [geozarr-toolkit](https://github.com/zarr-developers/geozarr-toolkit) | Python     | In progress | In progress | In progress | CLI (`geozarr validate`, `geozarr info`) and FastAPI service        |
| [OpenLayers](https://openlayers.org/en/latest/examples/geozarr.html)  | JavaScript | Read        | Read        | Read        | `ol/source/GeoZarr`; experimental; requires ol ≥ 10.8.0             |
| [TiTiler (via EOPF)](https://github.com/EOPF-Explorer/titiler-eopf)   | Python     | Read        | Read        | Read        | GeoZarr Reader                                                      |
| [zarr-layer](https://github.com/carbonplan/zarr-layer)                | TypeScript | Read        | Read        | Read        | MapLibre/Mapbox rendering; arbitrary CRS via proj4; v0.4.3          |
| [QGIS GeoZarr](https://plugins.qgis.org/plugins/qgis_geozarr/)        | Python     | Read        | Read        | Read        | Plugin with band selection, satellite presets; requires GDAL 3.13   |

**Support levels:** Full = read/write, Read = read-only, In progress = under active development

## Implementation Details

### GDAL

The GDAL Zarr driver (v3.13+) supports read/write of `geo-proj`, `spatial`, and `multiscales` conventions for Zarr V3. Key features include sharded storage, parallel chunk decompression, and `BuildOverviews` for multiscale pyramid generation. Use the `GEOREFERENCING_CONVENTION=SPATIAL_PROJ` creation option to write GeoZarr conventions.

- [Driver documentation](https://gdal.org/en/latest/drivers/raster/zarr.html)
- [GDAL Zarr contributions by wietzesuijker](https://github.com/OSGeo/gdal/issues?q=author%3Awietzesuijker) — 20+ PRs for sharding write, shard index caching, parallel decompression, and multiscales support

### rioxarray

rioxarray (v0.22+) supports reading and will support writing in next release CRS and transforms using the Zarr `proj:` and `spatial:` conventions. Use `Convention.Zarr` to read/write Zarr conventions alongside or instead of CF conventions.

- [GitHub](https://github.com/corteva/rioxarray)
- [Proposal and discussion](https://github.com/corteva/rioxarray/issues/882)

### eopf data-model

Python library for converting EOPF (Earth Observation Processing Framework) datasets to GeoZarr-compliant format. Supports native CRS preservation, COG-style /2 downsampling for multiscale, CF standard names, and S3 output.

- [GitHub](https://github.com/EOPF-Explorer/data-model)
- [Documentation](https://eopf-explorer.github.io/data-model/)
- [EOPF Explorer data model page](https://explorer.eopf.copernicus.eu/software-services/datamodel/)

### OpenLayers

The `ol/source/GeoZarr` source reads GeoZarr groups with multiscales support directly in the browser. Currently experimental (API subject to change).

- [Example](https://openlayers.org/en/latest/examples/geozarr.html)
- [Source code](https://github.com/spacebel/geozarr-openlayers)

### zarr-layer

Custom MapLibre/Mapbox layer for rendering Zarr datasets, supporting Zarr v2 and v3, arbitrary CRS reprojection via proj4, multi-band custom shaders, globe rendering, and querying.

- [GitHub](https://github.com/carbonplan/zarr-layer)
- [Demo](https://zarr-layer.demo.carbonplan.org/)
- [Pangeo Showcase presentation](https://decks.carbonplan.org/pangeo-showcase/03-11-26)

### QGIS GeoZarr

QGIS plugin for loading cloud-native Zarr data from STAC catalogs. Features band and resolution picker with satellite presets (Sentinel-2, Landsat, MODIS, Sentinel-3, EOPF), multiscale pyramid support, and auto RGB styling. Zarr v2 and v3 including sharded stores (sharding requires GDAL 3.13+).

- [QGIS Plugin Repository](https://plugins.qgis.org/plugins/qgis_geozarr/)
- [GitHub](https://github.com/wietzesuijker/qgis-geozarr)
- [Pangeo Showcase: "No shard feelings: GeoZarr rendering in QGIS, powered by GDAL"](https://discourse.pangeo.io/t/pangeo-showcase-no-shard-feelings-geozarr-rendering-in-qgis-powered-by-gdal-march-4-2026-at-12-pm-et/5526)

## Production Deployments

| Deployment                                            | Stack                | geo-proj | spatial | multiscales | Notes                                                                                                                                                               |
| ----------------------------------------------------- | -------------------- | -------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [EOPF Explorer](https://explorer.eopf.copernicus.eu/) | OpenLayers + TiTiler | Read     | Read    | Read        | First production adoption for Sentinel-2 L2A data; serves sharded Zarr v3 with GeoZarr conventions via [STAC catalog](https://api.explorer.eopf.copernicus.eu/stac) |

## Tools & Libraries

### geozarr-toolkit

Python library for creating, validating, and working with GeoZarr metadata. Includes a CLI (`geozarr validate`, `geozarr info`) and a FastAPI web service.

- [GitHub](https://github.com/zarr-developers/geozarr-toolkit)

### geozarr-examples

Reference documentation, Jupyter notebook examples, and example datasets demonstrating GeoZarr conventions in practice.

- [Documentation](https://developmentseed.org/geozarr-examples/)
- [GitHub](https://github.com/developmentseed/geozarr-examples)

### metazarr

Browser-based tool for exploring Zarr stores and validating GeoZarr conventions against JSON Schemas. Runs entirely client-side.

- [GitHub](https://github.com/zarr-developers/geozarr-toolkit/tree/main/metazarr)
- [Online inspector](https://inspect.geozarr.org)

### zarr-cm

Lightweight Python implementation of Zarr Conventions Metadata.

- [GitHub](https://github.com/zarr-conventions/zarr-cm)
