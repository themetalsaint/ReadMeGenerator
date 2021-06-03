// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `* [license](#license)`;
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `### license
    This project is licensed through ${license}`;
  }
  return ""
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents


  * [Username](#username)
  * [Repo](#repo)
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Instructions](#usage)
  * [Contributions](#contributing)
  * [Testing](#tests)
  * [Licensing](#license)

  ## GitHub Username
  ${data.username}

  ## GitHub Repo
  ${data.repo}

  ## Project Title
  ${data.title}

  ## Description
  ${data.description} 

  ## Required Installation Steps
  ${data.installation}

  ## Special Insutructions and Examples
  ${data.usage}

  ## Other Contributing Developers
  ${data.contributing}

  ## Written Tests
  ${data.tests}

  ## Licensing
  ${data.license}




  `;
}

module.exports = generateMarkdown;
