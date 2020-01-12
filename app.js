const inquirer = require("inquirer");
inquirer.registerPrompt("recursive", require("inquirer-recursive"));
const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = require("./lib/Team");
const createHTML = require("./lib/createHTML");

// App entry point
function init() {
 // First prompt user for manager's info
 inquirer.prompt(questions.mgrQuestions)
 .then(mgrAnswers => {
  // Create a new Team object and populate it with the manager's info
  const devTeam = new Team(new Manager());
  devTeam.importManager(mgrAnswers);

  // Next, prompt user to enter info about employees
  inquirer.prompt(questions.empQuestions)
  .then(empAnswers => {
   // Use these answers to add employees to the Team object
   devTeam.importEmployees(empAnswers.employees);
   
   // Finally, call the createHTML method, passing it the devTeam object
   createHTML(devTeam);
  });
 });
}

// Start the app
init();
