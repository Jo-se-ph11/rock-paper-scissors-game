//This function below generates a random word from the array

let get_computer_choice = () => {
    let choice = ['paper', "scissors", "rock"];
    let random_choice = choice[Math.floor(Math.random() * choice.length)];
    return random_choice;
}

let player_choice = prompt("Type rock, paper, or scissors");

function play_round  ( player_choice, computer_choice) {
   switch(true) {
    case ( player_choice == "rock" && computer_choice =="scissors" ):
        return "You Win! rock beats scissors";
        return player_choice++;
        break;
    case ( player_choice == "scissors" && computer_choice ==  "rock" ):
        return "Computer Win! rock beats scissors";
        return computer_choice++;
        break;
    case ( player_choice == "paper" && computer_choice == "scissors" ):
        return "Computer Win! scissors beats paper";
        return computer_choice++;
        break; 
    case ( player_choice == "scissors" && computer_choice == "paper" ):
        return "You win! scissors beats paper";
        return player_choice++;
        break;
    case (player_choice == "rock" && computer_choice == "paper" ):
        return "Computer Win! paper beats rock";
        return computer_choice++;
        break;
    case ( player_choice == "paper" && computer_choice == "rock" ):
        return "You Win! paper beats rock";
        return player_choice++;
        break;
    case ( player_choice == "rock" && computer_choice == "rock" ):
        return "It's a tie! rock and rock";
        break;
    case ( player_choice == "scissors" && computer_choice == "scissors" ):
        return "it's a tie! scissors and scissors";
        break;
    case ( player_choice == "paper" && computer_choice == "paper" ):
        return "It's a tie! paper and paper";
        break;
    default:
        return "Invalid Input";
   } 
}

const game = () => {
    let player_choice = "";
    for ( let i = 0; i < 5; i++) {
        player_choice = prompt("Type rock, paper, or scissors");
        console.log(play_round(player_choice.toLowerCase(), get_computer_choice()));
    }
}

console.log(game());






