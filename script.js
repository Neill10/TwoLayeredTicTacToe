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

    title = document.getElementById("title");
    display = document.getElementById("textDisplay");
    general = document.getElementById("general");

    

    turn = 0;
    player = "";
    bot ="";
    //this will keep track of which cells they have previously moved to.
    playerPrevious = "";
    botPrevious = "";

    cArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
    
    for(var i = 0; i < cArray.length; i++){
        //each element in cArray
        var cell = cArray[i];
        //starting cell are always locked until player selects a team
        cell.locked = true;
        //starting cell innerHTML is blank
        cell.innerHTML = "";
        cell.style.color = "black";
    }
}
//prototype
function change1(cell){
    //will run if the cell is not locked
    if(!cell.locked){
        //console.log(turn);
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

        //bot will move here
        bot();

        //win conditions
        win();
        turn++;
        //will reset turn to 0 if it is greater than 1.
        if(turn > 1){
            turn = 0;
        }
    }
}
//updated for bot and player movements
function change(cell){
    //will run if the cell is not locked
    if(playerPrevious == cell){
        display.innerHTML = "You've previously selected this block last turn! Pick another one!";
        display.style.color = "orange";
    }
    if(!cell.locked && playerPrevious != cell){
        general.innerHTML=  "";
        console.log(turn);
        //
        display.innerHTML = "";
        display.style.color = "black";
        //
        if(player == 0){
            
            playerPrevious = cell;
            if(cell.innerHTML == "X"){
                cell.style.color = "red";
                cell.innerHTML = "X";
                cell.locked = true;
                
                general.innerHTML = "You have locked in a block!";
            }
            else{
                cell.innerHTML = "X";
                cell.style.color = "black";
            }
        }
        else{
            if(cell.innerHTML == "O"){
                cell.style.color = "red";
                cell.innerHTML = "O";
                cell.locked = true;
                general.innerHTML = "You have locked in a block!";

            }
            else{
                cell.innerHTML = "O";
                cell.style.color = "black";
            }
        }

        win();
        if(!win()){
            botMove();
            win();
        }
        //determines a draw
        var allFalse = true;
        for(cell of cArray){
            if(!cell.locked){
                allFalse = false;
            }
        }

        if(allFalse && !win()){
            display.innerHTML = "DRAW!";
            display.style.color = "grey";
        }
        
        turn++;
        //will reset turn to 0 if it is greater than 1.
        if(turn > 1){
            turn = 0;
        }
    }
}

function botMove(){
    var move = "test";
    if (bot == 0){
        move = "X";
    }
    else{
        move="O";
    }
    //actual algorithm to find out best moves (not implemented)
    //idea is try to prevent your victory
    //search through cArray to see where opponent marks are.
    //find their winning combos and block it.
    //else puts a mark randomly

    var possibleMoves = [];
    for(cell of cArray){
        //console.log("HTML: " + cell.innerHTML);
        //console.log("LOCKED: " + cell.locked);
        if(!cell.locked && cell != botPrevious){
            possibleMoves.push(cell);
            //console.log(cell);
        }
    }
    var rand = Math.floor(Math.random()*possibleMoves.length);
    //console.log(possibleMoves);
    //console.log(rand);
    //console.log(possibleMoves[rand]);
    //change(possibleMoves[rand]);
    var randCell = possibleMoves[rand];
    //console.log(randCell);
    //console.log(randCell.innerHTML);
    if(randCell.innerHTML != ""){
        botPrevious = randCell;
        if(randCell.innerHTML == move){
            general.innerHTML = "BOT has locked a block!";
            randCell.style.color = "red";
            randCell.locked = true;
        }
        else{
            general.innerHTML = "BOT has replaced your mark!";
        }
    }
    randCell.innerHTML = move;
    turn++;
}
function setPlayer(play){
    if(play == 0){
        player = 0;
        bot = 1;
    }
    else{
        unlockAll();
        player = 1;
        bot = 0;
        botMove();
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
        cell.style.color = "black";

    }
    title ="Tic Tac Toe"
    display.innerHTML = "";
    general.innerHTML="";
    playerPrevious = "";
    botPrevious = "";
}
function lockAll(){
    for(var i = 0; i < cArray.length; i++){
        //each element in cArray
        var cell = cArray[i];
        //starting cell are never locked
        cell.locked = true;
    }
}
function unlockAll(){
    for(var i = 0; i < cArray.length; i++){
        var cell = cArray[i];
        //starting cell are always locked until player selects a team
        cell.locked = false;
    }
}
/*
function runGame(){
    if(bot == 0){
        bot();
    }
}
*/


function win(){
    var win = false;
    //Draw condition. will need to change win to return 0, 1, 2 for win, draw, lose
    for(cell in cArray){
        if(!cell.locked){

        }
    }
    //starting left to right

    if(c1.innerHTML !="" && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML)
    {
        if(winCheck(c1.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";
        }
        
        lockAll();
        win = true;
    }
    else if(c4.innerHTML !="" && c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML)
    {
        if(winCheck(c4.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;


    }
    else if(c7.innerHTML !="" && c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML)
    {
        if(winCheck(c7.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        };
        lockAll();
        win = true;

    }

    //top down
    if(c1.innerHTML !="" && c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML)
    {
        if(winCheck(c1.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;


    }
    else if(c2.innerHTML !="" && c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML)
    {
        if(winCheck(c2.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;


    }
    else if(c3.innerHTML !="" && c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML)
    {
        if(winCheck(c3.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;


    }
    //diagonal
    if(c1.innerHTML !="" && c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML)
    {
        if(winCheck(c1.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;


    }
    else if(c3.innerHTML !="" && c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML)
    {
        if(winCheck(c3.innerHTML)){
            display.innerHTML = "YOU WON";
            display.style.color = "green";
            general.innerHTML = "";

        }
        else{
            display.innerHTML = "Imagine losing to a BOT";
            display.style.color =  "red";
            general.innerHTML = "";

        }
        lockAll();
        win = true;
    }
    return win;
}

function winCheck(mark){
    var playerMark = "";
    if(player == 0){
        playerMark = "X";
    }
    else{
        playerMark = "O";
    }
    if(mark != playerMark){
        return false;
    }
    return true;
}