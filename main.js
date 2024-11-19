// Get the 'Up' button
const scrollUpButton = document.getElementById('scrollUp');

// Add an event listener to track scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    scrollUpButton.classList.add('show'); // Show the button
  } else {
    scrollUpButton.classList.remove('show'); // Hide the button
  }
});

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0});
}

// Function to show the nav

const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  handelmenu();
});

function handelmenu() {
  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
  
}