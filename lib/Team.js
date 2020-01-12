const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// Class that defines a team. A team consists of a manager and their employees
class Team {
 constructor(manager) {
  this.manager = manager;
  this.employees = [];
 }

 getManager() {
  return this.manager;
 }

 setManager(newManager) {
  this.manager = newManager;
 }

 addEmployee(newEmployee) {
  this.employees.push(newEmployee);
 }

 getEmployees() {
  return this.employees;
 }

 // These two functions import data from inquirer answer objects

 importManager(answers) {
  this.manager.name = answers.name;
  this.manager.id = answers.id;
  this.manager.email = answers.email;
  this.manager.officeNumber = answers.officeNumber;
 }

 importEmployees(answersArray) {
  const context = this;
  answersArray.forEach((answers, i, arr, context) => {
   switch (answers.role) {
    case "Engineer":
     this.addEmployee(
      new Engineer(
       answers.name,
       answers.id,
       answers.email,
       answers.github
      )
     );
     break;
    case "Intern":
     this.addEmployee(
      new Intern(
       answers.name,
       answers.id,
       answers.email,
       answers.school
      )
     );
     break;
    default:
     break;
   }
  });
 }
}

module.exports = Team;