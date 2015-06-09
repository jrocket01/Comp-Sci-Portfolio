var zombie = document.getElementById("char");

function zMoveDown(dist){
    var currentPos = parseInt(zombie.style.top);
    var newPos = currentPos + dist;
    zombie.style.top = newPos + "px";
}

function zMoveRight(dist){
    var currentPos = parseInt(zombie.style.left);
    var newPos = currentPos + dist;
    zombie.style.left = newPos + "px";
}
function zMoveLeft(dist){
     var currentPos = parseInt(zombie.style.left);
     var newPos = currentPos - dist;
     zombie.style.left = newPos + "px";
 }
function zMoveUp(dist){
     var currentPos = parseInt(zombie.style.top);
     var newPos = currentPos - dist;
     zombie.style.top = newPos + "px";
 }

document.addEventListener("keydown", moveZombie);
function moveZombie(evt){
    var keyValue = evt.keyCode;
    
    switch(keyValue){
        case 87:
            zMoveUp(15);
            break;
        case 68:
            zMoveRight(15);
            break;
        case 65:
            zMoveLeft(15);
            break;
        case 83:
            zMoveDown(15);
            break;
    }
}
