
document.addEventListener("DOMContentLoaded", () => {
    const selectBtn = document.querySelector(".select-btn");
    const selectBtnn = document.querySelector(".select-btnn");
    const selectBt = document.querySelector(".select-btnn2");
    const convertsList = document.querySelector(".converts");
    const converttsList = document.querySelector(".custom-select");
    const times = document.querySelector(".times");
    const optionMenu = document.querySelector(".select-menu");
    const popupContent = document.querySelector('.popup-content');

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("active");
        convertsList.classList.toggle("active");
        converttsList.classList.remove("active"); 
        times.classList.remove("active");
        optionMenu.classList.toggle("active"); 
        
        if (selectBtn.classList.contains("active")) {
            popupContent.classList.add("active");
            selectBtnn.style.position = "relative";
            selectBtnn.style.top = "169px";
            selectBt.style.position = "relative";
            selectBt.style.top = "171px";
            selectBt.style.background = "none";
        } else {
            popupContent.classList.remove("active");
            popupContent.classList.remove("active");
            selectBtnn.style.position = "static";
            selectBtnn.style.top = "0";
            selectBt.style.position = "static";
            selectBt.style.top = "0";
             
        }
    });

    selectBtnn.addEventListener("click", () => {
        selectBtnn.classList.toggle("active");
        converttsList.classList.toggle("active");
        convertsList.classList.remove("active"); 
        times.classList.remove("active"); 
        optionMenu.classList.toggle("active");
        selectBtn.classList.remove("active");
        selectBt.classList.remove("active");
          
          if (selectBtnn.classList.contains("active")){
            popupContent.classList.add("active");
          }else{
            popupContent.classList.remove("active");
          }


          if (selectBtn.classList.contains("active")) {
            
            selectBtnn.style.position = "relative";
            selectBtnn.style.top = "155px";
            selectBt.style.position = "relative";
            selectBt.style.top = "155px";
        } else {
            selectBtnn.style.position = "static";
            selectBtnn.style.top = "0";
            selectBt.style.position = "static";
            selectBt.style.top = "0";
            selectBt.style.zIndex = "0";
            selectBt.style.background = "none";
        }


    });
    selectBt.addEventListener("click", () => {
        selectBt.classList.toggle("active");
        times.classList.toggle("active");
        convertsList.classList.remove("active");
        converttsList.classList.remove("active"); 
        optionMenu.classList.toggle("active");
        selectBtn.classList.remove("active");
          
          if (selectBtn.classList.contains("active")) {
            
            selectBtnn.style.position = "relative";
            selectBtnn.style.top = "155px";
        } else {
            selectBtnn.style.position = "static";
            selectBtnn.style.top = "0";
            selectBt.style.position = "static";
            selectBt.style.top = "0";
           
        }
        if(times.classList.contains("active")){
            selectBt.style.position = "sticky";
            selectBt.style.zIndex = "2";
            selectBt.style.background = "rgb(200, 26, 57)";
            selectBt.style.top = "0";
        }else{
            selectBt.style.position = "static";
            selectBt.style.zIndex = "0";
            selectBt.style.background = "none";
            selectBt.style.top = "0";
        }

        if (selectBt.classList.contains("active")){
            popupContent.classList.add("active");
          }else{
            popupContent.classList.remove("active");
          }


    });

    const convertItems = document.querySelectorAll(".convert");
    convertItems.forEach(item => {
        item.addEventListener("click", () => {
            let selectedOption = item.innerText;
            console.log(selectedOption);
        });
    });

    const converttItems = document.querySelectorAll(".convertt");
    converttItems.forEach(item => {
        item.addEventListener("click", () => {
            let selectedOption = item.innerText;
            console.log(selectedOption);
        });
    });
});

