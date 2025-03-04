
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};


closeCart.onclick = () => {
    cart.classList.remove("active");
};


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

var count = 0; 
function calculeNumbers(output) {
    count++; 
    var output = ' ' + count;
  
    document.getElementById("numbers").innerHTML = output;
  
  
}


function checkAndDeleteDiv() {
    var countDiv = document.querySelector('.count');
  
    if (countDiv.textContent.trim() === '0') {
        countDiv.style.display = "none";
    }else{
        countDiv.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAndDeleteDiv();
});

function ready() {
  
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

 
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

   
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
    updateCartCount(); 
   
}


function buyButtonClicked() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var orderContent = document.querySelector(".OrderContent");

    
    orderContent.innerHTML = '';

    
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var imgSrc = cartBox.getElementsByClassName("cart-img")[0].src;
        var title = cartBox.getElementsByClassName("cart-product-title")[0].innerText;
        var quantity = cartBox.getElementsByClassName("cart-quantity")[0].value;
        var food_id = cartBox.getElementsByClassName("food_id")[0].value;
        var rest_id = cartBox.getElementsByClassName("rest_id")[0].value;
        var number_item = cartBox.getElementsByClassName("number_item")[0].value;
     
        var newOrderContent = document.createElement("div");
        newOrderContent.classList.add("cart-content2");

     
          
        var orderContentHtml = `
            <img src="${imgSrc}" alt="not found" class="img-order">
              <input type="hidden" id="mealId${i+1}" name="food_id${i+1}" value="${food_id}"  readonly>
               <input type="hidden"  id="resturantid${i+1}" name="rest_id${i+1}" value="${rest_id}"  readonly>
              
            <div class="detail-order">
                <div class="product-title">${title}</div>
                <div class="product-quantity">
                quantity: <input type="number" id="quantity${i+1}" name="quantity${i+1}" style="text-align: center;  border-color: transparent; background-color: transparent;" class="quantityNum" value="${quantity}" readonly>
                 
               
            </div>
             <input type="hidden" id="number_item" value="${number_item}"  readonly></div>  
        `;
        newOrderContent.innerHTML = orderContentHtml;

      
        orderContent.appendChild(newOrderContent);
    }

    updateTotal();
}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
    updateCartCount();
}


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
    updateCartCount();
    checkAndDeleteDiv();
}

function addProductToCart(title, price, productImg) {
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTML === title) {
            var quantityElement = cartItemsNames[i].parentElement.parentElement.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = parseInt(quantityElement.value) + 1;
            updateTotal();
            updateCartCount();
            return;
        }
    }

    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <span class="material-symbols-outlined cart-remove">
            delete
        </span>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged);

    updateCartCount();
    checkAndDeleteDiv();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = total + " DA";
    document.getElementsByClassName("totalNumber")[0].innerText = total;
    document.getElementById("totalNumberinput").value = total;
}

checkAndDeleteDiv();

const buttonOrder = document.querySelector('.btn-buy');
const formOrder = document.querySelector('.FormOrder');
const closeOrder = document.querySelector('.closeOrder');
const modifyOrder = document.querySelector('.modifyOrder');

buttonOrder.addEventListener('click', function () {
    formOrder.classList.add('active');
});

closeOrder.addEventListener('click', function () {
    formOrder.classList.remove('active');
});

modifyOrder.addEventListener('click', function () {
    formOrder.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

function updateCartCount() {
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartItems.getElementsByClassName("cart-box");
    
const buttonOrder = document.querySelector('.btn-buy');

    buttonOrder.style.display = "none";
    if (cartBoxes.length > 0) {
        buttonOrder.style.display = "flex";
        buttonOrder.style.cursor = "pointer";
    } 
}



/*///////////////////Confirm Order///////////////////////////*/
document.querySelector('.buttonForm').addEventListener('click', function(event) {
    event.preventDefault(); 

    var orderContent = document.querySelector('.OrderContent');
    var orderDetails = orderContent.querySelectorAll('.cart-content2');

    var form = document.createElement('form');
    form.method = 'post';
    form.action = 'home.php';

    orderDetails.forEach(function(order, index) {
        var imgSrc = order.querySelector('.img-order').src;
        var title = order.querySelector('.product-title').innerText;
        var quantity = order.querySelector('.quantityNum').innerText;



        var imgField = document.createElement('input');
        imgField.type = 'hidden';
        imgField.name = 'order[' + index + '][imgSrc]';
        imgField.value = imgSrc;
        form.appendChild(imgField);

        var titleField = document.createElement('input');
        titleField.type = 'hidden';
        titleField.name = 'order[' + index + '][title]';
        titleField.value = title;
        form.appendChild(titleField);

        var quantityField = document.createElement('input');
        quantityField.type = 'hidden';
        quantityField.name = 'order[' + index + '][quantity]';
        quantityField.value = quantity;
        form.appendChild(quantityField);
    });

    var clientFields = ['fname', 'lname', 'phone', 'email', 'address', 'comments', 'giftCode'];
    clientFields.forEach(function(field) {
        var fieldValue = document.getElementById(field).value;
        

        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = field;
        input.value = fieldValue;
        form.appendChild(input);
    });

    var totalNumber = document.getElementsByClassName("totalNumber")[0].innerText.replace(" DA", "").trim();
    console.log('Total Number:', totalNumber);

    var totalNumberField = document.createElement('input');
    totalNumberField.type = 'hidden';
    totalNumberField.name = 'totalNumber';
    totalNumberField.value = totalNumber;
    form.appendChild(totalNumberField);

    document.body.appendChild(form);

    var formData = new FormData(form);
    formData.forEach(function(value, key) {
        console.log(key + ": " + value);
    });

    form.submit();
});
