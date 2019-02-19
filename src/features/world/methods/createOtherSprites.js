import { spriteObject } from './constants.js';

const createOtherSprites = () => {

  levelCompleteDisplay = Object.create(spriteObject);
  levelCompleteDisplay.sourceX = 0;
  levelCompleteDisplay.sourceY = 384;
  levelCompleteDisplay.sourceWidth = 256;
  levelCompleteDisplay.sourceHeight = 128;
  levelCompleteDisplay.width = 256;  
  levelCompleteDisplay.height = 128;            
  levelCompleteDisplay.x = canvas.width / 2 - levelCompleteDisplay.width / 2;
  levelCompleteDisplay.y = canvas.height / 2 - levelCompleteDisplay.height / 2;
  levelCompleteDisplay.visible = false;
  levelCompleteDisplay.scrollable = false;
  sprites.push(levelCompleteDisplay);
  
  youLostDisplay = Object.create(spriteObject);
  youLostDisplay.sourceX = 0;
  youLostDisplay.sourceY = 128;
  youLostDisplay.sourceWidth = 256;
  youLostDisplay.sourceHeight = 128;
  youLostDisplay.width = 256;  
  youLostDisplay.height = 128;            
  youLostDisplay.x = canvas.width / 2 - youLostDisplay.width / 2;
  youLostDisplay.y = canvas.height / 2 - youLostDisplay.height / 2;
  youLostDisplay.visible = false;
  youLostDisplay.scrollable = false;
  sprites.push(youLostDisplay);
  
  youWonDisplay = Object.create(spriteObject);
  youWonDisplay.sourceX = 0;
  youWonDisplay.sourceY = 256;
  youWonDisplay.sourceWidth = 256;
  youWonDisplay.sourceHeight = 128;
  youWonDisplay.width = 256;  
  youWonDisplay.height = 128;            
  youWonDisplay.x = canvas.width / 2 - youWonDisplay.width / 2;
  youWonDisplay.y = canvas.height / 2 - youWonDisplay.height / 2;
  youWonDisplay.visible = false;
  youWonDisplay.scrollable = false;
  sprites.push(youWonDisplay);
}

export default createOtherSprites;