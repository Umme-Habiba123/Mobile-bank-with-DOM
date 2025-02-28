document.getElementById('cashout-btn').addEventListener('click', function(event){
   event.preventDefault();
   const account = document.getElementById('cashout-account').value;

   const amount = getInputValueById('cashout-amount');
   console.log(amount);

   const pin = getInputValueById('cashout-pin');
   console.log(pin);

   const mainBalance = getInnerTextById('main-balance');

if (account.length === 11){
   if(pin ===1234){
    alert('pin thik ache!')
    const sum = mainBalance + amount;
     setInnerTextIDandValue('main-balance', sum)
 

   }

   else{
    alert('pin are not okay')
   }
}
else{
    alert('account number dao!')
}


})