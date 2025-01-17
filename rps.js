let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userScore");
const compscorepara =document.querySelector("#compScore");

const gencompchoice = () => {
    const options = ["rock" ,"paper","scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};
      const drawgame = () =>{
         msg.innerText = "game was draw.Play Again";
         msg.style.backgroundColor = "#d4a579"
 };

      const showwinner =(userwin,userchoice,compchoice) =>{
        if(userwin){
            userScore++;
            userscorepara.innerText = userScore;
            
            msg.innerText = ` You Win! your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor ="green";
        }
        else{
            compScore++;
            compscorepara.innerText = compScore;
            msg.innerText = `You lose, ${compchoice}  your beats ${userchoice}`;
            msg.style.backgroundColor ="#bc5449";
        }
      };

const playgame =(userchoice) =>{
    // console.log("user choice = " ,userchoice);
    const compchoice =gencompchoice ();
    // console.log("comp choice =", compchoice);
      
    if(userchoice === compchoice) {
        drawgame ();
    }
    else{
        let userwin =true;
        if(userchoice ==="rock"){
            userwin = compchoice ==="paper" ? false : true;
        }
        else if( userchoice ==="paper"){
            userwin = compchoice ==="scissors" ?false : true;
        }
        else{
            userwin =compchoice ==="rock" ? false : true;

        }
        showwinner(userwin,userchoice,compchoice);
      
    }
};
 choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
      const userchoice =choice.getAttribute("id");
    //console.log("choise was clicked", userchoice);
      playgame (userchoice);
 });
});
    