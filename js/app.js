function getInputValue(inputId) {
    // expenses
    const inputField = document.getElementById(inputId);
    const inputAmount = parseInt(inputField.value);
    inputField.value = '';
    return inputAmount;
}


// calculate button handling
document.getElementById('calculate-button').addEventListener('click', function () {
    // income
    const income = getInputValue('income-amount');
    // food
    const foodExpense = getInputValue('food-expense');
    // rent expenses
    const rentExpense = getInputValue('rent-expense');
    // clothes expenses
    const clothesExpense = getInputValue('clothes-expense');

    if (income >= 0 && foodExpense >= 0 && rentExpense >= 0 && clothesExpense >= 0) {
        const totalExpenses = foodExpense + rentExpense + clothesExpense;
        if (totalExpenses > income) {
            const notifyMessage = document.getElementById('notification');
            const totalExpensesDisplay = document.getElementById('total-expenses');
            totalExpensesDisplay.innerText = '0';
            const balanceDisplay = document.getElementById('balace-display');
            balanceDisplay.innerText = '0';
            return notifyMessage.innerText = 'You have not enough income';
        }
        else {
            const totalExpensesDisplay = document.getElementById('total-expenses');
            totalExpensesDisplay.innerText = totalExpenses;

            // balance
            const balance = income - totalExpenses;
            const balanceDisplay = document.getElementById('balace-display');
            balanceDisplay.innerText = balance;
        }
        // error message
        const notifyMessage = document.getElementById('notification');
        notifyMessage.innerText = '';
    }
    else {
        const totalExpensesDisplay = document.getElementById('total-expenses');
        totalExpensesDisplay.innerText = '0';
        const balanceDisplay = document.getElementById('balace-display');
        balanceDisplay.innerText = '0';
        // error message
        const notifyMessage = document.getElementById('notification');
        notifyMessage.innerText = 'Please give all the correct input';
    }
});

// save button handling
document.getElementById('save-button').addEventListener('click', function () {
    // saving amounts
    const savingAmountsPercentage = getInputValue('saving-amount-percentage');
    const income = getInputValue('income-amount');
    const savingAmountsCalculation = (savingAmountsPercentage * income) / 100;
    const savingAmountsDisplay = document.getElementById('saving-amount');
    savingAmountsDisplay.innerText = savingAmountsCalculation;

    // remaining balance
    const foodExpense = getInputValue('food-expense');
    const rentExpense = getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const balance = income - totalExpenses;

    const remainingBalanceCalculation = balance - savingAmountsCalculation;
    const remainingBalanceDisplay = document.getElementById('remaining-balance');
    remainingBalanceDisplay.innerText = remainingBalanceCalculation;
})