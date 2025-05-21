/* =====================================================
   Javascript for bottom navigation menu
===================================================== */

// Aktifkan item menu navigasi saat ini pada gulir halaman.
window.addEventListener("scroll", () => {
   const scrollY = window.scrollY;
   const pageSections = document.querySelectorAll(".page-section");
   
   pageSections.forEach((pageSection) => {
      let sectionTop = pageSection.offsetTop -50;
      let sectionHeight = pageSection.offsetHeight;
      let sectionId = pageSection.getAttribute("id");
      
      //console.log("Section top value :" + sectionTop);
      //console.log("Section height value :" + sectionHeight);

      if(scrollY > scrollTop){
         document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionId + "]").classList.add("current");
      }
      else{document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionId + "]").classList.remove("current");
      }
  });
});
// Javascript untuk efek menu navigasi saat menggulir.

// Sembunyikan menu navigasi bawah saat mengklik tombol sembunyikan menu.

// Menampilkan menu navigasi bawah saat mengklik tombol sembunyikan menu..
