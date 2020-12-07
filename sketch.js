var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1300,400);

  speed=random(30,52);
  weight=random(223,321);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 40, 10);
  bullet.shapeColor=color(225);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background("black");

    if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10)
      {
        wall.shapeColor=color(230,0,0);
      }

      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    }

  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
return false;;

}