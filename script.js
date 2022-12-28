// Get random numbers
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Create string with src attribute value 
let imageSrc1 = `./images/dice${randomNumber1}.png`;
let imageSrc2 = `./images/dice${randomNumber2}.png`;

// Change the src attribute for a new value
document.querySelector(".dice .img1").setAttribute("src", imageSrc1);
document.querySelector(".dice .img2").setAttribute("src", imageSrc2);

// Display the winner
(randomNumber1 > randomNumber2) ? document.querySelector("h1").textContent = "Player 1 Wins!"
: (randomNumber2 > randomNumber1) ? document.querySelector("h1").textContent = "Player 2 Wins!"
: document.querySelector("h1").textContent = "Draw!";