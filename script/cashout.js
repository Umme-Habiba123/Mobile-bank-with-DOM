document.getElementById('cashout-btn').addEventListener('click',function(event){
   event.preventDefault(); 

  const pin = document.getElementById('cashout-pin').value;
   const convertedPin = parseInt(pin);

   const amount = document.getElementById('cashout-amount').value;
   const convertedAmount = parseFloat(amount);

   const mainBalance = document.getElementById('main-balance').innerText;
   const convertedMainBalance = parseFloat(mainBalance)
   if( convertedPin === 1234 ){
    // console.log('Okay pin thik ache')
    const sum = convertedMainBalance - convertedAmount;
    // console.log(sum);
     document.getElementById('main-balance').innerText = sum;
   }
   else{
    'pin thik nei!'
   }

})