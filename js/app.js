function getInputValue(inputId) {
    // inputValue
    const inputField = document.getElementById(inputId);
    const inputAmount = parseInt(inputField.value);
    // inputField.value = 0;
    return inputAmount;
}

// calculate button handling
document.getElementById('calculate-button').addEventListener('click', function () {
    // income, food, rent , clothes expenses
    const income = getInputValue('income-amount');
    const foodExpense = getInputValue('food-expense');
    const rentExpense = getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');

    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const balanceDisplay = document.getElementById('balance-display');
    const notifyMessage = document.getElementById('notification');

    if (isNaN(income) != true && isNaN(foodExpense) != true && isNaN(rentExpense) != true && isNaN(clothesExpense) != true) {

        if (income >= 0 && foodExpense >= 0 && rentExpense >= 0 && clothesExpense >= 0) {

            if (totalExpenses <= income) {
                totalExpensesDisplay.innerText = totalExpenses;
                // balance
                const balance = income - totalExpenses;
                balanceDisplay.innerText = balance;
                // error message
                notifyMessage.innerText = '';
            }
            else {
                totalExpensesDisplay.innerText = totalExpenses;
                balanceDisplay.innerText = '0';
                // error message
                return notifyMessage.innerText = 'Opps! Not have enough income to expense';
            }
        }

        else {
            totalExpensesDisplay.innerText = '0';
            balanceDisplay.innerText = '0';
            // error message
            notifyMessage.innerText = 'Opps! Give only positive numbers';
        }
    }

    else {
        totalExpensesDisplay.innerText = '0';
        balanceDisplay.innerText = '0';
        // error message
        notifyMessage.innerText = 'Opps! Give numbers only';
    }
});

// save button handling
document.getElementById('save-button').addEventListener('click', function () {
    // saving amounts
    const savingAmountsPercentage = getInputValue('saving-amount-percentage');
    const income = getInputValue('income-amount');
    const savingAmountsCalculation = parseInt((savingAmountsPercentage * income) / 100);
    const savingAmountsDisplay = document.getElementById('saving-amount');
    savingAmountsDisplay.innerText = savingAmountsCalculation;


    const foodExpense = getInputValue('food-expense');
    const rentExpense = getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');

    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const totalExpensesDisplay = document.getElementById('total-expenses');
    totalExpensesDisplay.innerText = totalExpenses;

    const balance = income - totalExpenses;
    const balanceDisplay = document.getElementById('balance-display');
    balanceDisplay.innerText = balance;

    // remaining balance
    const remainingBalanceCalculation = balance - savingAmountsCalculation;
    const remainingBalanceDisplay = document.getElementById('remaining-balance');

    if (savingAmountsCalculation <= balance) {
        remainingBalanceDisplay.innerText = remainingBalanceCalculation;

        // error message
        const notifyMessage = document.getElementById('notification');
        return notifyMessage.innerText = '';
    }
    else {
        remainingBalanceDisplay.innerText = '0';

        // error message
        const notifyMessage = document.getElementById('notification');
        return notifyMessage.innerText = 'Opps! Not have enough Balance for savings';
    }
})