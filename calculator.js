#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let calculator = await inquirer.prompt([
    {
        name: "number1",
        type: "number",
        message: "Enter your first number",
    },
    {
        name: "number2",
        type: "number",
        message: "Enter your second number",
    },
    {
        name: "operator",
        type: "list",
        message: "choose any one of these operator",
        choices: ["+", "-", "*", "/", "%", "**"],
    },
]);
if (calculator.operator === "+") {
    console.log(chalk.blueBright(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 + calculator.number2));
}
else if (calculator.operator === "-") {
    console.log(chalk.yellowBright(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 - calculator.number2));
}
else if (calculator.operator === "*") {
    console.log(chalk.red(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 * calculator.number2));
}
else if (calculator.operator === "/") {
    console.log(chalk.greenBright(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 / calculator.number2));
}
else if (calculator.operator === "%") {
    console.log(chalk.bgGray(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 % calculator.number2));
}
else if (calculator.operator === "**") {
    console.log(chalk.bgMagentaBright(calculator.number1, calculator.operator, calculator.number2, "=", calculator.number1 ** calculator.number2));
}
else {
    console.log(chalk.bgCyanBright("please enter your correct operation"));
}
;
