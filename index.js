const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./lib/generateHTML');
const { exit } = require("process");

//Validation function to test if input has been entered:
function validateInput(input){
  if (input == '') {
    // Pass the return value in the done callback
    return 'You need to provide input.';
   } else{
        return true
    }
};

//Create an array for all generated employees to be stored in:
let employeeArray = [];

//Function to create the new intern employee:
function createManager(){
    let managerQuestions = [
        {
          type: "input",
          name: "name",
          message: "Enter Manager's Name:",
          validate: validateInput,
        },
        {
          type: "input",
          name: "id",
          message: "Enter Manager's Employee id:",
          validate: validateInput,         
        },
        {
          type: "input",
          name: "email",
          message: "Enter Manager's Email:",
          validate: validateInput,        
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter Manager's office phone number:",
          validate: validateInput,         
          },
      ];
    inquirer.prompt(managerQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Manager and push to the employeeArray:
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager");
        employeeArray.push(newManager);
        // console.log(employeeArray);
        //use recursion to run the createTeam function again until user is done building their team. createTeam only includes the engineer, intern
        //and end options so that you cannot have multiple managers on the team. This could be changed though by adding a manager option
        //back into the createTeam function.
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
          validate: validateInput,
        },
        {
          type: "input",
          name: "id",
          message: "Enter Engineer's Employee id:",
          validate: validateInput,
        },
        {
          type: "input",
          name: "email",
          message: "Enter Engineer's Email:",
          validate: validateInput,
        },
        {
          type: "input",
          name: "gitHub",
          message: "Enter Engineer's gitHub username:",
          validate: validateInput,
        },
      ];
    inquirer.prompt(engineerQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Engineer and push to the employeeArray:
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub, "Engineer");
        employeeArray.push(newEngineer);
        // console.log(employeeArray);
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
          validate: validateInput,
        },
        {
          type: "input",
          name: "id",
          message: "Enter Intern employee id:",
          validate: validateInput,
        },
        {
          type: "input",
          name: "email",
          message: "Enter Intern Email:",
          validate: validateInput,
        },
        {
          type: "input",
          name: "school",
          message: "Enter Intern school:",
          validate: validateInput,
        },
      ];
    inquirer.prompt(internQuestions).then(answers =>{
        //using the answers from the prompt, build the subclass Intern and push to the employeeArray:
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern");
        employeeArray.push(newIntern);
        // console.log(employeeArray);
        //use recursion to run the createTeam function again until user is done building their team.
        createTeam();
    });   
};

//Create the function to add new team members:
// function createTeam(){
//     inquirer.prompt([{
//         type: "list",
//         name: "employeeRole",
//         message: "What is the employee's role?",
//         choices: ["manager", "engineer", "intern", "I'm done building my team!"]
//       }
//     ])
//     //use the {employeeRole} in order to pull the selected input from the prompt of name: "employeeRole"
//     .then(({employeeRole})=>{
//         switch(employeeRole){
//             case "manager": 
//                 createManager();
//                 break;
//             case "engineer": 
//                 createEngineer();
//                 break;
//             case "intern": 
//                 createIntern();
//                 break;
//             case "I'm done building my team!":
              
//               //Pull in the generateHTML function javascript and run it with the array that each new employee has been saved into: 
//                 let generatedHTML = generateHTML(employeeArray);
//                 console.log(generatedHTML);
//                 fs.writeFile('./dist/test12.html', generatedHTML, function (err){
//                   if (err) {
//                     console.error(err)
//                     return
//                   }
//                 });
//                 break;
//             }
//         }
//     );
// };


//Create the function to add new team members:
async function createTeam(){
    await inquirer.prompt([{
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: ["engineer", "intern", "I'm done building my team!"]
      }
    ])
    //use the {employeeRole} in order to pull the selected input from the prompt of name: "employeeRole"
    .then(({employeeRole})=>{
        switch(employeeRole){
            case "engineer": 
                createEngineer();
                break;
            case "intern": 
                createIntern();
                break;
            case "I'm done building my team!":
              //Ask for file name input:
              let fileNameQuestion = [{ type: "input",
              name: "file",
              message: "What do you want to name the file? No special characters!",}];
              inquirer.prompt(fileNameQuestion).then(answer =>{
                const fileName = answer.file;
                const file = fileName.split(" ").join("");
                const finalFile = './dist/'+file+'.html'
                // console.log(finalFile);
                 //Pull in the generateHTML function javascript and run it with the array that each new employee has been saved into: 
                 let generatedHTML = generateHTML(employeeArray);
                 console.log("Generating HTML Page!");
                 //Write the file with the inputed filename:
                 fs.writeFile(finalFile, generatedHTML, function (err){
                   if (err) {
                     console.error(err)
                     return
                   }
                 });
              });
                break;
            }
        }
    );
};

//Function to start building the team. Only provides two options at first, requiring the person to put the manager in first.
function startBuildingTeam(){
  inquirer.prompt([{
      type: "list",
      name: "start",
      message: "Start building your team!",
      choices: ["Manager", "Quit"]
    }
  ])
  //use the {start} in order to pull the selected input from the prompt of name: "start"
  .then(({start})=>{
      switch(start){
          case "Manager": 
              createManager();             
              break;

          case "Quit": 
          //exit the program without building a team.
              process.exit(0);
          }
      }
  );
};

//Run the startBuildingTeam function:
startBuildingTeam();