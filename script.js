const score = JSON.parse(localStorage.getItem('score')) || //the stored value.
  {Wins:0, Loses:0, Ties:0} // to use this when starting if the localStorage is null.
  
  function winORlose(result){
  document.querySelector('.js-result').innerHTML = result;
  }

  function display(){
  document.querySelector('.js-score').innerHTML = `Wins:${score.Wins}&nbsp Loses:${score.Loses}&nbsp Ties:${score.Ties}`
  }
display();//function.

  function bothMove(yourMove,computerMove){
    document.querySelector('.js-move').innerHTML = `Your Move <img class="you-computermove-img" src="/images/${yourMove}-emoji.png"> <img class="you-computermove-img" src="/images/${computerMove}-emoji.png"> Computer`;
  }

  function reset(){
    score.Wins = 0;
    score.Loses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    console.log(JSON.parse(localStorage.getItem('score')));
display();//function.
  }

  function playWithButton(){
    document.body.addEventListener('keydown', function(event){
    if(event.key==='r'||event.key==='R')
      MAIN('rock');
    else if(event.key==='p'||event.key==='P')
      MAIN('paper');
    else if(event.key==='s'||event.key==='S')
      MAIN('scissors');
   })}
playWithButton(); //function.

    function pickComputerMove(){
    const randNum = Math.random(); //function.
    if(randNum >= 0 && randNum <=1/3)
    return 'rock';
    else if (randNum > 1/3 && randNum < 2/3)
    return 'paper';
    else if (randNum >= 2/3 && randNum < 1)
    return 'scissors';
  }

  function result(yourMove,computerMove){
    let result = '';
    if (computerMove===yourMove)
      result ='Tie';
    else if ((yourMove==='rock' && computerMove==='paper') || (yourMove==='paper' && computerMove==='scissors') || (yourMove==='scissors' && computerMove==='rock'))
      result = 'you lose';
    else if ((yourMove === 'paper' && computerMove === 'rock') || (yourMove === 'scissors' && computerMove === 'paper') || (yourMove==='rock' && computerMove==='scissors'))
      result = 'you win';
    return result;
  }

  function MAIN(yourMove){

    const computerMove = pickComputerMove(); //function.
    const outCome = result(yourMove,computerMove); //function.

    bothMove(yourMove,computerMove); //function.

    if (outCome === 'you win')
      score.Wins += 1;
    else if (outCome === 'you lose')
      score.Loses += 1;
    else 
      score.Ties += 1;

    localStorage.setItem('score',JSON.stringify(score)); //Store the value
    display();//function.
    winORlose(outCome);//function.

   console.log(`Your move = ${yourMove}\n computer move = ${computerMove}\n ${outCome}\n Wins = ${score.Wins} Loses = ${score.Loses} Ties = ${score.Ties}`);
  }

  //----------------------------------------------------------------------
  let started = false;
  let Ai;
  function aiPlay(){
    if(!started){
    document.querySelector('.ai-play').innerHTML='Stop AI play';
    Ai =setInterval(function(){
    const yourMove = pickComputerMove(); //function.
    MAIN(yourMove)},1000); //function.
    started = true;
  } else {
    document.querySelector('.ai-play').innerHTML='Start AI play';
    clearInterval(Ai);
    started = false;
  }
}