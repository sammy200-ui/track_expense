let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
  const incomeInput = document.getElementById('incomeInput');
  const income = Number(incomeInput.value);

  if (income > 0) {
    totalIncome += income;
    incomeInput.value = '';
    updateSummary();
  } else {
    alert("Please enter a valid income amount.");
  }
}

function addExpense() {
  const amount = Number(document.getElementById('expenseAmount').value);
  const category = document.getElementById('expenseCategory').value;

  if (amount > 0) {
    totalExpense += amount;

    const li = document.createElement('li');
    li.textContent = `${category}: ₹${amount}`;
    document.getElementById('expenseList').appendChild(li);

    document.getElementById('expenseAmount').value = '';
    updateSummary();
  } else {
    alert("Please enter a valid expense amount.");
  }
}

function updateSummary() {
  document.getElementById('totalIncome').textContent = totalIncome;
  document.getElementById('totalExpense').textContent = totalExpense;
  const saved = totalIncome - totalExpense;
  document.getElementById('totalSaved').textContent = saved;
}