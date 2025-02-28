document.getElementById('cashout-box').style.display = 'none';
document.getElementById('add-money-sec').addEventListener('click', function(){
    handleTogglle('add-money-sec', 'block')
    handleTogglle('cashout-box', 'none')
    handleTogglle('transaction-box', 'none')

//   document.getElementById('add-money-sec').style.display = 'block';
//   document.getElementById('cashout-box').style.display = 'none'
})

document.getElementById('cashout-box').addEventListener('click', function(){
    handleTogglle('add-money-sec', 'none')
    handleTogglle('cashout-box', 'block')
    handleTogglle('transaction-box', 'none')

})




function handleTogglle(id , status){
  document.getElementById(id).style.display = status;
}