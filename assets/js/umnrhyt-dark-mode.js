function lightDarkMode(){
  const darkMode = document.querySelector("dark-mode i");
  const elements = document.querySelectorAll("body, section, nav a");
  
  darkMode.classList.toggle("fa-sun");
  darkMode.classList.toggle("fa-moon");
  darkMode.style.color = darkMode.classList.contains("fa-moon")?"white":"black";
    
  elements.forEach(elements => 
    element.classList.toggle("dark-mode-class")
    );
  }
