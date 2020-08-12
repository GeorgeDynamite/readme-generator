const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');

function main(){
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Provide a description of your project",
            name: "projectDescription"

        },
        {
            type: "input",
            message: "What is the installation process for your project (IE: dependencies)",
            name: "installation"
        },
        {
            type: "input",
            message: "provide some instructions on how to use your project",
            name: "instruction"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "provide names of any contributors to the project. Seperate names with a comma and no space",
            name: "contributors"
        },
        {
            type: "input",
            message: "how do you run tests on this project",
            name: "tests"
        },
    ])
    .then((userResponse) => {
        const projectName = userResponse.projectName;
        const projectDescription = userResponse.projectDescription;
        const installation = userResponse.installation;
        const instruction = userResponse.instruction;
        const licenseName = userResponse.licenseName;
        const licenseUrl = userResponse.licenseUrl;
        const contributors = userResponse.contributors;
        const tests = userResponse.tests
    


var result = (`
#${projectName}
${projectDescription}
\n*[installation](#installation)
\n*[instruction](#instruction)
\n*[license](#license)
\n*[contributors](#contributors)
\n*[tests](#tests)

## installation
${installation}
## instruction
${instruction}
## license
${licenseName} at ${licenseUrl}
## contributors
${contributors}
## tests
${tests}
`)

var writeResult = fs.writeFileSync(path.join(__dirname, '../npmFolder', 'readMe.md'), result)

});
}
main()