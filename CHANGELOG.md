<!-- markdownlint-disable MD012 MD022 MD024 MD026 MD032 MD041 -->

# Change Log

- based on [Keep a Changelog](http://keepachangelog.com/)
- adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
~~Removed, Changed, Deprecated, Added, Fixed, Security~~


## [2.0.3] - 2017-02-25
### Changed
- exposed the validation function used in testing (thanks to [@finwo](https://github.com/finwo))


## [2.0.2] - 2017-02-25
### Changed
- Removed `array-shuffle` dependency and incorporated the small needed part
- one fewer array created

### Fixed
- Allow for smaller output rows i.e. sampler(Array[3]) OR sampler(3). Oversized inputs are rescaled to the samplle size
- Updated testing dependency


## [2.0.0] - 2016-12-31
### Changed
- Allow for smaller output rows i.e. sampler(Array[3]) OR sampler(3). Oversized inputs are rescaled to the samplle size

### Added
- `CHANGELOG.md`
- `.editorconfig`
- Documentation on the optional sampling function arguments


## [1.0.0] - 2016-09-17
### Added
- First publish
