
const buildMap = (levelMap) => {

  for(var row = 0; row < ROWS; row++) 
  {	
    for(var column = 0; column < COLUMNS; column++) 
    { 
      var currentTile = levelMap[row][column];
    
      if(currentTile != EMPTY)
      {
        //Find the tile's x and y position on the tile sheet
        var tilesheetX = Math.floor((currentTile - 1) % tilesheetColumns) * SIZE; 
        var tilesheetY = Math.floor((currentTile - 1) / tilesheetColumns) * SIZE;
        
        switch (currentTile)
        {
          case FLOOR:
            var floor = Object.create(spriteObject);
            floor.sourceX = tilesheetX;
            floor.sourceY = tilesheetY;
            floor.x = column * SIZE;
            floor.y = row * SIZE;
            sprites.push(floor);
            break;
          
          case BOX:
            var box = Object.create(spriteObject);
            box.sourceX = tilesheetX;
            box.sourceY = tilesheetY;
            box.x = column * SIZE;
            box.y = row * SIZE;
            sprites.push(box);
            boxes.push(box);
            break;
          
          case WALL:
            var wall = Object.create(spriteObject);
            wall.sourceX = tilesheetX;
            wall.sourceY = tilesheetY;            
            wall.x = column * SIZE;
            wall.y = row * SIZE;
            sprites.push(wall);
            break;
          
          case MONSTER:
            var monster = Object.create(monsterObject);
            monster.sourceX = tilesheetX;
            monster.sourceY = tilesheetY;
            monster.x = column * SIZE;
            monster.y = row * SIZE;
            //Make the monster choose a random start direction 
            changeDirection(monster)          
            monsters.push(monster);
            sprites.push(monster);
            break; 
          
          case STAR:
            var star = Object.create(spriteObject);
            star.sourceX = tilesheetX;
            star.sourceY = tilesheetY;
            star.sourceWidth = 48;
            star.sourceHeight = 48;
            star.width = 48;  
            star.height = 48;          
            star.x = column * SIZE + 8;
            star.y = row * SIZE + 8;
            stars.push(star);
            sprites.push(star);
            break;
            
          case ALIEN:
            alien = Object.create(spriteObject);
            alien.sourceX = tilesheetX;
            alien.sourceY = tilesheetY;            
            alien.x = column * SIZE;
            alien.y = row * SIZE;
            sprites.push(alien);
            break;
        }
      }
    }
  }
}

export default buildMap;
