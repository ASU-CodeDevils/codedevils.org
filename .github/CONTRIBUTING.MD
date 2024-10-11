# Contributing Guidelines and Git Flow

This document plans to outline the following for _all_ contributors of the CodeDevils website project. Please follow these guidelines to the best of your knowledge and understanding, and feel free to message `@presidentwbyc` or `@bigbunzo` in the CodeDevils `#cd-website` Discord channel if you have any questions or need help!

### Table of Contents

1. [Chain of Command](#chain-of-command)
1. [Git Flow](#git-flow)
   - [Workflow Overview](#Overview)
   - [Available Issues](#Available-Issues)
   - [Issue Branch](#Issue-Branch)
   - [Commits and Pull Requests](#commits-and-pull-requests)
   - [Main vs Dev Branch](#main-vs-dev-branch)
1. [Setup Development Environment](#setup-development-environment)
1. [Other Resources](#other-resources)

---

<br/>

# Chain of Command

The CodeDevils Website project managers are Pita Sherwood ([@PitaFLAME](https://github.com/PitaFLAME)) and Frankie Lin ([@frankjlin16](https://github.com/frankjlin16)). They control the day-to-day operation of this project, with oversight and policy dictated by the CodeDevil Officers.

> To check out the projects and project leads, check out codedevils.org/projects

<br/>

# Git Flow

Forking is not necessary - use the origin repo's branches for your own code bases. You have full control over your own development branches and Git flow. That said, there are some general guidelines you need to follow.

## Overview

#### Available Issues

When you want to work on the project, start with the GitHub Issues page.  This is where we'll post available work for contributors.  Each issue will have difficulty and field tags, as well as what the actual changes will entail.  

If you see an issue that you'd like to work on, go to the issue and comment on it saying that you'd like to work it.  If you've done that, you've essentially 'claimed' the issue.  The project lead will assign the issue to you, and you can begin working on the issue!

#### Issue Branch

When you have an issue that you are working, you must start by creating an Issue Branch.  When naming the branch, follow this naming convention:
``` <TYPE>/<ISSUE-ID>/<SHORT-DESCRIPTION> ```

Your branch's TYPE must be one of the following:
- Fix - for issues that address errors, bugs, or broken things
- Update - for changes and maintenance
- Feature - for issues that request new content
- Refactor - for issues that optimize the code
- Style - for issues that make the code more readable, clean, or otherwise pretty

Some example branch names:

```refactor/102/optimize-api-code```
```feature/89/add-welcome-section```
```fix/110/fix-org-link ```


#### Commits and Pull Requests

After you have finished working on an Issue and you have a finished version of your code, commit it to your branch, and create a Pull Request to merge your Issue Branch to `dev`.

To the best of your ability, please try to keep the commits to your Issue Branch as few as possible.  If there end up being a lot of commits on your branch, please squash them before you create your Pull Request.

#### Main vs Dev Branch

The `main` branch is the _production code_ that CodeDevils Website is currently operating on. Whatever is in `main` is what will be on the internet. Contributors should never make a Pull Request to merge directly to `main`.

The `dev` branch is where all Pull Requests should point to.  When creating a new branch, stem from `dev`.  When creating a Pull Request, merge to `dev`.  After enough time, or after a sprint, the changes in `dev` will be merged to `main` by the Project Lead.

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


## Other Resources

- Installing Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Git Basics: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- GitHub - Creating a Pull Request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
