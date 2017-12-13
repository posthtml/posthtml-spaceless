# posthtml-spaceless

> A [posthtml](https://github.com/posthtml) plugin remove whitespace between HTML tags

[![Travis Build Status](https://img.shields.io/travis/posthtml/posthtml-spaceless.svg?style=flat-square&label=unix)](https://travis-ci.org/posthtml/posthtml-spaceless)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/posthtml-spaceless.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/posthtml/posthtml-spaceless)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/posthtml-spaceless.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-spaceless)[![Dependency Status](https://david-dm.org/gitscrum/posthtml-spaceless.svg?style=flat-square)](https://david-dm.org/posthtml/posthtml-spaceless)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/posthtml/posthtml-spaceless.svg?style=flat-square)](https://coveralls.io/r/posthtml/posthtml-spaceless)

[![npm downloads](https://img.shields.io/npm/dm/posthtml-spaceless.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-spaceless)[![npm](https://img.shields.io/npm/dt/posthtml-spaceless.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-spaceless)

## Why?
This tag is based on and compatible with the [Twig `spaceless` tag](http://twig.sensiolabs.org/doc/tags/spaceless.html), [Swig `spaceless` tag](https://voorhoede.github.io/swig/docs/tags/#spaceless) and [Django `spaceless` tag](https://docs.djangoproject.com/en/dev/ref/templates/builtins/#spaceless).

## Install

```bash
npm i -D posthtml posthtml-spaceless
```

> **Note:** This project is compatible with node v4+

## Usage

```js
import {readFileSync, writeFileSync} from 'fs';
import posthtml from 'posthtml';
import spaceless from 'posthtml-spaceless';

const html = readFileSync('input.html', 'utf8');

posthtml()
    .use(spaceless())
    .process(html)
    .then(result => {
        writeFileSync('output.html', result.html);
    });

```
*Returns the html without whitespace between tags*

## Example

#### input.html
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h2>Header</h2>
        <spaceless>
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
        </spaceless>
    </body>
</html>
```

#### output.html
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h2>Header</h2>
        <ul><li>one</li><li>two</li><li>three</li></ul>
    </body>
</html>
```
