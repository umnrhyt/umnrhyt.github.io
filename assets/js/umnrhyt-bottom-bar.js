/* =====================================================
   Javascript for bottom navigation menu
===================================================== */

// Aktifkan item menu navigasi saat ini pada gulir halaman.
window.addEventListener("scroll", () => {
   const scrollY = window.scrollY;
   const pageSections = document.querySelectorAll(".page-section");
   
   pageSections.forEach((pageSection) => {
      let sectionTop = pageSection.offsetTop - 50;
      let sectionHeight = pageSection.offsetHeight;
      let sectionId = pageSection.getAttribute("id");
      
      // console.log("section top value :" + sectionTop);
      // console.log("section height value :" + sectionHeight);
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionId + "]").classList.add("current");
      }
      else{
         document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionId + "]").classList.remove("current");
      }
   });
});

// Javascript untuk efek menu navigasi saat menggulir.
const bottomMenu = document.querySelector(".bottom-menu");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var menuTimeout;

 window.addEventListener("scroll", () => {
   bottomMenu.classList.remove("hide");
   menuShowBtn.classList.remove("show");
   
   if(window.scrollY < 10){
     menuHideBtn.classList.remove("show");
     
     function scrollStopped(){
       bottomMenu.classList.remove("hide");
      // menuShowBtn.classList.remove("show");
     }
     
     clearTimeout(menuTimeout);
     menuTimeout = setTimeout(scrollStopped, 2500);
   }
   if(window.scrollY > 10){
     menuHideBtn.classList.add("show");
     
     function scrollStopped(){
       bottomMenu.classList.add("hide");
       menuShowBtn.classList.add("show");
     }
     
     clearTimeout(menuTimeout);
     menuTimeout = setTimeout(scrollStopped, 2500);
   }
 });

// Sembunyikan menu navigasi bawah saat mengklik tombol sembunyikan menu.
 menuHideBtn.addEventListener("click", () => {
   bottomMenu.classList.toggle("hide");
   menuShowBtn.classList.add("show");
 });


// Menampilkan menu navigasi bawah saat mengklik tombol sembunyikan menu..
 menuShowBtn.addEventListener("click", () => {
   bottomMenu.classList.toggle("hide");
   menuShowBtn.classList.remove("show");
 });


