import React from 'react';

import {
  VIEWPORT_MIN_SIZE,
  SCREEN_DIMENSION_HELPER
} from '../../config/constants';

import './viewport.css';

const Viewport = (props) => {

  let { width, height } = props;
  if(VIEWPORT_MIN_SIZE > width) {
    width = VIEWPORT_MIN_SIZE;
    height = Math.round(VIEWPORT_MIN_SIZE / SCREEN_DIMENSION_HELPER)
  }

  const styles = { width, height };

  return(
    <div className='viewport-container white-border' style={styles}>
      { props.children }
    </div>
  );
}

export default Viewport;