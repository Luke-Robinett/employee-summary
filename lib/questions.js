module.exports.mgrQuestions =
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
 ];
