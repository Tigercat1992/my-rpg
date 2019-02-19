

const listenEvent = () => {
  let moveUp = false;
  let moveDown = false;
  let moveLeft = false;
  let moveRight = false;

  switch(event.keyCode) {
    case UP:
      moveUp = false;
      break;

    case DOWN:
      moveDown = false;
      break;
      
    case LEFT:
      moveLeft = false;
      break;  
      
    case RIGHT:
      moveRight = false;
      break; 
  }
}

export default resizeScreen;
