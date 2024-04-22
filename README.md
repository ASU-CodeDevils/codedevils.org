# CodeDevils' Website

![](https://codedevils.org/og.png)

This is the official repository for CodeDevils' website. It's built using the [Next.js](https://nextjs.org) framework, [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/). The website is hosted on [Vercel](https://vercel.com).

## Why are there `.js` files in here?

As per [T3-Axiom #3](https://github.com/t3-oss/create-t3-app/tree/next#3-typesafety-isnt-optional), we take typesafety as a first class citizen. Unfortunately, not all frameworks and plugins support TypeScript which means some of the configuration files have to be `.js` files.

We try to emphasize that these files are javascript for a reason, by explicitly declaring its type (`cjs` or `mjs`) depending on what's supported by the library it is used by. Also, all the `js` files in this project are still typechecked using a `@ts-check` comment at the top.

## Contributing (Getting Started)

1. Pre-requisites:

   - [PNPM](https://pnpm.io/installation)
   - [Node.js](https://nodejs.org/en/download/)
   - [Git](https://git-scm.com/downloads)

2. Clone the repository:
   ```sh
    git clone https://github.com/ASU-CodeDevils/codedevils.org.git
   ```
3. Install the dependencies:
   ```sh
   pnpm install
   ```
4. Run the development server:
   ```sh
    pnpm dev
   ```

## Contributing (Code Style)

This project uses [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to enforce code style. Please make sure to run `pnpm format`, then `pnpm lint` before committing your changes.

## Contributing (Commit Messages)

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to enforce a consistent commit message format. Please make sure to follow the commit message format when making changes.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

## Contributing (Pull Requests)

Please make sure to follow the pull request template when creating a pull request.
