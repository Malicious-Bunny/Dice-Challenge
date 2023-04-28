let dice1=Math.floor(Math.random()*6)+1;
let dice2=Math.floor(Math.random()*6)+1;
console.log(`${dice1} and ${dice2}`);
const diceone=document.querySelector('img.dice1');
const dicetwo=document.querySelector('img.dice2');

if(dice1==1){
    diceone.setAttribute('src','images/dice1.png');
}else if(dice1==2){
    diceone.setAttribute('src','images/dice2.png');
}else if(dice1==3){
    diceone.setAttribute('src','images/dice3.png');
}else if(dice1==4){
    diceone.setAttribute('src','images/dice4.png');
}else if(dice1==5){
    diceone.setAttribute('src','images/dice5.png');
}else if(dice1==6){
    diceone.setAttribute('src','images/dice6.png');
}
if(dice2==1){
    dicetwo.setAttribute('src','images/dice1.png');
}else if(dice2==2){
    dicetwo.setAttribute('src','images/dice2.png');
}else if(dice2==3){
    dicetwo.setAttribute('src','images/dice3.png');
}else if(dice2==4){
    dicetwo.setAttribute('src','images/dice4.png');
}else if(dice2==5){
    dicetwo.setAttribute('src','images/dice5.png');
}else if(dice2==6){
    dicetwo.setAttribute('src','images/dice6.png');
}
let head=document.querySelector('h1.winner');

if(dice1>dice2){
    head.innerHTML='<strong>🚩Player one wins</strong>';
}else if(dice1<dice2){
    head.innerHTML='<strong>Player two wins🚩</strong>'
}else if(dice1==dice2){
    head.innerHTML='<strong>😂We got ourselves a tie😂</strong>'
}
