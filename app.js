

let product_total_amt = document.getElementById('product_total_amt')
let shipping_charge = document.getElementById('shipping_charge')
let total_cart_amt = document.getElementById('total_cart_amt')
let discount_code1 = document.getElementById('discount_code1')
let error_trw = document.getElementById('error_trw')

const decreaseNumber = (incdec,itemPrice) => {

    let inputVal = document.getElementById(incdec)
    var itemPrice = document.getElementById(itemPrice)
    if(inputVal.value <= 0){
        inputVal.value = 0;
    } else {
        inputVal.value = parseInt(inputVal.value) - 1
        inputVal.style.backgroundColor = '#fff'
        inputVal.style.color = 'black'
        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 15
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)   + parseInt(shipping_charge.innerHTML)
    }
}


const increaseNumber = (incdec,itemPrice) => {
    let inputVal = document.getElementById(incdec)
    var itemPrice = document.getElementById(itemPrice)
    
    if(inputVal.value >= 5){
        inputVal.value = 5;
        inputVal.style.backgroundColor = 'red'
        inputVal.style.color = 'white'
    } else {
        inputVal.value = parseInt(inputVal.value) + 1
        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 15
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)  + parseInt(shipping_charge.innerHTML)
        
    }
}
 


const discount_code = (e) => {

    if(discount_code1.value == 'jibon') {
        if(parseInt(total_cart_amt.innerHTML) > 0) {
            total_cart_amt.innerHTML = parseInt(total_cart_amt.innerHTML) - 10
            error_trw.innerHTML = 'hurrah! discount granted'
            error_trw.style.visibility = 'visible'
            discount_code1.value = ''
            discount_code1.disabled = true
            e.disabled = true
        } else {
            alert('add some item to cart first')
        }
       
    } else {
        error_trw.style.visibility = 'visible'
        error_trw.innerHTML = 'invalid cupon code'
    }
}
