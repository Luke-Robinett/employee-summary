const fs = require("fs");

function createHTML(team) {
 let html = `<!DOCTYPE html>
  <html lang="en">

  <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   <title>Dev Team Org Chart</title>
  </head>

  <body>
   <div class="container">

    <header class="my-3">
     <h1 class="text-center">Development Team</h1>
     <hr>
    </header>
    <main class="my-3">
     <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
       <div class="card bg-light rounded">
        <div class="card-body">
         <h2 class="card-title text-center">
          ${team.manager.getName()}
         </h2>
         <h3 class="card-subtitle text-center">
          ${team.manager.getRole()}
         </h3>
         <hr>
         <br>
         <p>
          <strong>Employee ID: ${team.manager.getId()}</strong>
         </p>
         <br>
         <p>
          <strong>Email: </strong>
          <a href="mailto:${team.manager.getEmail()}" class="card-link">
           ${team.manager.getEmail()}
          </a>
         </p>
        </div>
       </div>
      </div>
     </div>
     <div class="row p-3 justify-content-center">`;

 team.getEmployees().forEach(employee => {
  html +=
   `<div class="col-12 col-md-6 col-lg-4">
       <div class="card bg-light rounded">
        <div class="card-body">
         <h4 class="card-title text-center">
          ${employee.getName()}
         </h4>
         <h5 class="card-subtitle text-center">
          ${employee.getRole()}
         </h5>
         <h6>`;

  switch (employee.getRole()) {
   case "Intern":
    html += employee.getSchool();
    break;
   case "Engineer":
    html += employee.getGithub();
    break;
   default:
    break;
  }

  html += `</h6>
         <hr>
         <br>
         <p>
          <strong>Employee ID: ${employee.getId()}</strong>
         </p>
         <br>
         <p>
          <strong>Email: </strong>
          <a href="mailto:${employee.getEmail()}" class="card-link">
           ${employee.getEmail()}
          </a>
         </p>
        </div>
       </div>
      </div>
  `;
 });

 html +=
  `
     </div>
    </main>
   </div>
  </body>

  </html>`;

 // Write it to a file
 fs.writeFile(process.cwd() + "/output/team.html", html, function (err) {
  if (err) {
   console.log(err);
   return;
  }
  console.log("team.html generated!");
 });
}

module.exports = createHTML;