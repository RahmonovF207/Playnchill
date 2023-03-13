let currentLanguage = document.getElementById('current-language')
let languageModal = document.getElementById('language-modal')

languageModal.style.display = 'none'

currentLanguage.addEventListener('click', () => {
    if(languageModal.style.display == 'none'){
        languageModal.style.display = 'block'
    } else {
        languageModal.style.display = 'none'
    }
})

let en = document.getElementById('en')
let ru = document.getElementById('ru')

let priseEn = document.getElementById('priseEn')
let priseEnSecond = document.getElementById('priseEnSecond')


let gamepopularPriceH4 = document.getElementById('PopularPrise2')
let priseAll2 = document.getElementById('priseAll2')
let priseSecond = document.getElementById('priseSecond')

let priseAll1 = document.getElementById('priseAll1')
let priseFirst = document.getElementById('priseFirst')

let priseAll3 = document.getElementById('priseAll3')
let priseThird = document.getElementById('priseThird')

let priseAll4 = document.getElementById('priseAll4')
let priseFourth = document.getElementById('priseFourth')

let versionPrise = document.getElementById('versionPrise')
let versionPriseSecond = document.getElementById('versionPriseSecond')

let versionPrise2 = document.getElementById('versionPrise2')
let versionPrise2Second = document.getElementById('versionPrise2second')

en.addEventListener('click', () => {
    currentLanguage.innerHTML = 'EN$'
    priseEn.innerHTML = '66$'
    priseEnSecond.innerHTML = '92$'
    priseAll1.innerHTML = '133$'
    priseFirst.innerHTML = '216$'
    priseAll2.innerHTML = '133$'
    priseSecond.innerHTML = '216$'
    priseAll3.innerHTML = '133$'
    priseThird.innerHTML = '216$'
    priseAll4.innerHTML = '133$'
    priseFourth.innerHTML = '216$'
    versionPrise.innerHTML = '66$'
    versionPriseSecond.innerHTML = '92$'
    versionPrise2.innerHTML = '66$'
    versionPrise2Second.innerHTML = '92$'
})

ru.addEventListener('click', () => {
    currentLanguage.innerHTML = 'RU$'
    priseEn.innerHTML = '4 999 Р'
    priseEnSecond.innerHTML = '6 999 Р'
    priseAll1.innerHTML = '10 093 P'
    priseFirst.innerHTML = '16 400 P'
    priseAll2.innerHTML = '10 093 P'
    priseSecond.innerHTML = '16 400 P'
    priseAll3.innerHTML = '10 093 P'
    priseThird.innerHTML = '16 400 P'
    priseAll4.innerHTML = '10 093 P'
    priseFourth.innerHTML = '16 400 P'

    versionPrise.innerHTML = '4 999 Р'
    versionPriseSecond.innerHTML = '6 999 Р'
    versionPrise2.innerHTML = '4 999 Р'
    versionPrise2Second.innerHTML = '6 999 Р'
})

let accaunt = document.getElementById('accaunt')
let register = document.getElementById('register')

register.style.display = 'none'

accaunt.addEventListener('click', () => {
    if(register.style.display == 'none'){
        register.style.display = 'flex'
    } else {
        register.style.display = 'none'
    }
})

let basketIcon = document.getElementById('basket-icon')
let basketIconSpan = document.querySelector('#basket-icon span')
let likedIcon = document.getElementById('liked')
let likedIconSpan = document.querySelector('#liked span')
let one = 1;

let inTheBasket = document.getElementById('inTheBasket')
let inTheLiked = document.getElementById('inTheLiked')

inTheBasket.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    }
})

inTheLiked.addEventListener('click', () => {
    if(likedIconSpan.innerHTML == 0){
        likedIconSpan.innerHTML = one;
    } else if(likedIconSpan.innerHTML == 1) {
        likedIconSpan.innerHTML = 1 + one 
    } else if(likedIconSpan.innerHTML == 2) {
        likedIconSpan.innerHTML = 2 + one 
    } else if(likedIconSpan.innerHTML == 3) {
        likedIconSpan.innerHTML = 3 + one 
    } else if(likedIconSpan.innerHTML == 4) {
        likedIconSpan.innerHTML = 4 + one 
    } else if(likedIconSpan.innerHTML == 5) {
        likedIconSpan.innerHTML = 5 + one 
    }
})

let inBasketPopular = document.getElementById('inBasketPopular')
let inBasketPopular2 = document.getElementById('inBasketPopular2')
let inBasketPopular3 = document.getElementById('inBasketPopular3')
let inBasketPopular4 = document.getElementById('inBasketPopular4')


inBasketPopular.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})

inBasketPopular2.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})

inBasketPopular3.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})

inBasketPopular4.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})

let versionBasket = document.getElementById('versionBasket')

versionBasket.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})

let versionBasket2 = document.getElementById('versionBasket2')

versionBasket2.addEventListener('click', () => {
    if(basketIconSpan.innerHTML == 0){
        basketIconSpan.innerHTML = one;
    } else if(basketIconSpan.innerHTML == 1) {
        basketIconSpan.innerHTML = 1 + one 
    } else if(basketIconSpan.innerHTML == 2) {
        basketIconSpan.innerHTML = 2 + one 
    } else if(basketIconSpan.innerHTML == 3) {
        basketIconSpan.innerHTML = 3 + one 
    } else if(basketIconSpan.innerHTML == 4) {
        basketIconSpan.innerHTML = 4 + one 
    } else if(basketIconSpan.innerHTML == 5) {
        basketIconSpan.innerHTML = 5 + one 
    }
})



let versionLiked = document.getElementById('versionLiked')

versionLiked.addEventListener('click', () => {
    if(likedIconSpan.innerHTML == 0){
        likedIconSpan.innerHTML = one;
    } else if(likedIconSpan.innerHTML == 1) {
        likedIconSpan.innerHTML = 1 + one 
    } else if(likedIconSpan.innerHTML == 2) {
        likedIconSpan.innerHTML = 2 + one 
    } else if(likedIconSpan.innerHTML == 3) {
        likedIconSpan.innerHTML = 3 + one 
    } else if(likedIconSpan.innerHTML == 4) {
        likedIconSpan.innerHTML = 4 + one 
    } else if(likedIconSpan.innerHTML == 5) {
        likedIconSpan.innerHTML = 5 + one 
    }
})

let versionLiked2 = document.getElementById('versionLiked2')

versionLiked2.addEventListener('click', () => {
    if(likedIconSpan.innerHTML == 0){
        likedIconSpan.innerHTML = one;
    } else if(likedIconSpan.innerHTML == 1) {
        likedIconSpan.innerHTML = 1 + one 
    } else if(likedIconSpan.innerHTML == 2) {
        likedIconSpan.innerHTML = 2 + one 
    } else if(likedIconSpan.innerHTML == 3) {
        likedIconSpan.innerHTML = 3 + one 
    } else if(likedIconSpan.innerHTML == 4) {
        likedIconSpan.innerHTML = 4 + one 
    } else if(likedIconSpan.innerHTML == 5) {
        likedIconSpan.innerHTML = 5 + one 
    }
})




let boxFirstPay = document.querySelectorAll('#boxFirstPay')

let boxSecondPay = document.querySelectorAll('#boxSecondPay')

en.addEventListener('click', () => {
    boxFirstPay.forEach(boxFirstPay => {
        boxFirstPay.innerHTML = '143$'
    });
    boxSecondPay.forEach(boxSecondPay => {
        boxSecondPay.innerHTML = '215$'
    })
})

ru.addEventListener('click', () => {
    boxFirstPay.forEach(boxFirstPay => {
        boxFirstPay.innerHTML = '10 930 P'
    });
    boxSecondPay.forEach(boxSecondPay => {
        boxSecondPay.innerHTML = '16 400 P'
    })
})

let promotionPay = document.querySelectorAll('#promotionPay')
let promotionPay2 = document.querySelectorAll('#promotionPay2')

en.addEventListener('click', () => {
    promotionPay.forEach(promotionPay => {
        promotionPay.innerHTML = '143$'
    })
    promotionPay2.forEach(promotionPay2 => {
        promotionPay2.innerHTML = '215$'
    })
})

ru.addEventListener('click', () => {
    promotionPay.forEach(promotionPay => {
        promotionPay.innerHTML = '10 930 P'
    })
    promotionPay2.forEach(promotionPay2 => {
        promotionPay2.innerHTML = '16 400 P'
    })
})