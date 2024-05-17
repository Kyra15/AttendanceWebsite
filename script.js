document.addEventListener("DOMContentLoaded", init, false);

let stud;

function init() {
    stud = document.querySelector("#stud");

    let elem = Array.from(document.querySelectorAll("#form_stud textarea"));
    elem.forEach(e => e.addEventListener("input", handleChange, false));

    let cached = getForm();
    if (cached) {
        stud.value = cached.stud;
    }

    document.querySelector('#mainForm').addEventListener('submit', () => {
        window.localStorage.removeItem('stud'); // Use the same key 'stud' here
    }, false);
}

function handleChange(e) {
    console.log('handleChange');
    let form = {};
    form.stud = stud.value;
    saveForm(form);
}

function saveForm(form) {
    let f = JSON.stringify(form);
    window.localStorage.setItem('stud', f); // Use the same key 'stud' here
}

function getForm() {
    let f = window.localStorage.getItem('stud'); // Use the same key 'stud' here
    if (f) return JSON.parse(f);
}

// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
