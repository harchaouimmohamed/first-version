const paymentButton = document.querySelector('.paymentButtonOrder');
const paymentMethod = document.querySelector('.modalPayment');
const closePayment = document.querySelector('.closePayment');
const creatform = document.querySelector('.wrapper');

    paymentButton.addEventListener('click', function() {
        paymentMethod.classList.add('active');
        creatform.style.display = "none";

       
    });
    closePayment.addEventListener('click', function() {
        paymentMethod.classList.remove('active');
        creatform.style.display = "flex";

    
    });