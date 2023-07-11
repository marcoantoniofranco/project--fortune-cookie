const fortuneCookie = document.querySelector('#img1');
const btnReset = document.querySelector('#btnReset');

fortuneCookie.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', toggleScreen);

function handleTryClick(event) {
  toggleScreen();
  const fortuneText = document.querySelector('#fortune');
  const fortune = Math.ceil(Math.random() * 20);
  fortuneText.innerHTML = fortune;
}

function toggleScreen() {
  const screenOne = document.querySelector('.screenOne');
  const screenTwo = document.querySelector('.screenTwo');
  screenOne.classList.toggle('hidden');
  screenTwo.classList.toggle('hidden');
}
