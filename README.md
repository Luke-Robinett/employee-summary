# Employee Summary
## Template engine that generates employee summaries

### Overview
This Node.JS application asks the user for information about a development team, beginning with the team's manager and then each of the employees on the team. The user can enter as many or few employees as desired, and each employee can either be an intern or engineer. Once the app has gathered all needed details about the team, it dynamically generates a nicely formatted HTML page showing the org structure of the newly entered team.

### Libraries
This app utilizes the inquirer Node.JS package

### Approach
An object-oreinted approach was taken in representing the business objects and defining how they interact with one another.
#### Class Hierarchy

* Employee
  * Manager
  * Engineer
  * Intern
* Team

##### Employee (name, ID, email)
Base class from which specific employee roles are derived

###### Members
* name
* id
* email

###### Methods
* getName() - Returns the name of this employee
* getId() - Returns the ID of this employee
* getEmail() - Returns this employee's email address
* getRole() - Returns "Employee"

##### Manager(name, ID, email, officeNumber)
Subclass of Employee and offers all its members and methods, with the following additions.

###### Members
* officeNumber

###### Methods
* getOfficeNumber() - Returns this manager's office number
* getRole() - Override of base method, returns "Manager"

##### Engineer(name, ID, email, github)
Subclass of Employee and offers all its members and methods, with the following additions.

###### Members
* github

###### Methods
* getGithub() - Returns this engineer's GitHub profile name
* getRole() - Override of base method, returns "Engineer"

##### Intern(name, ID, email, school)
Subclass of Employee and offers all its members and methods, with the following additions.

###### Members
* school

###### Methods
* getSchool() - Returns the school from which this intern graduated
* getRole() - Override of base method, returns "Intern"

##### Team(manager)
A class for associating a manager with their team members.

###### Members
* manager
* employees[]

###### Methods
* getManager() - Returns the Manager object associated with this team
* setManager(newManager) - Assigns a Manager object to this team
* addEmployee(newEmployee) - Adds an Employee object to the employees array
* getEmployees() - Returns the array of employees
* importManager(answers) - Utility method that adds a new Manager object based on the supplied inquirer answers obtained from the CLI
* importEmployees(answersArray) - Utility method that adds one or more employees to the employees array based on the supplied array of inquirer answers obtained from the CLI
