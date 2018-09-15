var scores, roundScores, activePlayer, dice,gameplaying;

init();
var lastDice;

document.querySelector('.btn-roll').addEventListener( 'click' ,function () {
    if(gameplaying){
        var dice = Math.floor(Math.random() * 6) + 1;


        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'images/dice-' + dice + '.png';
        document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
        if(dice===6 && lastDice===6){
            scores[activePlayer]=0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
nextPlayer();
        }else if (dice !== 1) {
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;


        } else {
            nextPlayer();


        }
    }
    lastDice=dice;

});
document.querySelector('.btn-hold').addEventListener('click', function () {

  if(gameplaying){
      scores[activePlayer] += roundScores;

      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input  = document.querySelector('.final-score').value;
if(input){
 var   winnerSocre = input;

}else{
    winnerSocre=100;
}

      if (scores[activePlayer] >=winnerSocre) {
          document.querySelector('#name-' + activePlayer).textContent = 'winner';
          document.querySelector('.dice').style.display = 'none';
          // document.querySelector('.btn-roll').style.display = 'none';
          // document.querySelector('.btn-hold').style.display = 'none';
          // document.querySelector('.player-0-panel').classList.toggle('active');
          // document.querySelector('.player-0-panel').classList.remove('active');
          // document.querySelector('.player-1-panel').classList.remove('active');
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
          gameplaying = false;

      } else {
          nextPlayer();
      }

  }

});
function init() {
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gameplaying=true;
    dice = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('#name-0').textContent ='Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
};
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click',init);








