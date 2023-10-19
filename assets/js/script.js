const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getMagicAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    document.getElementById("magicAnswer").innerText = answer;
}


fetch('/assets/img/gallery/')
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const links = Array.from(doc.querySelectorAll('a'));
    
    const imageLinks = links.filter(link => link.href.match(/\.(jpg|jpeg|png|gif)$/i));
    
    const galleryContainer = document.getElementById('galleryContainer');
    
    imageLinks.forEach(link => {
        const img = document.createElement('img');
        img.src = `/assets/img/gallery/${link.textContent}`;
        galleryContainer.appendChild(img);
    });
});
