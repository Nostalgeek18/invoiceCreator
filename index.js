//Getting elements from the DOM
const btnPull = document.getElementById('btn-pull');
const btnWash = document.getElementById('btn-wash');
const btnMow  = document.getElementById('btn-mow');
const btnSend = document.querySelector('.btn-send');

const finalPrice     = document.getElementById('final-price');
const divPricesinfos = document.querySelector('.price-infos-container')

const msgSuccess = document.querySelector(".success");
const msgError   = document.querySelector(".error")


let arrayBills = [];


/*******************FUNCTIONS*********************/


function AddBill(price, nameService){
    msgSuccess.style.display = "none";
    msgError.style.display   = "none";

    let htmlMsg = 
    `
    <div class="price-infos flex">
        <h2>${nameService} <span id="${nameService}" onClick="remove(this.id);" class="remove"> remove </span></h2>
        <h2>$${price}</h2>
    </div>
    `
    let billObj = {};
    let exists = false;
    billObj['nameService'] = nameService;
    billObj['price'] = price;
    billObj['htmlMsg'] = htmlMsg
    //if nameService doesnt exists as a key in the objet array, then we add it with
    //his htmlMessage.
    if (arrayBills.length == 0){
        arrayBills.push(billObj);
        exists = true;
    }else {
        arrayBills.forEach(element => {
            if(element.nameService == nameService){
                exists = true;
            }
        })
    }

    if(!exists){
        arrayBills.push(billObj);
    }

    renderTotalBills();
}

function remove(id){
      nameService = id;
      let removeBtn = document.getElementById(nameService);
        let removeEl = removeBtn.parentNode.parentNode;
        index = arrayBills.findIndex(x => x.nameService === nameService);
        console.log(index)
        divPricesinfos.removeChild(removeEl);
           if(arrayBills[index].nameService){
               arrayBills.splice(index, 1);
           }
         renderTotalBills(); 
}

function renderTotalBills(){
    let totalPrice = 0;
    
    divPricesinfos.innerHTML = "";

    //Loop through our array of objects.
    //We add the htmlContent of each object into our div from the DOM.
    for (let i=0; i< arrayBills.length ;i++){
        divPricesinfos.innerHTML += arrayBills[i].htmlMsg;
        totalPrice += arrayBills[i].price;
    }

    finalPrice.textContent = totalPrice + " $";

}


/*****************EVENT LISTENERS*****************/

btnPull.addEventListener('click', ()=> {
    let price =30;
    let nameService = 'Pull Weeds';

    AddBill(price,nameService);
})

btnWash.addEventListener('click', ()=> {
    let price =10;
    let nameService = 'Wash Car';

    AddBill(price,nameService);
})

btnMow.addEventListener('click', ()=> {
    let price =20;
    let nameService = 'Mow Lawn';
    btnMow.disabled = true;
    AddBill(price,nameService);
})

// btnSend.addEventListener('click', ()=>{
//     arrayBills = [];
//     renderTotalBills();
// })

btnSend.addEventListener('click', ()=> {
    msgError.style.display = "none";
    msgSuccess.style.display = "none";

    if (arrayBills.length == 0){
        msgError.style.display = "block";
    }else {
        msgSuccess.style.display = "block";
        arrayBills = [];
        renderTotalBills();
    }

})