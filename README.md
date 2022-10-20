# Modern React Application Architecture In Action

## Requirements

- Node.js 16+
- npm 8+

[There are a couple of different ways to install node and npm.](https://www.nodejsdesignpatterns.com/blog/5-ways-to-install-node-js/)

• VSCode (optional) is currently the most popular editor/IDE for JavaScript/TypeScript, so we will be using it. It is open source, has great integration with TypeScript, and we can extend its features via extensions. It can be downloaded from here: https://code.visualstudio.com/.

## Installation

To start using the code files, the first step is to clone the repository locally on your machine.

If you are using the repository for the first time, once it is cloned locally, you need to do the following steps:

Install the dependencies:

```sh
npm install
```

Configure environment variables by creating the `.env` file and copy the content from `.env.example`:

```sh
cp .env.example .env
```

## Usage

Select a chapter code:

```sh
npm run stage:switch
```

Start the dev server:

```sh
npm run dev
```

Save changes of the selected chapter code:

```sh
npm run stage:save
```

Clear the chapter selection:

```sh
npm run stage:clear
```
