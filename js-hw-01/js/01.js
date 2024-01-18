
const salary = parseFloat(prompt("Введість розмір  вашої зарплати"));
console.log(salary);
const bonus = 0.15 * salary;
console.log(bonus);
const amount = salary + bonus;
console.log(amount);
const taxes = 0.1 * amount;
console.log(taxes);
const spentInTheStore = 190;
const balance = salary + bonus - taxes - spentInTheStore;
console.log(balance);

alert("Залишок від зарплати: " + balance);


