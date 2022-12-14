
const text = document.getElementById("welcome-text")
const greetings = ["Selamat Datang", "Onomi Fakhai", "Sugeng Rawuh", "Saleum Teuka", "Tabea Waya", "Koe Pontam", "Salamaik Datang"]

const myNav = document.getElementById("navbar")

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  myNav.classList.remove("navbar-dark", "bg-transparent");
  myNav.classList.add("bg-light", "navbar-light")
} else {
  window.onscroll = function () {
    if (window.scrollY >= 55) {
      myNav.classList.add("navbar-light", "bg-light")
      myNav.classList.remove("navbar-dark", "bg-transparent")
    } else {
      myNav.classList.remove("navbar-light", "bg-light")
      myNav.classList.add("navbar-dark", "bg-transparent")
    }
  };
}

setInterval(() => {
  text.innerText = greetings[Math.floor(Math.random() * greetings.length)]
}, 4000);

AOS.init({
  once: true,
  duration: 1500
});