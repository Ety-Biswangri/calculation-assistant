function calculateExpenses(expenseId) {
    // food expenses
    const expenseInput = document.getElementById(expenseId);
    const expense = parseFloat(expenseInput.value);
    expenseInput.value = '';
    return expense;
}


document.getElementById('calculate-button').addEventListener('click', function () {
    // income
    const income = calculateExpenses('income-amount');

    // food
    const foodExpense = calculateExpenses('food-expense');
    // rent expenses
    const rentExpense = calculateExpenses('rent-expense');
    // clothes expenses
    const clothesExpense = calculateExpenses('clothes-expense');

    // total expenses
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const totalExpensesDisplay = document.getElementById('total-expenses');
    totalExpensesDisplay.innerText = totalExpenses;

    // balance
    const balance = income - totalExpenses;
    const balanceDisplay = document.getElementById('balace-display');
    balanceDisplay.innerText = balance;
});

document.getElementById('save-button').addEventListener('click', function () {
    const savingAmountsInput = document.getElementById('saving-amount');
    const savingAmounts = parseFloat(savingAmountsInput.value);
    savingAmountsInput.value = '';
})