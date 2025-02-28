document.getElementById('cashout-box').style.display = 'none'
document.getElementById('transaction-box').style.display = 'none'

document.getElementById("add-money-box").addEventListener('click', function(){
   document.getElementById('add-money-sec').style.display = 'block'
   document.getElementById('cashout-box').style.display = 'none'
})

document.getElementById('cash-out-money').addEventListener('click', function(){
     document.getElementById('add-money-sec').style.display = 'none'
   document.getElementById('cashout-box').style.display = 'block'
})