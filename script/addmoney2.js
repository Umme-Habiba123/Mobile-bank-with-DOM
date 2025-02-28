document.getElementById('btn-add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const amount = getInputValueById('cashout-amount')
  const pin = getInputValueById('cashout-pin');
  const account = getInputValueById('cashout-account').value
  const mainBalance = getInnerTextById('main-balance')
  console.log(mainBalance) 

  if(account.length === 11){
    if(pin === 1234){
      const summ = mainBalance + amount
      document.getElementById('main-balance').innerText = summ;
    }
    else{
      console.log('pin thik nai')
    }
  }
  else{
    console.log('account number thik nai')
}

})
