
import playGame from './methods/playGame';
import update from './methods/update';
import listenEvent from './methods/listenEvent';

const actionHandler = () => {

	const context = this.refs.canvas.getContext('2d');
  //this.setState({ context: context });
  //this.startGame();

	window.addEventListener('keydown', listenEvent(true));
	window.addEventListener('keyup', listenEvent(false));

	update();
}

export default actionHandler;
