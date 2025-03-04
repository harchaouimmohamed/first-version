let list = document.querySelectorAll(".navigation li");
const recentOrders = document.querySelector('.recentOrders');
const reservationTable = document.querySelector('.reservationTable');
const order = document.querySelector('.order');
const reservation = document.querySelector('.reservation');
const addfood = document.querySelector('.food');
const menu = document.querySelector('.addMenu');

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));



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


order.addEventListener('click', function(){
    recentOrders.classList.remove('active');
    menu.classList.remove('active');
    reservationTable.classList.remove('active');
 
  });
  addfood.addEventListener('click', function(){
    recentOrders.classList.add('active');
    menu.classList.add('active');
    reservationTable.classList.remove('active');
  
  });
  closefood.addEventListener('click', function(){
    newfood.classList.remove('active');
  
  });
  cardadd.addEventListener('click', function(){
    newfood.classList.add('active');
 
  });


const dropArea  = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");


inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
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

  closeButton.addEventListener('click', function(){
    modal.style.display = "none";
  })

  const rows = document.querySelectorAll('.ordercostumer');
  rows.forEach(row => {
      row.addEventListener('click', function() {
       
          openModal(data);
      });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const modalreserve = document.getElementById('reservationModal');
  const closereserved = document.querySelector('.closereserve');
  
  function openModalr(data) {
   
      modalreserve.style.display = "flex";
      
  }

  function closeModalr() {
    modalreserve.style.display = "none";
  }

  
  window.addEventListener('click', function(event) {
      if (event.target == modalreserve) {
          closeModalr();
      }
  });

  closereserved.addEventListener('click', function(){
    modalreserve.style.display = "none";
  })

  const rowsr = document.querySelectorAll('.reservecostumer');
  rowsr.forEach(row => {
      row.addEventListener('click', function() {
          const data = {
              customer: this.cells[0].innerText,
              location: this.cells[1].innerText,
              orderDate: this.cells[2].innerText,
              status: this.cells[3].innerText,
              amount: this.cells[4].innerText
          };
          openModalr(data);
      });
  });
});



const deletButtons = document.querySelectorAll('.deletButton');
    const ConfirmDelet = document.querySelector('.ConfirmDelet');
    const cancelButton = document.querySelector('.cancelButton');
    const confirmButton = document.querySelector('.ConfimationButton');
    let currentShopContent;

    deletButtons.forEach(button => {
      button.addEventListener('click', function() {
        currentShopContent = button.closest('.card.shop-content'); 
        ConfirmDelet.classList.add('active');
      });
    });

    cancelButton.addEventListener('click', function() {
      ConfirmDelet.classList.remove('active');
    });

    confirmButton.addEventListener('click', function() {
      ConfirmDelet.classList.remove('active');
      if (currentShopContent) {
        currentShopContent.remove();
      }
    });

/****///////////////////////////////////////////////////**Reservation ///////////////////////////////////////////// */

reservation.addEventListener('click', function(){
  reservationTable.classList.add('active');
  menu.classList.remove('active');
  recentOrders.classList.add('active');

})


document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('orderModal');
  const closeButton = document.querySelector('.closeOrder');
  
  function openModal(data) {
      const modalBody = document.querySelector('.modal-body');
   
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

  closeButton.addEventListener('click', function(){
    modal.style.display = "none";
  })

  const rows = document.querySelectorAll('.ordercostumer');
  rows.forEach(row => {
      row.addEventListener('click', function() {
          const data = {
              customer: this.cells[0].innerText,
              location: this.cells[1].innerText,
              orderDate: this.cells[2].innerText,
              status: this.cells[3].innerText,
              amount: this.cells[4].innerText
          };
          openModal(data);
      });
  });
});
