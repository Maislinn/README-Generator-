// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPLv3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      licenseBadge = "";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case "MIT":
      licenseLink = "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      licenseLink = "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPLv3":
      licenseLink = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      licenseLink = "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
    if (license == "MIT") {
      return "This project is licensed under the ${license} license.";
    } 
    if (license == "Apache 2.0") {
      return "This project is licensed under the ${license} license.";
    }
    if (license == "GNU GPLv3") {
      return "This project is licensed under the ${license} license.";
    }
    if (license == "BSD 3") {
      return "This project is licensed under the ${license} license.";
    }
    if (license == "None") {
      return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Features
  ${data.Features}

  ## Credits
  ${data.Credits}

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ## Badges
  ${data.Badges}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  If you have any questions, please contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
