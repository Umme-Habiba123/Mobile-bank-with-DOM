function getInputValueById(id){
   const value = document.getElementById(id).value;
   const convertedValue = parseFloat(value);
   return convertedValue;
}

function getInnerTextById(id){
  const value = document.getElementById(id).innertext;
  const convertedValue = parseFloat(value);
  return convertedValue;
}


function setInnerTextIDandValue(id, value){
  document.getElementById(id).innerText = value;

}

function handleTogglle(id,value){
  document.getElementById(id).style.display = value;
}