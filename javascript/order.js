const paymentButton = document.querySelector('.paymentButtonOrder');
const ConfirmButton = document.querySelector('.reserveButtonOrder');
const paymentEnlign = document.querySelector('.paymentenlign');
const paymentCash = document.querySelector('.paymentCash');
const paymentMethod = document.querySelector('.modalPayment');
const closePayment = document.querySelector('.closePayment');

paymentEnlign.addEventListener('click', function() {
    paymentButton.style.display = "flex";
    ConfirmButton.style.display = "none";
});
paymentCash.addEventListener('click', function() {
    paymentButton.style.display = "none";
    ConfirmButton.style.display = "flex";

});

const FavoritElements = document.querySelectorAll('.Favorit');
FavoritElements.forEach(Favorit => {
    Favorit.addEventListener('click', function() {
        const FavoritIcon = this.querySelector('.FavoritIcon');
        FavoritIcon.classList.toggle('active');
    });
});


paymentButton.addEventListener('click', function() {
    paymentMethod.classList.add('active');
   

});
closePayment.addEventListener('click', function() {
    paymentMethod.classList.remove('active');
   

});
