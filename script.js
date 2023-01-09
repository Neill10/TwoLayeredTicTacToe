function initialize(){
    //TTT table cells
    //each of these objects will be assigned one main attributes:
    //locked-
    //the value stored inside the cell(is the same as the innerHTML)
    c1 = document.getElementById("c1");
    c2 = document.getElementById("c2");
    c3 = document.getElementById("c3");
    c4 = document.getElementById("c4");
    c5 = document.getElementById("c5");
    c6 = document.getElementById("c6");
    c7 = document.getElementById("c7");
    c8 = document.getElementById("c8");
    c9 = document.getElementById("c9");

    display = document.getElementById("textDisplay");
    
    turn = 0;
    player = "";
    bot ="";

    cArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
    
    for(var i = 0; i < cArray.length; i++){
        //each element in cArray
        var cell = cArray[i];
        //starting cell are never locked
        cell.locked = false;
        //starting cell innerHTML is blank
        cell.innerHTML = "";
    }
}

function change(cell){
    //will run if the cell is not locked
    if(!cell.locked){
        console.log(turn);
        //first player move (aka X)
        //when turn is it is the X's player turn
        if(turn == 0){
            //if the cell has a X in it, it will lock and turn color
            if(cell.innerHTML == "X"){
                cell.style.color = "red";
                cell.innerHTML = "X";
                cell.locked = true;
            }
            else{
                cell.innerHTML = "X";
                cell.style.color = "black";
            }
            
        }
        //second move (aka O)
        //when turn is 1 it is the O's player's turn.
        else{
            //if the cell has a O in it, it will lock and turn color
            if(cell.innerHTML == "O"){
                cell.style.color = "red";
                cell.innerHTML = "O";
                cell.locked = true;
            }
            else{
                cell.innerHTML = "O";
                cell.style.color = "black";
            }
        }
        win();
        turn++;
        //will reset turn to 0 if it is greater than 1.
        if(turn > 1){
            turn = 0;
        }
    }
}

function setPlayer(play){
    if(play == 1){
        player = "X";
        bot = "O";
    }
    else{
        
        player = "O";
        bot = "X";
    }
    reset();
    console.log("player: " + player);
    console.log("bot: " + bot);
}

function reset(){
    for(var i = 0; i < cArray.length; i++){
        //each element in cArray
        var cell = cArray[i];
        //starting cell are never locked
        cell.locked = false;
        //starting cell innerHTML is blank
        cell.innerHTML = "";
    }
    display.innerHTML = "";
}
function lockAll(){
    for(var i = 0; i < cArray.length; i++){
        //each element in cArray
        var cell = cArray[i];
        //starting cell are never locked
        cell.locked = true;
    }
}
function runGame(){

}
//returns true or false based on conditions being meet
function win(){
    var win = false;
    //starting left to right
    if(c1.innerHTML !="" && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;
    }
    else if(c4.innerHTML !="" && c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;


    }
    else if(c7.innerHTML !="" && c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;

    }

    //top down
    if(c1.innerHTML !="" && c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;


    }
    else if(c2.innerHTML !="" && c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;


    }
    else if(c3.innerHTML !="" && c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;


    }
    //diagonal
    if(c1.innerHTML !="" && c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;


    }
    else if(c3.innerHTML !="" && c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML)
    {
        display.innerHTML = "YOU WIN";
        lockAll();
        win = true;
    }
    return win;
}
function bot(){

}