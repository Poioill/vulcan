// Переключение страниц левой панели 

function showPage(pageIndex, button) {
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.tab-btn');
    const slider = document.querySelector('.slider');

    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    console.log(slider, "jujbjhbjhb")
    // Позиционирование слайдера под активной кнопкой
    const buttonRect = button.getBoundingClientRect();
    const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
    const sliderPosition = buttonRect.left - tabsRect.left;
    slider.style.transform = `translateX(${sliderPosition}px)`;
    slider.style.width = `${buttonRect.width}px`;
}



// Открыть предыдущий раунд

document.getElementById('allBetToggleBtn').addEventListener('click', function () {
    var currentList = document.getElementById('bet-infoCurrent');
    var prevList = document.getElementById('bet-infoPrev');
    // var extraText = document.getElementById('extraText');
    var icon = document.getElementById('allBetImg');
    console.log(icon, currentList)

    if (prevList.style.display === 'none') {
        prevList.style.display = 'block';
        currentList.style.display = 'none';
        // extraText.style.display = 'block';
        icon.src = "/image/svg/closeAllBet.svg"; 
    } else {
        prevList.style.display = 'none';
        currentList.style.display = 'block';
        // extraText.style.display = 'none';
        icon.src = "/image/svg/sortTime.svg"; 
    }
});


// Отключение и включение кнопок звука и музыки

const musicButton = document.getElementById('musicButton');
let isMusicMuted = false;

musicButton.addEventListener('click', () => {
    isMusicMuted = !isMusicMuted;
    if (isMusicMuted) {
        musicButton.innerHTML = ' <img src="/image/svg/menuMusicMute.svg" alt="">';
        musicButton.style.filter = 'brightness(0.1);'; 
    } else {
        musicButton.innerHTML = ' <img src="/image/svg/menuMusic.svg" alt="">'; 
    }
});

const soundButton = document.getElementById('soundButton');
let isSoundMuted = false;

soundButton.addEventListener('click', () => {
    isSoundMuted = !isSoundMuted
    if (isSoundMuted) {
        soundButton.innerHTML = '<img src="/image/svg/menuSoundMute.svg" alt="">'; 
    } else {
        soundButton.innerHTML = '<img src="/image/svg/menuSound.svg" alt="">'; 
    }
});


// Ставки

function betIncrease(value) {
    let betAmount = Number(document.getElementById('betAmount').innerText); 
    betAmount += value;
    if (betAmount < 0) betAmount = 0;
    document.getElementById('betAmount').innerText = betAmount;
}

// Авто ставка-вывод
// автовывод
let isAutoBetEnabled = false; 
function autoBetButton() {
    isAutoBetEnabled = !isAutoBetEnabled;
    const button = document.getElementById('autoBetButton');
    const img = button.querySelector('img');
    if (isAutoBetEnabled) {
        img.style.backgroundColor = "rgb(253, 173, 76, 0.9)"; 
        console.log("Автовывод включен");
    } else {
        img.style.backgroundColor = "rgb(217, 217, 217, 0.4)"; 
    }
}

let isAutoDrawEnabled = false; 
function autoDrawButton() {
    isAutoDrawEnabled = !isAutoDrawEnabled;
    const button = document.getElementById('autoDrawButton');
    const img = button.querySelector('img');
    if (isAutoDrawEnabled) {
        img.style.backgroundColor = "rgb(253, 173, 76, 0.9)"; 
        console.log("Автовывод включен");
    } else {
        img.style.backgroundColor = "rgb(217, 217, 217, 0.4)"; 
    }
}

// История ставок

document.getElementById('showAllHistory').addEventListener('click', function () {
    var allBets = document.getElementById('history__show-all');
    var arrowIcon = document.getElementsByClassName("arrowHistory")[0];

    if (allBets.style.display === 'none') {
        allBets.style.display = 'block';
        arrowIcon.classList.toggle("arrow-active");
    } else {
        allBets.style.display = 'none';
        arrowIcon.classList.remove("arrow-active")
    }
});


// Управление ставками - добавть еще одно поле - убрать

function toggleBlock() {
    const rulerBox1 = document.getElementById('rulerBox1');
    const rulerBox2 = document.getElementById('rulerBox2');
    const plusButton = document.getElementById('manageBetAdd');
    
    if (rulerBox2.style.display === "none") {
        // Открыть второй блок и скрыть кнопку "плюс" на первом блоке
        rulerBox2.style.display = "block";
        plusButton.style.display = "none";
    } else {
        // Закрыть второй блок и вернуть кнопку "плюс" на первом блоке
        rulerBox2.style.display = "none";
        plusButton.style.display = "block";
    }
}

// Делать ставки

// Находит элемент <p> внутри <button> и получает его содержимое
function getBetValue(button) {
    const betText = button.querySelector('p').textContent;
    const betValue = parseInt(betText.replace(/\D/g, ''));
    return betValue;
}

function placeBet(value) {
    var betClickStyle = document.getElementsByClassName('bet__click-box');
    
    const betBox = betClickStyle[0].getElementsByClassName('click-box');

    if (betBox[0].style.display == "block") {
        betBox[1].style.display = 'block';
        betBox[0].style.display = "none";
        betClickStyle[0].style.background = "rgba(203, 42, 73, 0.70)";
        betClickStyle[0].style.border = "2px solid #CB2A49";
    } else {
        betBox[1].style.display = 'none';
        betBox[0].style.display = "block";
        betClickStyle[0].style.border = "";
        betClickStyle[0].style.background = "linear-gradient(99deg, #F26F37 0%, #EF4747 48.25%, #CB2A49 94.23%)";  
    }
}