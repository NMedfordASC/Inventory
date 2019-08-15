
let id;
firebase.database().ref('items').on('value', snapshot => {
    const vals = snapshot.val()
    console.log(snapshot.val());

    if (vals && typeof vals === 'object') {
        console.log(typeof vals);

        id = vals.length
    } else if (vals && typeof vals === 'array') {
        console.log('array');
        id = vals.length
        console.log(vals, 'array');
    } else {
        console.log('nothing')
        id = 0
    }

})

document.getElementById("itemForm").addEventListener("submit",storeName);
function storeName(e){

    e.preventDefault()
    
    console.log(id);
    
    
    const itemName = document.getElementById("itemName").value
    const itemQuantity = document.getElementById("itemNumber").value
    const database = firebase.database().ref('items/' + id);
    database.set({
              name: itemName,
        quantity: itemQuantity
    });
    // e.target.reset();
    location.reload();
    // itemid = itemid + 1;
}

