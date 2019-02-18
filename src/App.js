import React, { Component } from 'react';
//import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Viewport from './components/viewport';
import GameWorld from './features/gameWorld';
import useWindowSize from './modules/useWindowSize';
import resizeScreen from './modules/resizeScreen';


const App = (props) => {
	//const { gameMode } = props.world;
  const { resizeWidth, resizeHeight } = resizeScreen(useWindowSize());

	// disable scrolling of the page
  // prevents iOS Safari bouncing during movement
  // useEffect(() => {
  //   disableBodyScroll(document.getElementById('root'));
  //   return clearAllBodyScrollLocks;
  // }, []);

  return (
    <div>
      <Viewport width={resizeWidth} height={resizeHeight}>
        <GameWorld />
      </Viewport>
    </div>
  );
}

export default App;
