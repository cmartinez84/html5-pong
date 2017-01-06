// var paddles = [];
var score;

var myArea = {
  canvas : document.createElement("canvas"),
  start : function(){
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateMyArea, 20);
  },
  clear : function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function(){
    clearInterval(this.interval);
  }
}

function Component (width, height, x, y, type){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.type = type;
  this.speedX = 0;
  this.speedY = 0;
  ctx = myArea.context;
  ctx.fillStyle = "white";
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function(){
    ctx = myArea.context;
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

  function updateMyArea(){
    console.log("update");
    myArea.clear();
    myPaddle.update();

    var x, y;
  }
myArea.start();

var myPaddle = new Component(30, 30, 100, 100, "thing" );
