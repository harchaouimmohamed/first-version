const header = document.querySelector('.calendar h3');
const fheader = document.querySelector('.select-selected');
const fheaderForm = document.querySelector('.select-selectedForm');

const fheaderinput = document.querySelector('.select-selectedinput');

const dates =document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");
const form = document.querySelector('.popupForm');
const openFormBtn = document.querySelector('.btnReserve');
const close = document.querySelector('.close');
const reserve = document.querySelector('.popup');
const closeForm = document.querySelector('.closeForm');
const popupContent = document.querySelector('.popup-content');
const modify = document.querySelector('.modifyReserve');
const reserveTable = document.querySelector('.table');
const backpopup = document.querySelector('.center');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let date    = new Date();
let month   = date.getMonth();
let year    = date.getFullYear();



/************************************************************************************************* */

const daysList = document.querySelectorAll('.days li'); 


navs.forEach(nav => {
    nav.addEventListener('click', e => {
        e.preventDefault();

        const btnId = e.target.id;

        if (btnId === 'prev' && month === 1) {
            year--;
            month = 12;
        } else if (btnId === 'next' && month === 12) {
            year++;
            month = 1;
        } else {
            month = (btnId === 'next') ? month + 1 : month - 1;
        }

        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear();
        month = date.getMonth();
        renderCalendar();
    });
});

renderCalendar();
const daElements = document.querySelectorAll('.da');
daElements.forEach(daElement => {
    daElement.addEventListener('click', () => {
       
        daElements.forEach(element => {
            if (element !== daElement && element.classList.contains("active")) {
                element.classList.remove("active");
            }
        });
        
        
        daElement.classList.add('active');
    });
});
/******************************************************************************************************************************************* */
function handleDateClick(daElement) {
    
   daElement.classList.toggle("active");

    const dateClicked = parseInt(daElement.textContent); 
    const clickedYear = year; 
    const clickedMonth = month;
    const clickedDate = new Date(clickedYear, clickedMonth, dateClicked);

    
    const clickedDayAbbreviation = daysList[clickedDate.getDay()].textContent;

    
    fheader.textContent = `${clickedDayAbbreviation}. ${clickedDate.getDate()} ${months[clickedMonth]}`;
    fheaderForm.textContent = `${clickedDayAbbreviation}. ${clickedDate.getDate()} ${months[clickedMonth]}`;

    fheaderinput.value=`${clickedDayAbbreviation}. ${clickedDate.getDate()} ${months[clickedMonth]}`;
    
}

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = "";

    const daElements = document.querySelectorAll('.da');
    daElements.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    });

    for (let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        let className =
            i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
                ? ' class="today"'
                : "";

        datesHtml += `<li class="da ${className}" onclick="handleDateClick(this)">${i}</li>`;
    }

    for (let i = end; i < 6; i++) {
        datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }

       
    const daysList = document.querySelectorAll('.days li');
    const dayAbbreviation = daysList[date.getDay()].textContent;

    dates.innerHTML = datesHtml;
    header.value = `${months[month]} ${year}`;
    fheader.value = `${dayAbbreviation}. ${date.getDate()} ${months[month]}`;
    fheaderForm.value = `${dayAbbreviation}. ${date.getDate()} ${months[month]}`;

  
 
}


daElements.forEach(daElement => {
    daElement.addEventListener('click', () => {
        handleDateClick(daElement);
    });
});


/*///////////////////////////////////////////////////////////////*/
document.addEventListener("DOMContentLoaded", () => {
    renderCalendar();

    
    daElements.forEach(daElement => {
        daElement.addEventListener('click', () => {
            handleDateClick(daElement, daElements);
        });
    });
});



/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

document.addEventListener('DOMContentLoaded', function() {
    const converts = document.querySelectorAll('.convert');
    const  sBtnText = document.querySelectorAll('.sBtn-text');
    const sBtnTextForm = document.querySelector('.sBtn-textForm');
    sBtnText.forEach(sBtnText=>sBtnText.textContent = "2");
    sBtnTextForm.value="2";
    converts.forEach(convert => {
      convert.addEventListener('click', function() {
       
        sBtnText.forEach(sBtnText=>sBtnText.textContent = this.textContent);
        sBtnTextForm.value = this.textContent;
      
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const times = document.querySelectorAll('.time');
    const hour = document.querySelector('.hour-form');
  /*   const sBtnTextForm = document.querySelector('.sBtn-textForm'); */
   /*  const sBtnTextForme = document.querySelector('.sBtn-textForme'); */
   hour.value = "08:00";
   /*  sBtnTextForm.value="2"; */
   times.forEach(time => {
    time.addEventListener('click', function() {
        hour.value = this.textContent;
       /*  sBtnTextForm.value = this.textContent; */
       /*  sBtnTextForme.value = this.textContent; */
      });
    });
  });

  /* document.addEventListener('DOMContentLoaded', function() {
    const times = document.querySelectorAll('.time');
    const selectSelected = document.querySelector('.hour');
    const hourform = document.querySelector('.hour-form');
    const reserveButton = document.querySelector('.btnReserve'); */

   /*  openFormBtn.style.cursor = "no-drop";
    selectSelected.value = this.textContent;
        hourform.value = this.textContent; */
  
    /* times.forEach(time => {
      time.addEventListener('click', function() {
        selectSelected.value = this.textContent;
        hourform.value = this.textContent;
        reserveButton.classList.add("active");
        openFormBtn.style.cursor = "pointer"; 
      });
    });
  });*/
  
  

  openFormBtn.addEventListener('click', function() {
    if (openFormBtn.style.cursor !== "no-drop") {
        form.classList.add('active');
        reserve.style.display = "none";
    
    }else{
        reserve.style.display != "none";

    }
});


  close.addEventListener('click', function(){
    reserve.classList.add('active');
    reserveTable.classList.remove('active');
    reserve.style.display = "none";
    reserve.classList.remove('show');
    backpopup.style.zIndex = "0";
  })


  closeForm.addEventListener('click', function(){
    reserve.classList.remove('show');
    form.classList.remove('active');
    reserveTable.classList.remove('active');
    backpopup.style.zIndex = "0";
  })

  modify.addEventListener('click', function(){
    form.classList.remove('active');
    reserve.classList.add('show');
    reserve.style.display = "flex";
  })

  reserveTable.addEventListener('click', function(){
    reserveTable.classList.add('active');
    reserve.style.display = "flex";
    backpopup.style.zIndex = "400";
    reserve.classList.add('show');
  })
