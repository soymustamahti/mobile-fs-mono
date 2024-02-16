const inquirer = require("inquirer");
const { execSync } = require("child_process");

const prompt = inquirer.createPromptModule();

prompt([
  {
    name: "project",
    message: "Quel projet souhaitez-vous démarrer ?",
    choices: ["back", "native"],
    default: "native",
    type: "list",
  },
]).then(({ project }) => {
  execSync(`cd ./apps/${project} && yarn start:dev`, {
    stdio: "inherit",
  });
});
