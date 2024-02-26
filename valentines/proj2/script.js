const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let wordList = ["Why...", "Please?", "But I no no wanna...", "aww...", "are you sure?", "very sure...?", ":<"];

let currentIndex = 0;

noBtn.addEventListener("click", function () {
  noBtn.textContent = wordList[currentIndex];

  // noBtn fontsize
  const currentNoSize = parseFloat(getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = `${currentNoSize - 2}px`;

  // noBtn size
  const currentNoWidth = parseFloat(getComputedStyle(noBtn).width);
  noBtn.style.width = `${currentNoWidth - 10}px`;

  const currentNoHeight = parseFloat(getComputedStyle(noBtn).height);
  noBtn.style.height = `${currentNoHeight - 5}px`;

  const currentNoBorderRadius = parseFloat(getComputedStyle(noBtn).borderRadius);
  noBtn.style.borderRadius = `${currentNoBorderRadius + 5}px`;

  // yesBtn IT WORKS!
  const currentYesSize = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentYesSize + 10}px`;

  // yesBtn size
  const currentYesWidth = parseFloat(getComputedStyle(yesBtn).width);
  yesBtn.style.width = `${currentYesWidth + 20}px`;

  const currentYesHeight = parseFloat(getComputedStyle(yesBtn).height);
  yesBtn.style.height = `${currentYesHeight + 10}px`;

  const currentYesBorderRadius = parseFloat(getComputedStyle(yesBtn).borderRadius);
  yesBtn.style.borderRadius = `${currentYesBorderRadius + 5}px`;

  // Increment the index to cycle through the wordList
  currentIndex = (currentIndex + 1) % wordList.length;
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, BMO loves you too!";
  gif.src =
    "https://media2.giphy.com/media/65wE7Exx1eKZGYIP0G/giphy.gif";
});