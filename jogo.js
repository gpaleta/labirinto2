(function(){
    var cnv =document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var LEFT =65 , UP = 87 , RIGHT = 68 , DOWN = 83;
    var mvleft = mvup = mvright = mvdown = false;
    var tilesize = 32
    var player = {

    x: tilesize + 2,
    y: tilesize + 2,
    width: 28,
    heigth: 28

}

var maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
    [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    window.addEventListener("keydown",KeydownHandler,false);
    window.addEventListener("keyup",KeyupHandler,false);
function KeydownHandler(e){
    var key = e.keycode;
    switch(key){
        case LEFT:
            mvleft = true;
            break;
        case RIGHT:
            mvright = true;
            break;
        case UP:
            mvup = true;
            break;
        case DOWN:
            mvdown = true;
            break;
    }
}
function KeyupHandler(e){
    var key = e.keycode;
    switch(key){
        case LEFT:
            mvleft = false;
            break;
        case RIGHT:
            mvright = false;
            break;
        case UP:
            mvup = false;
            break;
        case DOWN:
            mvdown = false;
            break;
    }
}
    function update(){}

function render(){
    ctx.save();
    for(var row in maze ){
        for(var collumn in maze[row]){
            var tile = maze[row][collumn];
            if(tile ===1){
                var x = collumn * tilesize;
                var y = row * tilesize;
                ctx.fillRect(x,y,tilesize,tilesize);

            }


        }

    }
ctx.fillStyle = "#00f";
ctx.fillRect(player.x,player.y,player.width,player.heigth);
ctx.restore();

   
            }
        
        
        

function loop(){
    update();
    render();
   
}
requestAnimationFrame(loop, cnv);
}());






