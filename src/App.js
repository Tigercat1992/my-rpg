import React, { Component } from 'react';
//import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Viewport from './components/viewport';
import World from './features/world';
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
        <World />
      </Viewport>
    </div>
  );
}

export default App;
