
let profile = document.querySelector(".profileimg");
const toggleMenu = document.querySelector('.menu');
function menuToggle() {
    
    toggleMenu.classList.toggle('active');

    
   
   
}

document.addEventListener('click', function(event) {
    const profileImg = document.querySelector('.profileimg');
    if (!profileImg.contains(event.target) && !toggleMenu.contains(event.target)) {
        toggleMenu.classList.remove('active');
    }
});
