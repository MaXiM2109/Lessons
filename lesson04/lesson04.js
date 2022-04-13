'use strict';
let money = +prompt('Ваш месячный доход?', 30000);
let income = 'Макдональдс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','интернет, девушка, комуналка, еда, дорога до учёбы');
console.log(addExpenses.length);
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 30000000; 
let period = 12;
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей`);
let expenses1 = prompt('Введите обязательную статью расходов?', 'интернет, девушка');
let amount1 = +prompt('Во сколько это обойдется?', 5000);
let expenses2 = prompt('Введите обязательную статью расходов?', 'комуналка, еда, дорога до учёбы');
let amount2 = +prompt('Во сколько это обойдется?', 10000);

const getExpensesMonth = () => {
    if (!amount1) { amount1 = 0; }
    if (!amount2) { amount2 = 0; }
    return amount1 + amount2;
};

const getAccumulatedMonth = (moneyMonth, expensesMonth) => {
    if (!moneyMonth) { moneyMonth = 0; }
    return moneyMonth - expensesMonth;
};

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());


const getTargetMonth = (mission, budgetMonth) => {
    return Math.ceil(mission / budgetMonth);
};


const budgetDay = accumulatedMonth / 30;

console.log(getExpensesMonth());
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log(`Цель будет достигнута за: ${getTargetMonth(mission, accumulatedMonth)} месяцев`);
console.log(Math.floor(budgetDay));

const getStatusIncome = (budget) => {
    return isNaN(budget) ? 'Что-то не так. Перепройдите опрос.' :
        (budget < 0) ? 'Что то пошло не так' :
        (budget == 0) ? 'Как вы выживаете???' :
        (budget < 600) ? 'К сожалению у вас уровень дохода ниже среднего' :
        (budget === 600) ? 'Поздровляю, почти средний уровень дохода.' :
        (budget < 1200) ? 'У вас средний уровень дохода' :
        (budget === 1200) ? 'Ух ты! почти высокий уровень дохода.' :
        'У вас высокий уровень дохода';
};
console.log(getStatusIncome(budgetDay));