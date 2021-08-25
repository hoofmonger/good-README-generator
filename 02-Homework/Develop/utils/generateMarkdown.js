// TODO: Create a function that returns a licenseTitle badge based on which licenseTitle is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseTitle) {
if (licenseTitle === "MIT"){
  return "https://img.shields.io/badge/MIT-hello%20world-blue"
}
else if (licenseTitle === "Mozilla Public License 2.0"){
  return "https://img.shields.io/badge/Mozilla%20-Public%20License-blue"
}
else if (licenseTitle === "The Unilicense"){
  return "https://img.shields.io/badge/The%20-Unilicense-blue"
}
else {
  return ""
}

}

// TODO: Create a function that returns the licenseTitle link
// If there is no licenseTitle, return an empty string
function renderLicenseLink(licenseTitle) {
  if (licenseTitle === "MIT"){
    return "https://img.shields.io/badge/MIT-hello%20world-blue"
  }
  else if (licenseTitle === "Mozilla Public License 2.0"){
    return "https://img.shields.io/badge/Mozilla%20-Public%20License-blue"
  }
  else if (licenseTitle === "The Unilicense"){
    return "https://img.shields.io/badge/The%20-Unilicense-blue"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the licenseTitle section of README
// If there is no licenseTitle, return an empty string
function renderLicenseSection(licenseTitle) {
  if (licenseTitle === "MIT"){
    return "please google the license, i'm not typing out the license text in its entirety some of these are massive"
  }
  else if (licenseTitle === "Mozilla Public License 2.0"){
    return "please google the license, i'm not typing out the license text in its entirety some of these are massive"
  }
  else if (licenseTitle === "The Unilicense"){
    return "please google the license, i'm not typing out the license text in its entirety some of these are massive"}
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
