const username = "umnrhyt";
const greeting = `Halo, saya ${username}`;
const typewriter = document.getElementById('typewriter');
let i = 0;

function typeAnim() {
  if (i < greeting.length) {
    typewriter.innerHTML += greeting.charAt(i);
    i++;
    setTimeout(typeAnim, 75);
  }
}

window.onload = typeAnim;
