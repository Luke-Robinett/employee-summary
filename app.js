const inquirer = require("inquirer");
inquirer.registerPrompt("recursive", require("inquirer-recursive"));
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// App entry point
function init() {
 getEmployees();
}

// Gather user input
function getEmployees() {
 // First get manager info
 inquirer.prompt(
  [
   {
    message: "Manager's name?",
    name: "name"
   },
   {
    message: "Manager's ID?",
    name: "id"
   },
   {
    message: "Manager's email address?",
    name: "email"
   },
   {
    message: "Manager's office number?",
    name: "officeNumber"
   }
  ]
 )
  .then(mgrAnswers => {
   console.log(mgrAnswers);
   // Now get the info for the team members
   inquirer.prompt(
    [
     {
      type: "recursive",
      name: "employees",
      message: "Enter a new employee?",
      prompts:
       [
        {
         message: "Employee's role?",
         name: "role",
         type: "rawlist",
         choices: [ "Intern", "Engineer" ]
        },
        {
         message: "Employee's name?",
         name: "name"
        },
        {
         message: "Employee's ID?",
         name: "id"
        },
        {
         message: "Employee's email?",
         name: "email"
        },
        {
         when: answ => (answ.role === "Engineer"),
         message: "GitHub user name?",
         name: "github"
        },
        {
         when: answ => (answ.role === "Intern"),
         message: "Intern's school?",
         name: "school"
        }
       ]
     }
    ]
   ).then(empAnswers => {
    console.log(empAnswers.employees);
   });
  });
}

// Start the app
init();
