// TODO: Create a function that returns a licenseTitle badge based on which licenseTitle is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseTitle) {}

// TODO: Create a function that returns the licenseTitle link
// If there is no licenseTitle, return an empty string
function renderLicenseLink(licenseTitle) {}

// TODO: Create a function that returns the licenseTitle section of README
// If there is no licenseTitle, return an empty string
function renderLicenseSection(licenseTitle) {}

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
  ${renderLicenseBadge(data.licenseTitle)}
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
