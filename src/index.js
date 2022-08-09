document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
    ]

    cards.sort(() => 0.5 - (Math.random()));

    console.log(cards);

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardChosenIds = [];
    let cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }  

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardChosenIds.push(cardId); 
        this.setAttribute('src', cards[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch(){
        const cardArray = document.querySelectorAll('img');
        const optionOneId = cardChosenIds[0];
        const optionTwoId = cardChosenIds[1];
        if(optionOneId === optionTwoId){
            alert('You have clicked the same image!');
            cardArray[optionOneId].setAttribute('src', 'src/images/blank.png');
            cardArray[optionTwoId].setAttribute('src', 'src/images/blank.png');
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('You have found a matching card!');
            cardArray[optionOneId].setAttribute('src', 'src/images/white.png');
            cardArray[optionTwoId].setAttribute('src', 'src/images/white.png');
            cardArray[optionOneId].removeEventListener('click', flipCard);
            cardArray[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            alert('Sorry, try again!');
            cardArray[optionOneId].setAttribute('src', 'src/images/blank.png');
            cardArray[optionTwoId].setAttribute('src', 'src/images/blank.png');
        }
        cardsChosen = [];
        cardChosenIds = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length / 2) {
            resultDisplay.textContent = 'Congratulations! You have won!';
        }
    }

    createBoard();
});