import { useState } from 'react';
import { useToggleClassName } from '../../hooks/useToggleClassName';
import { useKeypress } from '../../hooks/useKeypress';
import { SOUNDS } from '../../sounds/sounds';
import classes from './Home.module.less';
import DrumPads from '../../components/DrumPads/DrumPads';


export default function Home() {
	const [volume, setVolume] = useState(50)
	const [kitName, toggleKitName] = useToggleClassName(['heater', 'smoothPiano'])
	const [power, togglePower] = useToggleClassName(['active', 'inactive'])


	return (
		<div className={classes.mainContainer}>

			<div className={classes.controllsContainer}>
				<div className={`${classes.power} ${classes[power]}`}>
					<div className={`${classes.togglePower}`}>
						<button onClick={togglePower}></button>
					</div>									
				</div>			
				
				<div className={`${classes.switchKit} ${classes[kitName]} ${power==='active' && classes.drumOn}`}>
					<span className={classes.titleKit}>HEATER KIT</span>	

					<button className={classes.switch} onClick={toggleKitName}>
							<span className={classes.switchTop}></span>
							<span className={classes.switchShadow}></span>
							<span className={classes.switchHandle}></span>
							<span className={classes.switchHandleTop}></span>
							<span className={classes.switchHandleBottom}></span>
							<span className={classes.switchHandleBase}></span>
					</button>	

					<span className={classes.titleKit}>SMOOTH PIANO KIT</span>
				</div>

				<div className={classes.volumeControl}>
					<p>{power==='active' ? volume : '.'}</p>
					<input type="range" min="0" max="100" onInput={(e) => setVolume(e.target.value)}/>
				</div>
			
			</div>


			<div className={classes.padsContainer}>
				{SOUNDS.map(e => {
					return (
						<DrumPads 
							key={e.key} 
							typePad={e}
							volume={volume}
							soundKit={kitName}
							drumOn={power==='active'}
						/>
					)
				})}					
			</div>
		</div>
	)
}