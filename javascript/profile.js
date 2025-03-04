/* const uploadBtn = document.getElementById('uploadbtn');
const fileInput = document.getElementById('file');

uploadBtn.addEventListener('click', function() {
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'profile.php');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('تم تحميل الصورة بنجاح!');
            } else {
                console.error('فشل تحميل الصورة!');
            }
        };
        xhr.send(formData);
    }
}); */


/************************** */
var modal = document.getElementById("profile-edit-modal");

var btn = document.getElementById("toggle-profile-edit-btn");

var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    console.log(event.target)
    if (event.target == modal) {
        modal.style.display = "none";
    }

}

