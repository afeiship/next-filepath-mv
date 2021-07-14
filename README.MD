# next-filepath-mv
> Filepath rename for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-filepath-mv
```

## usage
```js
import '@jswork/next-filepath-mv';

//DOCS here!
nx.filepathMv('/var/lib/nginx/tmp/test.txt',(obj)=>{
  obj.prefix = 'pre_';
  obj.suffix = '_suf';
  obj.name = 'test123';
  return obj;
});

// /var/lib/nginx/tmp/pre_test123_suf.txt
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-filepath-mv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-filepath-mv
[version-url]: https://npmjs.org/package/@jswork/next-filepath-mv

[license-image]: https://img.shields.io/npm/l/@jswork/next-filepath-mv
[license-url]: https://github.com/afeiship/next-filepath-mv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-filepath-mv
[size-url]: https://github.com/afeiship/next-filepath-mv/blob/master/dist/next-filepath-mv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-filepath-mv
[download-url]: https://www.npmjs.com/package/@jswork/next-filepath-mv
