let money = prompt('Ваш месячный доход?', '30000');
console.log(typeof money);
let income = 'Макдональдс';
console.log(typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, девушка, комуналка, еда, дорога до учёбы');
console.log(addExpenses.length);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);
let mission = 30000000; 
let period = 12; 
console.log(`Период равен ${period} месяцев.`);
console.log(`Цель заработать ${mission} рублей.`);
console.log(addExpenses.toLocaleLowerCase().split(', '));
let expenses1 = prompt('Введите обязательную статью расходов?', 'девушка');
let amount1 = prompt('Во сколько это обойдется?', '5000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'интернет, комуналка');
let amount2 = prompt('Во сколько это обойдется?', '7000');
let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
if (isNaN(budgetMonth)) {
    console.log('Что-то нетак. Перепройдите опрос.');
} else {
    console.log('Бюджет на месяц: ', budgetMonth);
    console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);
    let budgetDay = budgetMonth / 30;
    console.log('Бюджет на день: ', Math.floor(budgetDay));
    if (budgetDay === 1200) {
        console.log('Ух ты! почти высокий уровень дохода.');
    } else if (budgetDay === 600) {
        console.log('Поздровляю, почти средний уровень дохода.');
    } 
    else if (budgetDay === 0) {
        console.log(' Как вы выживаете???');}
    else if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay < 1200 && budgetDay > 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 0) {
        console.log('Что то пошло не так');
    } else {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
}