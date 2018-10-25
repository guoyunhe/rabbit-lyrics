# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.0]

### Added

- Support timestamp with hours `[hh:mm:ss.xx]`, like `[2:17:53.92]`.
- Add alignment option.
- Add height option.
- Add changelog.
- CSS class of playing status.

### Changed

- Go back to CSS from SCSS, since the style is too simple.
- Build with latest webpack (v4.17.0) and css loader (v1.0.0).
- Update document and examples.
- Use BEM naming.

### Removed

- Don't extract CSS file anymore. Style will be loaded by JavaScript. A single
  entry point makes it easier to import.

## [1.0.0] - 2017-07-31

### Added

- Published as Node module.
- Support three view mode.

### Changed

- Rewrite in ES5 class. Build with webpack.
- Auto-scroll is more accurate and smooth.
- Better documentation and examples.

### Removed

- Remove jQuery dependency and support. Now it doesn't have any run-time dependency.
- Remove `size` option. Use `viewMode` instead.

## [0.1.2] - 2015-10-08

### Changed

- Skip empty lines when playing.

## [0.1.1] - 2015-10-08

### Fixed

- Fixed timestamp parsing bug.

## [0.1.0] - 2015-10-08

### Added

- Lyrics parser.
- Lyrics synchronizer
- Three sizes: tiny, medium, full.
