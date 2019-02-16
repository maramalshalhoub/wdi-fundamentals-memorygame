/*
var cardOne = "queen";
var cardTwo= "king";
var cardThree = "queen";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
//var cards= ["queen", "queen", "king","king"];
var cards= [
{rank :"queen",
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
function checkForMatch()
{
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}
function flipCard(cardId)
{
  //var cardOne= cards[0]; //var
  //cardsInPlay.push(cardOne); //push
  //console.log("User flipped " + cardOne );

  //var cardTwo= cards[2]; //var
  //cardsInPlay.push(cardTwo); //push
  //console.log("User flipped " + cardTwo );

 cardsInPlay.push(cards[cardId].rank); //push
  // if (cardsInPlay.length==2)
  // {
  //   if (cardsInPlay[0]===cardsInPlay[1])
  //   {
  //     alert("You found a match!");
  //   }//end small if
  //   else
  //   {
  //     alert("Sorry, try again.");
  //   }//end else
  // }//end big IF
checkForMatch();
  console.log(" User flipped " + cards[cardId].rank);
  console.log(" User flipped " + cards[cardId].suit);
  console.log(" User flipped " + cards[cardId].cardImage);
}//end of fucntion
flipCard(0);
flipCard(2);
