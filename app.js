function updateProductNumber(products, price, isIncreasing){
    const productInput = document.getElementById(products + '-number');
    let productNumber = productInput.value;
    if(isIncreasing === true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // updat caseTotal
    const productTotal = document.getElementById(products + '-total');
    productTotal.innerText = productNumber * price;
    
    calculateTotal();
}

function getInputValue(products){
    const productInput = document.getElementById(products + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // updat on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
   
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
      
    
})
document.getElementById('phone-mines').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
  
})


// case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',59, true);

})
document.getElementById('case-minus').addEventListener('click', function(){
  
    updateProductNumber('case',59, false);
  
})