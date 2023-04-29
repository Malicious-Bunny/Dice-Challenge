let dice1=Math.floor(Math.random()*6)+1;
let dice2=Math.floor(Math.random()*6)+1;
console.log(`${dice1} and ${dice2}`);
let path1=String(`images/dice${dice1}.png`);
let path2=String(`images/dice${dice2}.png`)

let img1=document.querySelector('img.dice1');
img1.setAttribute('src',path1);
let img2=document.querySelector('img.dice2');
img2.setAttribute('src',path2);

(dice1>dice2)? document.querySelector('h1.winner').innerHTML='🚩Player1 wins': (dice1<dice2)?document.querySelector('h1.winner').innerHTML='Player2 wins🚩' : document.querySelector('h1.winner').innerHTML='😂Draw!😂';
/*simply means
if(a){
    b
}else{
    if(c){
        d
    }else{
        e
    }
}
*/