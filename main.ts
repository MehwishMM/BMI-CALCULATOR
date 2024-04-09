import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow.underline('\t \t "welcome to bmi calculator "\n '))
const userInput =await inquirer.prompt([
{ 
   name:"weight",
   message:"Enter your weight in kg",
   type:"number"

},
{
    name:"height",
    message:"Enter your height in meter",
    type:"number",
},
]);
const weight=userInput.weight;
const height = userInput.height;
const bmi=weight/(height*height);
console.log("according to your height and weight your bmi is :",chalk.bgBlue(bmi));
if (bmi<18.5){
   console.log(chalk.yellow.underline ("you are underweight")) ;
}else if (bmi <25){
    console.log(chalk.yellow.underline ("you are in normal category")) ;   
}else if (bmi<38){
    console.log(chalk.yellow.underline ("you are overweight")) ;
}
else{
    console.log(chalk.yellow.underline ("your category is obses")) ;
}