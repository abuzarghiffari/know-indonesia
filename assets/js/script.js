const text = document.getElementById('welcome-text')
const greetings = ["Salamakki Kabattuanta", "Onomi Fakhai", "Sugeng Rawuh", "Saleum Teuka", "Tabea Waya", "Koe Pontam", "Salamaik Datang", "Kopisanangan Kinorikatan"]

setInterval(() => {
    text.innerText = greetings[Math.floor(Math.random() * greetings.length)]
}, 4000);