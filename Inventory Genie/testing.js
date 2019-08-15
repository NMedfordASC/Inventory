
if(nameData === []){

}
let quantityData = []
function storeName(){
    let itemName = document.getElementById("itemName");
    let itemNumber = document.getElementById("itemNumber");
    nameData.push(itemName.value)
    quantityData.push(itemNumber.value)
    localStorage.setItem('nameData', JSON.stringify(nameData))
    console.log(localStorage.getItem('nameData'))
}