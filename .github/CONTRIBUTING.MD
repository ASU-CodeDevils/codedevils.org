# Contributing Guidelines and Git Flow

This document plans to outline the following for _all_ contributors of the CodeDevils website project. Please follow these guidelines to the best of your knowledge and understanding, and feel free to message `@presidentwbyc` or `@bigbunzo` in the CodeDevils `#cd-website` Discord channel if you have any questions or need help!

### Table of Contents

1. [Chain of Command](#chain-of-command)
1. [Git Flow](#git-flow)
   - [Workflow Overview](#Overview)
   - [Workflow Contribution Requirements](#contribution-requirements)
   - [Workflow Examples](#workflow-examples)
1. [Setup Development Environment](#setup-development-environment)
1. [Git Cheatsheet](#git-cheatsheet)
1. [Other Resources](#other-resources)

---

<br/>

# Chain of Command

The CodeDevils Website project managers are Ian Castellanos ([@IMBCIT](https://github.com/imbcit)). He controls the day-to-day operation of this project, with oversight and policy dictated by the CodeDevil Officers.

> To see your CodeDevil officers, visit the `#info` channel in the CodeDevils Discord server.

<br/>

# Git Flow

Forking is not necessary - use the origin repo's branches for your own code bases. You have full control over your own development branches and Git flow. That said, there are some general guidelines you need to follow.

## Overview

#### Personal Branch

This is your own branch. You can call it whatever you want locally and push it into the remote repository. Your working commits will be on this branch and when you are ready to create a pull request (PR) for a specific GitHub issue you will use your personal branch for that PR.

#### Main Branch

The `main` branch is the _production code_ that CodeDevils Website is currently operating on. Whatever is in `main` is what will be on the internet. PRs from personal branches to `main` will **require an approved code review from a project manager**.

## Contribution Requirements

Observe the following in your git flow:

- Make an Issue prior to working on your code. We don't want you to work on something that is actually banned or already implemented!
- Your personal development branches must start with your name and be consistent. E.g., `bobby-dev`, `bobby-new-feature-here`
- Though there is no limit to the number of reviewers you request, your pull requests to `main` **must** at least include **a project manager**.
- Comment in your code following the functionality and process within it.
- Make sure that you have tested your code using your personal AWS account and personal Slack development bot. Be sure to include in your PR a link to a screen capture of you testing your feature. **NO CODE WILL BE APPROVED WITHOUT BEING TESTED FIRST**.

## Workflow Examples

### Marlee's Quick Patch (Simple)

> My name is Marlee, and I noticed a misspelling in the README.
>
> I would create a GitHub issue for this, then create a branch called `marlee-hotfix`, make the correction, then submit a pull request to `main` making sure to request review from [@IMBCIT](https://github.com/imbcit).

Good job Marlee!

### Clyde & Darryl's Calendar (Collab)

> My name is Clyde, and I'm working with Darryl on a sweet new command that allows something to do with calendars.
>
> I would create a GitHub issue for the new feature, then checkout a new branch entitled `calendar-dev`, acting as the default branch for the calendar between Darryl and I, making sure to keep it updated with `main`. Darryl and I would then have our own branches whatever we want to call them following the guideline, say `darryl-calendar` and `clyde-dev`. We push and pull from `calendar-dev` for development.
>
> When our cool new command is done, _making sure to pull `calendar-dev` from `main` so that there are not merge conflicts_, I would then make a pull request on `main`. Billy-Bob is good with calendars, so I would like his review too. I would request review from `@BillyBobUSA` along with a project manager such as [@IMBCIT](https://github.com/imbcit).

Nicely done!

---

<br/>

# Setup Development Environment

## Requirements

- pnpm - [Install Instructions](https://pnpm.io/installation)
- Node.js - [Install Instructions](https://nodejs.org/en/)

Alternatively, you can install both requirements with a package manager - [homebrew](https://brew.sh/) (macOS) or [chocolatey](https://chocolatey.org/) (Windows).

## Environment Variables

You need to create a `.env` file in root directory with the following environment variables:

```
# Prisma
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# Discord Secret
DISCORD_CLIENT_ID=<Client ID>
DISCORD_CLIENT_SECRET=<Client Secret>

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=*******************************************************
CLERK_SECRET_KEY=sk_test_******************************************

```

To aquire the **discord client id and secret**, you need to create a new application through the [discord developer portal](https://discord.com/developers/applications). Refer to [NextAuth's documentation](https://next-auth.js.org/providers/discord) for additional information.

## Getting Started

Once you have the local environment variables set, it is time to install the packages/dependencies.

```
pnpm install
```

Once the packages/dependencies have been installed, you need to initialize the database with `prisma`.

```
pnpm prisma db push
```

Now you can start the development server with the following command:

```
pnpm dev
```

---

<br/>

# Git Cheatsheet

#### Checkout Existing Branch

```
git checkout existing-branch
```

#### Checkout a New Branch

```
git checkout -B your-new-branch
```

#### Push to Repo

```
git push origin destination-branch
```

Pro-tip: add `-u` to skip the naming of the branch in future pushes.

#### Update Current Branch from Repo

```
git fetch && git pull
```

#### Update Current Branch from Target Branch

```
git fetch ; git merge target-branch
```

Use Case: Your development branch (current branch) is behind `dev` and you want to update your branch with the code from `dev` (or some other target branch).

---

## Other Resources

- Installing Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Git Basics: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- GitHub - Creating a Pull Request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
