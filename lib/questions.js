module.exports.mgrQuestions =
 [
  {
   message: "Manager's name?(first last)",
   name: "name",
   validate: name => /^[a-z]+( [a-z]+)*$/i.test(name) ? true : "Invalid name."
  },
  {
   message: "Manager's ID?",
   name: "id",
   validate: id => /^\d+$/.test(id) ? true : "Invalid ID."
  },
  {
   message: "Manager's email address?",
   name: "email",
   validate: email => /^[a-z0-9\.\-\_]+@[a-z0-9\-\_]+\.[a-z0-9]+$/i.test(email) ? true : "Invalid email."
  },
  {
   message: "Manager's office number?",
   name: "officeNumber",
   validate: officeNumber => /^\d+$/.test(officeNumber) ? true : "Invalid office number."
  },
 ];

module.exports.empQuestions =
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
      choices: ["Intern", "Engineer"]
     },
     {
      message: "Employee's name?",
      name: "name",
      validate: name => /^[a-z]+( [a-z]+)*$/i.test(name) ? true : "Invalid name."
    },
     {
      message: "Employee's ID?",
      name: "id",
      validate: id => /^\d+$/.test(id) ? true : "Invalid ID."
     },
     {
      message: "Employee's email?",
      name: "email",
      validate: email => /^[a-z0-9\.\-\_]+@[a-z0-9\-\_]+\.[a-z0-9\-\_]+$/i.test(email) ? true : "Invalid email."
     },
     {
      when: answ => (answ.role === "Engineer"),
      message: "GitHub user name?",
      name: "github",
      validate: github => /^\w$/i.test(github) ? true : "Invalid GitHub profile name."
     },
     {
      when: answ => (answ.role === "Intern"),
      message: "Intern's school?",
      name: "school"
      validate: school => /^[a-z]+( [a-z]+)*$/i.test(name) ? true : "Invalid name."
     }
    ]
  }
 ];
