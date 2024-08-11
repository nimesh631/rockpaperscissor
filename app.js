// let userScore=0;
// let compScore=0;

// const choices=document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");
// const userScorePara=document.querySelector('#user-score');
// const compScorePara=document.querySelector('#comp-score');

// const genCompChoice=()=>{
//     const options=["rock","paper","scissors"];
//     const randIdx=Math.floor(Math.random()*3);
//     return options[randIdx];
// //rock,paper,scissors
// }

// const drawgame=()=>{
//     // console.log("game was draw.")
//     msg.innerText="Game was draw ";

//     msg.style.backgroundColor="blue";
// };

// const showWinner=(userWin,userChoice,compChoice)=>{
//     if(userWin){
//         userScore++;
//         userScorePara.innerText=userScore;
//         // console.log("you win!");
//         msg.innerText=`you win! your ${userChoice} beats computer ${compChoice}`;
//         msg.style.backgroundColor="green";
//     }
//     else{
//         compScore++;
//         compScorePara.innerText=compScore;
//         // console.log("you lose!");
//         msg.innerText=`you lose! computer ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor="red";
//     }
// };


// const playGame=(userChoice)=>{
//     // console.log("user choice=",userChoice);
//     const compChoice=genCompChoice();
//     // console.log("comp choice=",compChoice);

//     if(userChoice === compChoice){
//         //draw game
//         drawgame();
//     }

//     else{
//         let userWin=true;
//         if(userChoice==="rock"){
//             //scissor or paper
//             // userWin=compChoice==="paper"?false:true;
//             if(compChoice==="paper"){
//                 userWin=false;
//             }
//             else{
//                 userWin=true;
//             }
//         }
//         else if(userChoice==="paper"){
//             //rock or scissor
//             userWin=compChoice==="scissors"?false:true;
//         }
//         else{
//             //rock or paper
//             userWin=compChoice==="rock"?false:true;
//         }
//         showWinner(userWin,userChoice,compChoice);

//     }
// };

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice=choice.getAttribute("id");
//     // console.log("choice was clicked",userChoice);
//     playGame(userChoice);
//     });
// });


let userScore = 0 ;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

genCompChoice=()=>{
    const options =["rock" , "paper" ,"scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner=(userChoice,compChoice,userWin)=>{
    if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

};

const drawGame=()=>{
    msg.innerText="Game Draw.";
    msg.style.backgroundColor="blue";

};

const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }

        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else{
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
            
        }

    showWinner(userChoice,compChoice,userWin);

    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});