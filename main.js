//This function below generates a random word from the array

function get_computer_choice(){
    let choice = ['paper', "scissors", "rock"];
    let random_choice = choice[Math.floor(Math.random() * 3)];
    return random_choice;
}

const btn = document.querySelectorAll("#btn");
let player_score = 0;
let computer_score = 0; 

btn.forEach((btn) => {

    btn.addEventListener("click", function() {
   
       let player_choice = this.textContent;
       play_round( player_choice, get_computer_choice() );
       update_score();
       if (check_winner()) {
           player_score = computer_score = 0;
           update_score();
         }
   
   
    })   
   })

   const result = document.createElement('div');
   container.append(result);
   
   function play_round  ( player_choice, computer_choice) {
    switch(true) {
     case  ( player_choice == "rock" && computer_choice == "rock" ):
        result.textContent = "It is a tie!";
         return;
         break;
     case  ( player_choice == "scissors" && computer_choice =="scissors" ):
        result.textContent = "it is a tie!";
         return;
         break;
     case  ( player_choice == "paper" && computer_choice =="paper" ):
        result.textContent = "It is a tie!";
         return;
         break;
     case ( player_choice == "rock" && computer_choice =="scissors" ):
        result.textContent = "You Win! rock beats scissors";
         player_score++;
         break;
     case ( player_choice == "scissors" && computer_choice ==  "rock" ):
          result.textContent = "Computer Win! rock beats scissors";
         computer_score++;
         break;
     case ( player_choice == "paper" && computer_choice == "scissors" ):
         result.textContent = "Computer Win! scissors beats paper";
         computer_score++;
         break; 
     case ( player_choice == "scissors" && computer_choice == "paper" ):
        result.textContent ="You win! scissors beats paper";
         player_score++;
         break;
     case (player_choice == "rock" && computer_choice == "paper" ):
        result.textContent = "Computer Win! paper beats rock";
         computer_score++;
         break;
     case ( player_choice == "paper" && computer_choice == "rock" ):
        result.textContent= "You Win! paper beats rock";
         player_score++;
         break;
     default:
         return "Invalid Input";
    } 
   } 

function update_score() {
    document.getElementById("player-score").textContent = player_score;
    document.getElementById("computer-score").textContent = computer_score;
}


function check_winner() {
    if (player_score === 5 || computer_score === 5) {
        const board = document.createElement('div');
        container.appendChild(board);
      const winner =
        player_score === 5
          ? "You win the game! Congratulations!"
          : "Computer wins the game! Try again next time!";
         board.textContent = winner;
      return true;
    }
    return false;

}
