const btn = document.querySelectorAll(".add-cart")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click", function(event){
    var btnItem =  event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector(".product-thumb")
    var productImg2 = productImg.querySelector("img").src
    var productInfo = product.querySelector(".product-info")
    var productName = productInfo.querySelector(".product-name").innerText
    var productPrice = productInfo.querySelector(".product-price").innerText
    //console.log(productImg2, productName, productPrice)
    addcart(productImg2, productName, productPrice)
})
})
function addcart(productImg2, productName, productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            // alertE = "Sản phẩm của bạn đã có trong giỏ hàng"
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        } 
    }
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg2+'" alt=""><span class="title">'+productName+'</span></td><td><div class="product-price">'+productPrice+'</div></td><td><input style="width: 50px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
    inputChange()

}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".product-price").innerHTML
        totalA = inputValue*productPrice*1000 
        // totalB = totalA.toLocaleString('de-DE')
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')

    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartTotalB = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartTotalB.innerHTML = totalC.toLocaleString('de-DE')
}


function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            // console.log(cartItemR)
        })
     
    }
}


function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })     
    }
}

const cartshow = document.querySelector(".fa-cart-shopping")
const cartbtn = document.querySelector(".fa-circle-xmark")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.left = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartbtn)
    document.querySelector(".cart").style.left = "-100%"
})
