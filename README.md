# matomo-assignment

# Contents

[General Setup](#Setup)  
[Run Tests](#Run)  
[View Report](#Report)  


Matomo Assignment Automation Overview

# General Setup <a name="Setup"></a>

1. Make sure npm installed.

2. Clone the repository.

3. Run "npm install" from the directory.


### The directory structure <a name="Structure"></a>

```Gherkin
cypress
  + fixtures                      all test data files
      navigationWhyMatomo.json    sub menu under Why Matomo and their corresponding path
      ...
  + e2e                           test files
      ...
  + page-objects                  page objects including shared components and modals
  + reports                       mochawesome generated report html
  + support                       cypress support functions
cypress.config.json                      cypress configuration file
```

# Run Tests <a name="Run"></a>

Cypress has two main modes: an interactive mode which has a point-and-click GUI, helpful visualizations of test runs, the ability to walk forward and backward through a previously run test, and other handy things. The other mode is a CLI mode very much like a unit testing framework like Mocha.

Test videos are generated in the "videos" folder when running tests via the CLI, which you can browse later.

**Run tests in interactive mode**

1. Open your terminal and run `npx cypress open`; this will open the Cypress interactive test runner.

2. Select the feature file you wish to run. For this assignment, it is: home.cy.js

**Run tests in CLI mode**

1. Open terminal.

2. For this assignment, there is prepared npm scipts in the package.json for common use case. To run this, use `npm run test`

   "test": run matomo tests

# Run Tests <a name="Run"></a>

1. Run test.

2. View the report under **cypress/reports/html** folder.

3. Open the report `index.html` in any browser.

