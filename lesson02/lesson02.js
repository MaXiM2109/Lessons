let money = 300000;
let income = 'Макдональдс';
let addExpenses = 'интернет, девушка, еда, дорога до учёбы';
let deposit = true;
let mission = 30000000; 
let period = 12; 

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев.`);
console.log(`Цель заработать ${mission} рублей.`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

const budgetDay = money / 30; 
console.log(budgetDay);