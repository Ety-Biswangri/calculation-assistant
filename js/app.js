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

    if (income > 0 && foodExpense > 0 && rentExpense > 0 && clothesExpense > 0) {
        const totalExpenses = foodExpense + rentExpense + clothesExpense;
        const totalExpensesDisplay = document.getElementById('total-expenses');
        totalExpensesDisplay.innerText = totalExpenses;
        // balance
        const balance = income - totalExpenses;
        const balanceDisplay = document.getElementById('balace-display');
        balanceDisplay.innerText = balance;


        /* if (totalExpenses < income) {
            // total expenses

        }
        else if (totalExpenses > income) {
            const notifyMessage = document.getElementById('notification');
            notifyMessage.innerText = 'Your Income is not enough';
        } */

        const notifyMessage = document.getElementById('notification');
        notifyMessage.innerText = '';
    }

    else {
        const totalExpensesDisplay = document.getElementById('total-expenses');
        totalExpensesDisplay.innerText = 0;
        const balanceDisplay = document.getElementById('balace-display');
        balanceDisplay.innerText = 0;

        const notifyMessage = document.getElementById('notification');
        notifyMessage.innerText = 'Please give the correct input';
    }



});

document.getElementById('save-button').addEventListener('click', function () {
    const savingAmountsInput = document.getElementById('saving-amount');
    const savingAmounts = parseFloat(savingAmountsInput.value);
    savingAmountsInput.value = '';
})