
const text = document.getElementById('welcome-text')
const greetings = ["Salamakki Kabattuanta", "Onomi Fakhai", "Sugeng Rawuh", "Saleum Teuka", "Tabea Waya", "Koe Pontam", "Salamaik Datang", "Kopisanangan Kinorikatan"]

const myNav = document.getElementById('navbar')
const myNavLink = document.querySelectorAll('.nav-link')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    myNav.classList.add('bg-light', 'navbar-light')
} else {
    window.onscroll = function () {
        if (window.scrollY >= 55) {
            myNav.classList.add("bg-light");
            myNav.classList.remove("bg-transparent");
        }
        else {
            myNav.classList.add("bg-transparent"); i
            myNav.classList.remove("bg-light");

        }
    };
}

setInterval(() => {
    text.innerText = greetings[Math.floor(Math.random() * greetings.length)]
}, 4000);