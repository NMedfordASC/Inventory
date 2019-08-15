const database = firebase.database().ref('items')
const mainContainer = document.getElementsByClassName('main-container')[0]

database.on('value', function(snapshot){
    console.log(snapshot.val())
    mainContainer.innerHTML = ''
    for (const item of snapshot.val()) {
        var box = document.createElement("div");
        box.classList.add("uno");
        // let boxone = document.getElementsByClassName("uno")[0]
        var para = document.createElement("p");
        para.innerHTML = `<h1>${item.name}</h1> <h2>${item.quantity}</h2>`
        // var t = document.createTextNode(snapshot.val().name + " " + snapshot.val().quantity);
        box.appendChild(para);
        mainContainer.appendChild(box)
    }
    
})




