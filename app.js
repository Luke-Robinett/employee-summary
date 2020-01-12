const inquirer = require("inquirer");
inquirer.registerPrompt("recursive", require("inquirer-recursive"));
const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = require("./lib/Team");

// Gather user input
function getEmployees() {
 inquirer.prompt(questions.mgrQuestions)
 .then(mgrAnswers => {
  const devTeam = new Team(new Manager());
  devTeam.importManager(mgrAnswers);
  inquirer.prompt(questions.empQuestions)
  .then(empAnswers => {
   devTeam.importEmployees(empAnswers.employees);
   console.log(devTeam);
  });
 });
}

// Build an array of Employees based on answers provided by the user
function getTeam(mgrAnswers, empAnswers) {
 const team =
 [
  new Manager(
   mgrAnswers.name,
   mgrAnswers.id,
   mgrAnswers.email,
   mgrAnswers.officeNumber
  )
 ];
 empAnswers.employees.forEach(emp => {
  if (emp.role === "Intern") {
   team.push(
    new Intern(
     emp.name,
     emp.id,
     emp.email,
     emp.school
    )
   );
  } else {
   team.push(
    new Engineer(
     emp.name,
     emp.id,
     emp.email,
     emp.github
    )
   );
  }
 });

 return team;
}

// Start the app by prompting for info
getEmployees();
