const amountOfCredit = 200000;
const interestRate = 10;
const creditTerm = 24;
const monthlyPayment = (amountOfCredit * (interestRate + (interestRate/(1 + interestRate) * (creditTerm - 1))));
const totalLoanPayment = creditTerm * monthlyPayment;
const overPaymentOnLoan = totalLoanPayment  - amountOfCredit;
console.log(`Общая сумма выплаты по кредиту составила: ${Math.round(totalLoanPayment)} рублей.\nПереплата по кредиту составила: ${Math.round(overPaymentOnLoan)} рублей.`)