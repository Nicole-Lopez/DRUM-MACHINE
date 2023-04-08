import { useKeypress } from '../../hooks/useKeypress';
import { useToggleClassName } from '../../hooks/useToggleClassName';
import classes from './DrumPads.module.less';

export default function DrumPads({typePad, soundKit, volume, drumOn}) {
	const [padIsActive, togglePadIsActive] = useToggleClassName(['active', 'inactive'], 1)

	const playAudio = () => {
		if (drumOn) {
			togglePadIsActive()

			let audio = new Audio(typePad.sound[soundKit])		
			audio.volume = volume / 100
		    audio.play()

		    setTimeout(togglePadIsActive, 450);
		}
	}

	useKeypress(typePad.keyCode, playAudio);

	return (
		<button className={`${classes.pads} ${classes[padIsActive]}`} onClick={playAudio}>{typePad.key}</button>			
	)
}