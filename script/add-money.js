document.getElementById("btn-add-money")
.addEventListener('click', function (event){
    event.preventDefault();
    // console.log('button clicked')
   const amount = document.getElementById("amount").value;
    // console.log(typeof amount);
    const convertedAmount = parseInt(amount);
    const pinn = document.getElementById("pin").value;
    const convertPin = parseInt(pinn);
    const mainBalance = document.getElementById("main-balance").innerText;
    // console.log(typeof mainBalance)
    const convertdMainBalance = parseInt(mainBalance);
   if(amount && pinn){
    if(convertPin === 1234){
        // console.log('All okay')
        const sum = convertedAmount + convertdMainBalance;
        document.getElementById("main-balance").innerText = sum;
    }
    else{
       alert("enter valid pin")
    }
   }
   else{
      alert('enter amount')
   }

    
})