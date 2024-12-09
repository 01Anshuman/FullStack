document.addEventListener('DOMContentLoaded',()=>{
    const expenseForm =document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");


    //creating expenses list 
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalAmount = calculateTotal();
    renderExpenses();
    
    
    //adding event listner on the submit button
    //check for the input value
    //for valid input create an object containing containing the input items including id,name and amount 
    expenseForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount>0){
            const newExpense = {
                id:Date.now(),
                name: name,
                amount: amount
            };

           
            //pushing the object element in expenses list
            expenses.push(newExpense);
            saveExpensesTolocal();
            renderExpenses();
            updateTotal();

            //clear input after inserting the entry
            expenseNameInput.value= ""
            expenseAmountInput.value =""
        }
    });
    
    //defining the renderExpense => create li for each expense object of expenses list => inserting data(expense name and amount) inside the list => appending li items to expnesesList => 
    function renderExpenses(){
        expenseList.innerHTML = "";
        expenses.forEach(expense =>{
            const li = document.createElement('li');
            li.innerHTML = `
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>`;
            expenseList.appendChild(li)

        })
    }

   //function for calculate the total expenses 
    function calculateTotal(){
        return expenses.reduce((sum,expense) => sum + expense.amount, 0);

    }
    
    //function for saving the total expenses
    function saveExpensesTolocal(){
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }
 
    //function for updating the total expense
    function updateTotal(){
        totalAmount = calculateTotal()
        totalAmountDisplay.textContent = totalAmount;
    }

    //defining the click listner to the expense list 
    //targetting the button tage => checking the element from id and delete every thing except that element
    expenseList.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON"){
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId)
            saveExpensesTolocal();
            renderExpenses();
            updateTotal();


        }
    })
})