#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



const currency: any = {
    "USD": 1, //Base Currency
    "KWD": 0.31, //Kuwait Dinar
    "BHD": 0.38, //Bahraini Dinar
    "OWD": 0.38, //Omani Dinar
    "GBP": 0.79, //Pound
    "EUR": 0.92, //Euro
    "CHF": 1.01, //Swiss Franc
    "BND": 1.35, //Brunei Dollar
    "SGD": 1.35, //Singapore Dollar
    "CAD": 1.36, //Canadian Dollar
    "AUD": 1.44, //Australian Dollar
    "NZD": 1.66, //New Zealand Dollar
    "QAR": 3.64, //Qatar Riyal
    "AED": 3.67, //Emirati Dirham
    "SAR": 3.75, //Saudi Riyal
    "MYR": 4.72, //Malaysian Ringgit
    "CNY": 6.41, //Chinese Yuan
    "TRY": 32.03, //Turkish lira
    "THB": 36.58, //Thai Baht
    "INR": 78.29, //Indian Rupee
    "BDT": 109.74, //Bangladesh Taka
    "JPY": 151.61, //Japanese Yen
    "PKR": 277.54, //Pakistani Rupee
    "LKR": 298.50, //Sri Lanka Rupee
    "SDG": 586.00, //Sudanese Pound
    "SOS": 572.00, //Somali Shilling
    "KRW": 1351.27, //South Korean Won
}


let userAnswer = await inquirer.prompt([
    {
     
     name: "from",
     message: "Select From Currency:",
     type: "list",
     choices: ["USD", "GBP", "EUR", "CHF", "SGD", "CAD", "AUD", "NZD", "CNY", "TRY", "INR", "JPY", "PKR", "KRW"]

    },
    {
        name: "to",
        message: "Select To Currency:",
        type: "list",   
        choices: ["USD", "GBP", "EUR", "CHF", "SGD", "CAD", "AUD", "NZD", "CNY", "TRY", "INR", "JPY", "PKR", "KRW"]
    },
    {
        name: "amount",
        message: "Enter Amount:",
        type: "number"
    }
])

let fromAmount= currency[userAnswer.from];
let toAmount= currency[userAnswer.to];
let amount= userAnswer.amount;
let baseAmount = amount / fromAmount; //USD Base Currency
let convertedAmount = baseAmount * toAmount; //Converted Amount

console.log(chalk.blueBright("Converted Amount:", convertedAmount));

