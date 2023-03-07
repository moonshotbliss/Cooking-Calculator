let cartItems = document.getElementsByClassName("main-grid")[0];
let cartrows = cartItems.getElementsByClassName("food-space");
let cartname = cartItems.getElementsByClassName("name_space")
let cartnum = cartrows.length;


if (document.readyState == 'loading'){
document.addEventListener('DOMContentLoaded',ready)
}else{
ready();
}
function numberChanged(evt){

    let input = evt.target
    console.log(input)
    var regex ='/^[a-zA-Z]+$/'
    let inputVal = input.value
    if(isNaN(inputVal) || input.value <= 0 ){
    
    input.value = 0
}
     updateTotal();
}

function addItem() {
    var cartRow = document.createElement('div')
  const food = document.querySelector('.main-grid');
  cartnum +=1;
  console.log(cartnum)

var newContent = `<div class="food-space">
        <input type="text" class="item name_space">
         <input type="text" class="item quantity_space" value="0">
         <input type="text" class="item price_space" value="0">
         <span class="item total_space">0.00</span>
         <i class="bi bi-trash btn-del" onclick="removeItem(this)"></i>
 </div>`;
 cartRow.innerHTML = newContent
 cartItems.append(cartRow);
 ready()
    
    
    
    
}
function removeItem(evt){
    cartnum -=1;
    evt.parentElement.remove();
}


function ready(){
const food = document.querySelector('.main-grid');

let quantity= food.getElementsByClassName('quantity_space');
let price= food.getElementsByClassName('price_space');
// console.log(foods.length)


for(let i = 0; i < cartnum; i++){
    let quanitityNum = quantity[i];
    let priceNum = price[i];


   quanitityNum.addEventListener('change',numberChanged);
   priceNum.addEventListener('change',numberChanged);

}

}

function updateTotal(){
    

    var total = 0
    
   
    for(let i = 0; i < cartnum; i++){
        // let finalquantity = 0;
        // let finalprice = 0;

        var rows = cartrows[i];
   
        // console.log(rows);
        let quantity = rows.children[1].value;
       
        let price = rows.children[2].value;
       
        // 
        // console.log(finalquantity);
        total = price *quantity;
        
        
        // console.log(total);
        rows.getElementsByClassName('total_space')[0].innerText = total;
    }
    updateTwo();
        
   
}
function updateTwo(){
    let grandt = document.querySelector('.gtotal_space'); 
    console.log(grandt);
    let gtotal = 0;

    for(let i = 0; i < cartnum; i++){
    var rows = cartrows[i];
    let gtotal1= rows.children[3].textContent;
    console.log(gtotal1)
    gtotal = gtotal + parseInt(gtotal1);
    // console.log(gtotal);
    }

    grandt.innerText = gtotal;


}
    


