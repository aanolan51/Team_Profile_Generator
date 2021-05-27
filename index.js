const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./lib/generateHTML');


//Create an array for all generated employees to be stored in:
let employeeArray = [];

//Function to create the new intern employee:
function createManager(){
    let managerQuestions = [
        {
          type: "input",
          name: "name",
          message: "Enter Manager's Name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter Manager's Employee id:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter Manager's Email:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter Manager's office phone number:",
        },
      ];
    inquirer.prompt(managerQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Manager and push to the employeeArray:
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager");
        employeeArray.push(newManager);
        console.log(employeeArray);
        //use recursion to run the createTeam function again until user is done building their team.
        createTeam();
    });   
}

//Function to create the new intern employee:
function createEngineer(){
    let engineerQuestions = [
        {
          type: "input",
          name: "name",
          message: "Enter Engineer's Name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter Engineer's Employee id:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter Engineer's Email:",
        },
        {
          type: "input",
          name: "gitHub",
          message: "Enter Engineer's gitHub username:",
        },
      ];
    inquirer.prompt(engineerQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Engineer and push to the employeeArray:
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub, "Engineer");
        employeeArray.push(newEngineer);
        console.log(employeeArray);
        //use recursion to run the createTeam function again until user is done building their team.
        createTeam();
    });   
}

//Function to create the new intern employee:
function createIntern(){
    let internQuestions = [
        {
          type: "input",
          name: "name",
          message: "Enter Intern Name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter Intern employee id:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter Intern Email:",
        },
        {
          type: "input",
          name: "school",
          message: "Enter Intern school:",
        },
      ];
    inquirer.prompt(internQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Intern and push to the employeeArray:
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern");
        employeeArray.push(newIntern);
        console.log(employeeArray);
        //use recursion to run the createTeam function again until user is done building their team.
        createTeam();
    });   
};

//Create the function to add new team members:
function createTeam(){
    inquirer.prompt([{
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: ["manager", "engineer", "intern", "I'm done building my team!"]
      }
    ])
    //use the {employeeRole} in order to pull the selected input from the prompt of name: "employeeRole"
    .then(({employeeRole})=>{
        switch(employeeRole){
            case "manager": 
                createManager();
                break;
            case "engineer": 
                createEngineer();
                break;
            case "intern": 
                createIntern();
                break;
            case "I'm done building my team!":
              
              //Pull in the generateHTML function javascript and run it with the array that each new employee has been saved into: 
                let generatedHTML = generateHTML(employeeArray);
                console.log(generatedHTML);
                fs.writeFile('./dist/test12.html', generatedHTML, function (err){
                  if (err) {
                    console.error(err)
                    return
                  }
                });
                break;
            }
        }
    );
};





createTeam();

//Create the function that will pull the mainBody.html template, read it, and then join the new HTML and write to a new file:
              //data is the contents of the file being read utf8 to allow to be read in HTML syntax. 
              // fs.readFile('./src/mainBody.html', 'utf8', function thenWrite(err, data) {
              //   if (err) {
              //       throw err;
              //   }
              //   //Split the mainBody at the <div></div> place holder:
              //   const createdHTML = generateHTML(employeeArray);
              //   const contentArray = data.split("<div></div>");
              //   console.log(contentArray);
              //   const joinArray = contentArray.join(createdHTML);
              //   console.log(joinArray);
              // });
