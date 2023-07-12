const screenOne = document.querySelector('.screenOne');
const screenTwo = document.querySelector('.screenTwo');
const fortuneCookie = document.querySelector('#img1');
const btnReset = document.querySelector('#btnReset');
const fortuneText = document.querySelector('#fortune');
const fortunePhrase = [
  'O aprendizado é como o horizonte: não há limites.',
  'Não há que ser forte, há que ser flexível.',
  'Limitações são fronteiras criadas apenas pela nossa mente.',
  'O cão não ladra por valentia e sim por medo.',
  'Procure acender uma vela em vez de amaldiçoar a escuridão.',
  'A palavra é prata, o silêncio é ouro.',
  'Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.',
  'Um pouco de perfume sempre fica nas mãos de quem oferece flores.',
  'O homem só envelhece quando os lamentos substituem seus sonhos.',
  'A persistência realiza o impossível.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
];

fortuneCookie.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', toggleScreen);
document.addEventListener('keypress', keypressEnter);

function handleTryClick() {
  toggleScreen();
  pickFortune();
}

function toggleScreen() {
  screenOne.classList.toggle('hidden');
  screenTwo.classList.toggle('hidden');
}

function keypressEnter(event) {
  if (event.key === 'Enter' && screenTwo.classList.contains('hidden')) {
    toggleScreen();
    pickFortune();
  } else if (event.key === 'Enter' && screenOne.classList.contains('hidden')) {
    toggleScreen();
    pickFortune();
  }
}

function pickFortune() {
  const allFortunes = fortunePhrase.length;
  const randomNumber = Math.floor(Math.random() * allFortunes);
  fortuneText.innerHTML = fortunePhrase[randomNumber];
}
