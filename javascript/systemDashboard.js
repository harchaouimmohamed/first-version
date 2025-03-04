let list = document.querySelectorAll(".navigation li");
const recentOrders = document.querySelector('.recentOrders');

const order = document.querySelector('.order');
const RestaurantAcceptation = document.querySelector('.RestaurantAcceptation');
const RestaurantRequest = document.querySelector('.Restaurant');
const addHost = document.querySelector('.addHost');
const addHosting = document.querySelector('.addHosting');
const addNewHosting = document.querySelector('.cardadd');
const newhosting = document.querySelector('.newhosting');



let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let closefood = document.querySelector(".closefood");
let newfood = document.querySelector(".newfood");
let cardadd = document.querySelector(".cardadd");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};


RestaurantRequest.addEventListener('click', function(){
  RestaurantAcceptation.classList.remove('active');
  addHost.classList.remove('active');
 
  });
  addHosting.addEventListener('click', function(){
    addHost.classList.add('active');
    RestaurantAcceptation.classList.add('active');
    
   
  });
  closefood.addEventListener('click', function(){
    newhosting.classList.remove('active');
 
  });
  addNewHosting.addEventListener('click', function(){
    newhosting.classList.add('active');

  });







document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('orderModal');
  const closeButton = document.querySelector('.closeOrder');
  
  function openModal(data) {
     
      modal.style.display = "flex";
  }

  function closeModal() {
      modal.style.display = "none";
  }

  
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          closeModal();
      }
  });

  

  const rows = document.querySelectorAll('.ordercostumer');
  rows.forEach(row => {
      row.addEventListener('click', function() {
        
          openModal(data);
      });
  });
});

 
