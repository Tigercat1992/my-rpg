import { SCREEN_DIMENSION_HELPER } from '../config/constants';

const resizeScreen = ({width, height}) => {
    let resizeWidth = width;
    let resizeHeight = Math.round(width / SCREEN_DIMENSION_HELPER);

    if(resizeHeight > height) {
      resizeWidth = Math.round(height * SCREEN_DIMENSION_HELPER);
      resizeHeight = height;
    }

    return {
      resizeWidth,
      resizeHeight
    };
}

export default resizeScreen;
