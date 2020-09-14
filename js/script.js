//create modal button on click
let btnModal = document.querySelectorAll(".modal-button");
let modalsContent = document.querySelectorAll(".modal-box");
let closeModal = document.getElementsByClassName("close-modal");
for (var i = 0; i < btnModal.length; i++) {
    btnModal[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}
// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeModal.length; i++) {
    closeModal[i].onclick = function() {
        for (var index in modalsContent) {
        if (typeof modalsContent[index].style !== 'undefined') modalsContent[index].style.display = "none";    
        }
    }
}

//create responsive menu bar
let navMenu = document.querySelector(".nav");
function show() {
    navMenu.classList.add("menu-show");
}
function hide() {
    navMenu.classList.remove("menu-show");
}

//create dropdown on profile menu
function downFunction() {
    document.getElementById("dropdownNav").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.user-icon')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
