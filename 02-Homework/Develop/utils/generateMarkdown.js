// TODO: Create a function that returns a licenseTitle badge based on which licenseTitle is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseTitle) {
if (licenseTitle === "MIT"){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"


}
else if (licenseTitle === "Mozilla Public License 2.0"){
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
}
else if (licenseTitle === "The Unilicense"){
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}
else {
  return ""
}

}

// TODO: Create a function that returns the licenseTitle link
// If there is no licenseTitle, return an empty string
function renderLicenseLink(licenseTitle) {
  if (licenseTitle === "MIT"){
    return "(https://opensource.org/licenses/MIT)"
  }
  else if (licenseTitle === "Mozilla Public License 2.0"){
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (licenseTitle === "The Unilicense"){
    return "(http://unlicense.org/)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the licenseTitle section of README
// If there is no licenseTitle, return an empty string
function renderLicenseSection(licenseTitle) {
  if (licenseTitle === "MIT"){
    return "The link below takes you to the license page for the MIT license."
  }
  else if (licenseTitle === "Mozilla Public License 2.0"){
    return "the link below takes you to the license page for the MPL license."
  }
  else if (licenseTitle === "The Unilicense"){
    return "the link below takes you to the license page for the Unilicence."}
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Description
 ${data.projectPurpose}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#licenseTitle)
  ## Installation
  ${data.functionDescription}
  ## Usage
  ${data.installationDescription}
      \`\`\`md
      ![alt text](assets/images/screenshot.png)
      \`\`\`
  ## Credits
  ${data.authors}
  ## License
  ${renderLicenseSection(data.licenseTitle)}
  ${renderLicenseLink(data.licenseTitle)}
  
  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  ${renderLicenseBadge(data.licenseTitle)}
  ## Features
 ${data.functionDescription}
  ## How to Contribute
  ${data.testDescription}



  ## Tests
  

`;
}

module.exports = generateMarkdown;
