<h1>WORKFLOW</h1>
[![Workflow](https://github.com/DarioDeLaFuente/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/DarioDeLaFuente/social-media-client/actions/workflows/pages.yml)

# Description

The Workflow repository streamlines development processes by integrating scripts and actions that validate code quality. 
With development tools, we make sure the code meets the required rules for linting and semantics.
Before any code gets committed to the main branch, tests are run to prevent potential issues.

# Content

- **Linting:** Validate the consistency and syntax of your code.

- **Building:** Process source files to produce outputs ready for deployment.

- **Local Development:** Watch for file changes and instantly see the effects.

- **Unit & E2E Testing:** Thoroughly test the code to ensure functionality.

# How to Install

  1. Clone repository
  2. bash `npm install`


# How To Use

Available scripts to lint, build, start, or test the project:

- **Lint the code:** `npm run lint`

- **Build the project:** `npm run build`

- **Start the development server:** `npm run start`

- **Testing:**

   - Unit test `npm run test-unit`

   - E2E test `npm run test-e2e-cli`

   - Or use E2E test in browser giu `npm run cypress-open`

# License

This project is licensed under the ISC license.