//Function that returns a license badge based on which license is passed in:
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Screenshot](#screenshot)
* [Deployment](#deployment)
* [Installation](#require)
* [Features](#features)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)

## Description
${data.description}

## Screenshot
${data.screenshot}

## Deployed Application URL
${data.link}

## Installation
${data.require}

## Features
${data.features}

## Usage
${data.usage}

## Contact-Me
* GitHub: [${data.creator}](https://github.com/${data.creator})
* Email: ${data.email}

## Contributors
${data.contributors}

## Testing
${data.test}

## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).

## License
${data.license}
`;
}

module.exports = generateMarkdown;
