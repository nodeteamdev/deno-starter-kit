# generator-deno-starter-kit

![CircleCI branch](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=flat-square)
![npm](https://img.shields.io/npm/dm/localeval.svg?style=flat-square)
![Plugin on redmine.org](https://img.shields.io/redmine/plugin/stars/redmine_xlsx_format_issue_exporter.svg?style=flat-square)
![onix](https://img.shields.io/badge/onix-systems-blue.svg)

> This generator will help you to build your own Deno Mongodb API using TypeScript

## Description
This generator will help you to build your own Deno, TypeScript.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-deno-starter-kit using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-deno-starter-kit
```

Then generate your new project:

```bash
yo deno-starter-kit
```

Second, install [Deno](https://deno.land/#installation)
Homebrew (Mac)
```bash
brew install deno
```

## Requirements

- deno >= 1
- typescript >= 3.4

## App skeleton
```
.
├── components
│   ├── books
│   │   ├── books.controller.ts
│   │   ├── books.module.ts
│   │   └── books.router.ts
│   │
│   ├── users
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   └── users.router.ts
│   │
│   └─── index.ts
├── config
│   └── middleware.ts
└── server.ts
```

### Development
To start the application in development mode, run:
```bash
deno run --allow-net --allow-env server.ts
```

### Example CRUD
```
curl --location --request GET 'http://localhost:4000/books'
```

```
curl --location --request GET 'http://localhost:4000/user'
```

```
curl --location --request GET 'http://localhost:4000/notfound'
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [chechavalerii](https://github.com/ChechaValerii/)


[npm-image]: https://badge.fury.io/js/generator-deno-starter-kit.svg
[npm-url]: https://npmjs.org/package/generator-deno-starter-kit
[travis-image]: https://travis-ci.com/ChechaValerii/generator-deno-starter-kit.svg?branch=master
[travis-url]: https://travis-ci.com/ChechaValerii/generator-deno-starter-kit
[daviddm-image]: https://david-dm.org/ChechaValerii/generator-deno-starter-kit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ChechaValerii/generator-deno-starter-kit
