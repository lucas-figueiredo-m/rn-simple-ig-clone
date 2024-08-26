# Contributing Guidelines

To ensure a smooth collaboration, please follow these guidelines when creating components, features, and committing code.

## Table of Contents

- [Code Style](#code-style)
- [Creating Components](#creating-components)
- [Implementing Features](#implementing-features)
- [Committing Code](#committing-code)

## Code Style

If you are using VSCode and has the ESlint extension installed, most of the code style guidelines will be added to your code right after saving a file, automatically. Plus, if some of the rules required by ESlint isn't match until you push your changes to the remote, `husky.js` will prevent you from pushing your changes until you fix them through a git hook.

You should consider these other rules:

- Use meaningful names when creating variables, states, functions and classes. It should make clear for the reviewer what is that about, or give at least some information about it.
- Only use comments when extremely necessary. Your code should be self explanatory. To achieve this, remember to use meanningful names and split large features into smaller ones, so the reviewer gets a step-by-step on each piece of code
- Avoid unnecessary code duplication and strive for modular and reusable code.
- Try aways to follow the SOLID principles, whenever it's possible.
- Follow the project's existing code style and formatting guidelines.
- Make sure your code is strongly typed and add unit tests whenever it's convenient
- If you need to create additional folders inside of `/src` folder, remember to add it to `tsconfig.json` and to `babel.config.js`.

## Creating Components

When creating components, please adhere to the following guidelines:

- Use the appropriate file structure and naming conventions for components.
  - If a component is used globally accross the application (e.g: a reusable button) it should go to the global components folder.
  - If the component is used across a specific segment of the application, it should go to a local components folder, so it's "not exposed" to the whole application
- Ensure that components are reusable and follow the single responsibility principle.
- Always add types to component props. If they aren't self-explanatory, use JSDoc on them to explain what are them about
- Include appropriate unit tests to components if needed

## Committing Code

The project has commitlint configured with `husky.js`. It means, it will only accept commit messages written in conventional commit format. You should also consider the following:

- Write meaningful commit messages that accurately describe the changes made.
- Keep commits focused and avoid including unrelated changes in a single commit.
- Use imperative language in commit messages (e.g., "Fix bug" instead of "Fixed bug").
- Reference relevant issues or pull requests in commit messages using the appropriate syntax.
