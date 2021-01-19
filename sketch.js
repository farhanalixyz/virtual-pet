var dog,happyDog,database,foodS,foodStock;

function preload()
{
  dog=loadImage("images/dog (1).png");
  happyDog=loadImage("images/happydog (1).png");
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,20,20);
  dog=loadImage("images/dog (1).png");
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.loadImage("images/happydog (1).png");
  }
  drawSprites();
  textSize(20);
  text("Note:Press UP_ARROW KEY to feed drago milk");
  fill(17,25,50);
  stroke();
} 

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}