# egg-grpc-plus

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-grpc-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-grpc-plus
[travis-image]: https://img.shields.io/travis/eggjs/egg-grpc-plus.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-grpc-plus
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-grpc-plus.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-grpc-plus?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-grpc-plus.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-grpc-plus
[snyk-image]: https://snyk.io/test/npm/egg-grpc-plus/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-grpc-plus
[download-image]: https://img.shields.io/npm/dm/egg-grpc-plus.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-grpc-plus

<!--
Description here.
-->

## Install

```bash
$ npm i egg-grpc-plus --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.grpcPlus = {
  enable: true,
  package: 'egg-grpc-plus',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.grpcPlus = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
