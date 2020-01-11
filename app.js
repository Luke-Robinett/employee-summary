const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// App entry point
function init() {
 getEmployees();
}

// Gather user input
function getEmployees() {
 inquirer.prompt(
  [
   {
    message: "Enter manager's name",
    name: "mgrName"
   },
   {
    message: "Enter manager's ID",
    name: "mgrId"
   },
   {
    message: "Enter manager's email address",
    name: "mgrEmail"
   },
   {
    message: "Enter manager's office number",
    name: "mgrOfficeNo"
   },
   {
    message: "How many employees?",
    name: "empCount"
   }
  ]
 )
 .then(answers => {
  const mgr = new Manager(
   answers.mgrName,
   answers.mgrId,
   answers.mgrEmail,
   answers.mgrOfficeNo
  );

  console.log(mgr);
 });
}

// Start the app
init();
