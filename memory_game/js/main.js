var cards = [
  {
    rank :"queen",
    suit: "hearts",
    cardImage: "../images/queen-of-hearts.png"
  },
  {
    rank :"queen",
    suit: "diamonds",
    cardImage: "../images/queen-of-diamonds.png"
  },
  {
    rank :"king",
    suit: "hearts",
    cardImage: "../images/king-of-hearts.png"
  },
  {
    rank :"king",
    suit: "diamonds",
    cardImage: "../images/king-of-diamonds.png"
  }
];

var cardsInPlay=[];

function createBoard()
{

      for (var i = 0; i < cards.length; i++)
      {
          var cardElement = document.createElement('img');
          console.log("1"); //check
          console.log(cardElement);//check
          cardElement.setAttribute('src', '../images/back.png');
          cardElement.setAttribute('data-id', i);
          console.log("2");//check
          console.log(cardElement);//check
          cardElement.addEventListener('click', flipCard(0));
          console.log("3");//check
          console.log(cardElement);//check
          document.getElementsByTagName('div').appendChild(cardElement); //error
          console.log("4");//check
          console.log(cardElement);//check
    //cardElement.getElementsById('#game-board')[0].appendChild(cardElement);
      }
}

function checkForMatch()
{
    this.setAttribute('src', cards[cardId].cardImage); //cannot test because of error
    if(cardsInPlay.length == 2)
    {
      if (cardsInPlay[0] === cardsInPlay[1])
      {
        alert("You found a match!");
      }
      else
      {
        alert("Sorry, try again.");
      }
    }
}

function flipCard()
{
   this.getAttribute('data-id');
   cardsInPlay.push(cards[cardId].rank); //push
   checkForMatch();
   console.log(" User flipped " + cards[cardId].rank); //check
   console.log(" User flipped " + cards[cardId].suit); //check
   console.log(" User flipped " + cards[cardId].cardImage); //check
}//end of fucntion

createBoard();
