//Getting elements from the DOM

const btnPull = document.getElementById('btn-pull');
const btnWash = document.getElementById('btn-wash');
const btnMow  = document.getElementById('btn-mow');

const divPricesinfos = document.querySelector('.price-infos-container')


let bills = {}
let arrayBills = [];

/*******************FUNCTIONS*********************/


function AddBill(price, nameService){

    let htmlMsg = 
    `
    <div class="price-infos flex">
        <h2>${nameService} <span class="remove"> remove </span></h2>
        <h2>$${price}</h2>
    </div>
    `

    //if nameService doesnt exists as a key in the objet array, then we add it with
    //his htmlMessage.
    if(!bills[nameService]){
        bills[nameService] = htmlMsg
    }

    renderTotalBills();
}

function renderTotalBills(){

    arrayBills = [];
    divPricesinfos.innerHTML = "";

    for(let nameService in bills){
        arrayBills.push(bills[nameService]);
    }

    arrayBills.forEach(bill =>{
        divPricesinfos.innerHTML += bill;
    })
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

    AddBill(price,nameService);
})