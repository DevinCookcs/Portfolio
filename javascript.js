const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", ()=> {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        document.body.classList.remove("nav-open");
    });
});


// const darkMode = document.querySelector("body");

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

// Get the root element
var r = document.querySelector(':root');

// Create a function for setting a variable value
function myFunction() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--clr-light', '--dm-light');
}