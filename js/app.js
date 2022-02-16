document.getElementById('calculate-button').addEventListener('click', function () {
    // income
    const incomeInput = document.getElementById('income-amount');
    const income = parseFloat(incomeInput.value);
    incomeInput.value = '';

    // food expenses
    const foodExpenseInput = document.getElementById('food-expense');
    const foodExpense = parseFloat(foodExpenseInput.value);
    foodExpenseInput.value = '';

    // rent expenses
    const rentExpenseInput = document.getElementById('rent-expense');
    const rentExpense = parseFloat(rentExpenseInput.value);
    rentExpenseInput.value = '';

    // clothes expenses
    const clothesExpenseInput = document.getElementById('clothes-expense');
    const clothesExpense = parseFloat(clothesExpenseInput.value);
    clothesExpenseInput.value = '';

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
    console.log('loly')
})