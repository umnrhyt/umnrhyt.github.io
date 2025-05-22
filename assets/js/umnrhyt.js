// umnrhyt.js 

// Mengaktifkan Tombol Menu 
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".topbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navBar.classList.toggle("active");
}