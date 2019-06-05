# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Change license from GPLv3 to AGPLv3

## [1.2.0]

### Added

- Support multiple lyrics. [#10](https://github.com/guoyunhe/rabbit-lyrics/issues/10)

## [1.1.2]

### Fixed

- Webpack library export issues [#9](https://github.com/guoyunhe/rabbit-lyrics/issues/9)

## [1.1.1] 2019-02-28

### Fixed

- Cannot specify media element [#6](https://github.com/guoyunhe/rabbit-lyrics/issues/6)
- `data-audio` should be changed to `data-media` in documentation

## [1.1.0] 2018-10-25

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

[Unreleased]: https://github.com/guoyunhe/rabbit-lyrics/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/guoyunhe/rabbit-lyrics/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/guoyunhe/rabbit-lyrics/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/guoyunhe/rabbit-lyrics/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/guoyunhe/rabbit-lyrics/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/guoyunhe/rabbit-lyrics/compare/v0.1.2...v1.0.0
[0.1.2]: https://github.com/guoyunhe/rabbit-lyrics/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/guoyunhe/rabbit-lyrics/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/guoyunhe/rabbit-lyrics/releases/tag/v0.1.0
