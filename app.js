const inquirer = require("inquirer");
inquirer.registerPrompt("recursive", require("inquirer-recursive"));
const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// App entry point
function init() {
 getEmployees();
}

// Gather user input
function getEmployees() {
 inquirer.prompt(questions.mgrQuestions)
 .then(mgrAnswers => {
  console.log(mgrAnswers);
  inquirer.prompt(questions.empQuestions)
  .then(empAnswers => {
   console.log(empAnswers);
  });
 });
}

// Start the app
init();
