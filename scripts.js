const jokes=["Nurse: Doctor, there's a patient that says he's invisible. Doctor: Well, tell him I can't see him right now!","In my career as a lumberjack I cut down exactly 52,487 trees. I know because I kept a log.","Why did the opera singer go sailing? They wanted to hit the high Cs.","How does a scientist freshen their breath? With experi-mints!","oasters were the first form of pop-up notifications."];
const result=document.querySelector('.result');
const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    let randomnum=Math.floor(Math.random()*jokes.length);
    result.textContent=jokes[randomnum];
})