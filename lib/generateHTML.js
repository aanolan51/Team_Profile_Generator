function generateHTML(teamArray){
    var newManager =``;
    var newEngineer = ``;
    var newIntern = ``;
    teamArray.forEach(member => {
        if(member.role == 'Manager'){
            // console.log("I have a manager!");
            newManager = newManager + `\n
            <div class="container-md d-flex justify-content-center" id= "manager">
                <div class="card shadow" style="width: 20rem;">
                    <div class="card-header" id= "managerHeader">
                        <h2 class="card-title" id = "managerName">${member.name}</h2>
                        <h3 class = "card-subtitle mb-2 text-muted"><i class="fas fa-users"></i> ${member.role}</h3>
                    </div>
                    <div class="card-body bodyBackground">
                        <p class="card-text">Employee ID: ${member.id}</p>
                        <p class="card-text">Office Number: ${member.officeNumber}</p>
                        <a href="mailto:${member.email}" class="card-link emailLink" >Email: ${member.email}</a>
                    </div>
                </div>
            </div>`;
            // console.log(newManager);

        }
        if(member.role == 'Engineer'){
            // console.log("I have an engineer!");
            newEngineer = newEngineer + `\n
            <div class="col mt-3 mb-3" id = "engineer">
                <div class="card shadow h-100">
                    <div class="card-header" id= "engineerHeader">
                        <h4 class="card-title">${member.name}</h4>
                        <h5 class = "card-subtitle mb-2 text-muted"><i class="fas fa-laptop-code"></i> ${member.role}</h5>
                    </div>
                    <div class="card-body bodyBackground">
                        <p class="card-text">Employee ID: ${member.id}</p>
                        <a href="mailto:${member.email}" class="card-link emailLink">Email: ${member.email}</a>
                        <div class = "mt-3">
                            <a href="https://github.com/${member.gitHub}" class="btn btn-primary buttonFormat" target="_blank">GitHub Profile</a>
                        </div>             
                    </div>
                </div>
            </div>`;
        }
        if(member.role == 'Intern'){
            // console.log("I have an intern!");
            newIntern = newIntern + `\n
            <div class="col mt-3 mb-3" id = "intern">
                <div class="card shadow h-100">
                    <div class="card-header" id= "internHeader">
                        <h4 class="card-title">${member.name}</h4>
                        <h5 class = "card-subtitle mb-2 text-muted"><i class="fas fa-graduation-cap"></i> ${member.role}</h5>
                    </div>
                  <div class="card-body bodyBackground">
                    <p class="card-text">Employee ID: ${member.id}</p>
                    <p class="card-text">School: ${member.school}</p>
                    <a href="mailto:${member.email}" class="card-link emailLink">Email: ${member.email}</a>                    
                  </div>
                </div>
            </div>`;
        }     
    }); return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" 
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Nobile&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>

    <body>
        <header>
            <div class = "p-5 mb-4 bg-dark rounded-3">
                <div class="h-100 p-3 text-white text-center ">
                    <h1 id="mainHeader">Welcome to the Team Profile!</h1>
                </div>
            </div>  
        </header>` 
        + newManager + 
        `<div class="container-md">
            <div class="row row-cols-1 row-cols-md-3 g-4">` + 
            newEngineer + newIntern +
        `    </div>
        </div>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" 
            integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
            <script src= "../index.js"></script>
    </body>
    </html>`;      
};

module.exports = generateHTML;