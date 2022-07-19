let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Included Arrays
// weeklyExpenseQuestions - array
// monthlyExpenseQuestions
// annualExpenseQuestions

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let firstAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    console.log(firstAnswer);
    weeklyExpenses = weeklyExpenses + firstAnswer;
    console.log(weeklyExpenses)
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let firstAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
    console.log(firstAnswer);
    monthlyExpenses = monthlyExpenses + firstAnswer;
    console.log(monthlyExpenses)
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let firstAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]));
    console.log(firstAnswer);
    annualExpenses = annualExpenses + firstAnswer;
    console.log(annualExpenses)
}
