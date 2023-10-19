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

function revealImages() {
    const imageContainers = document.querySelectorAll('.image-container');
  
    // Loop through each image container and animate it
    imageContainers.forEach((container, index) => {
      const image = container.querySelector('img');
  
      // Use GSAP to animate the opacity property
      gsap.to(image, {
        opacity: 1,
        duration: 2, // 2 seconds
        delay: index * 2, // Delay each image by 2 seconds
        ease: 'power2.inOut', // Easing function
      });
    });
  }
  
  // Call the revealImages function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', revealImages);
  