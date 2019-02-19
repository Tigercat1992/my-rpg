
const playGame = () => {

  //Up
  if(moveUp && !moveDown)
  {
    alien.vy = -4;
  }
  //Down
  if(moveDown && !moveUp)
  {
    alien.vy = 4;
  }
  //Left
  if(moveLeft && !moveRight)
  {
    alien.vx = -4;
  }
  //Right
  if(moveRight && !moveLeft)
  {
    alien.vx = 4;
  }

  //Set the alien's velocity to zero if none of the keys are being pressed
  if(!moveUp && !moveDown)
  {
    alien.vy = 0;
  }
  if(!moveLeft && !moveRight)
  {
    alien.vx = 0;
  }

  //Move the alien and set its screen boundaries
  alien.x = Math.max(64, Math.min(alien.x + alien.vx, gameWorld.width - alien.width - 64)); 
  alien.y = Math.max(64, Math.min(alien.y + alien.vy, gameWorld.height - alien.height - 64));
  
  //Check collision between the alien and the boxes
  for(var i = 0; i < boxes.length; i++)
  {
    blockRectangle(alien, boxes[i]);
  }
  
  //Check for collisions with stars
  for(var i = 0; i < stars.length; i++)
  { 
    var star = stars[i];
    if(hitTestRectangle(alien, star) && star.visible)
    {
      star.visible = false;
      starsCollected++;
      
      //Check whether the level is over
      //by checking if the starsCollected matches
      //the total number in the stars array
      if(starsCollected === stars.length)
      {
        gameState = LEVEL_COMPLETE;
      }    
    }
  }
   
  //Check for collisions with monsters
  for(var i = 0; i < monsters.length; i++)
  { 
    var monster = monsters[i];
    if(hitTestCircle(alien, monster))
    {
      gameState = OVER;
    }
  }
  
  //The monsters
  for(var i = 0; i < monsters.length; i++)
  {
    var monster = monsters[i];
    
    //Move the monsters
    monster.x += monster.vx;
    monster.y += monster.vy;
    
    //Check whether the monster is at a tile corner
    if(Math.floor(monster.x) % SIZE === 0
    && Math.floor(monster.y) % SIZE === 0)
    {
      //Change the monster's direction
      changeDirection(monster);  
    }
   
	//Change the monster's state to SCARED if
	//it's 128 pixels from the alien
	var vx = alien.centerX() - monster.centerX();
	var vy = alien.centerY() - monster.centerY();
	  
	//Find the distance between the circles by calculating
    //the vector's magnitude (how long the vector is)  
    var magnitude = Math.sqrt(vx * vx + vy * vy);
	  
    if(magnitude < 192)
    {
      monster.state = monster.SCARED;
    }
    else
    {
      monster.state = monster.NORMAL;
    }
	  
    //Update the monster to reflect state changes
    monster.update();
  }
  
  //Scroll the camera
  if(alien.x < camera.leftInnerBoundary())
  {
    camera.x = Math.floor(alien.x - (camera.width / 4));
  }
  if(alien.y < camera.topInnerBoundary())
  {
    camera.y = Math.floor(alien.y - (camera.height / 4));
  }
  if(alien.x + alien.width > camera.rightInnerBoundary())
  {
    camera.x = Math.floor(alien.x + alien.width - (camera.width / 4 * 3));
  }
  if(alien.y + alien.height > camera.bottomInnerBoundary())
  {
    camera.y = Math.floor(alien.y + alien.height - (camera.height / 4 * 3));
  }
  
  //The camera's gameWorld boundaries
  if(camera.x < gameWorld.x)
  {
    camera.x = gameWorld.x;
  }
  if(camera.y < gameWorld.y)
  {
    camera.y = gameWorld.y;
  }
  if(camera.x + camera.width > gameWorld.x + gameWorld.width)
  {
    camera.x = gameWorld.x + gameWorld.width - camera.width;
  }
  if(camera.y + camera.height > gameWorld.height)
  {
    camera.y = gameWorld.height - camera.height;
  }  
}

export default playGame;