import styles from './StopwatchControls.module.scss'

import pause from './pause.png'
import playPause from './play-pause.png'
import stop from './stop.png'

const StopwatchControls = () => {
    return (
        <div className={styles.controls}>
            <button className={styles.controls__stop}>
                <img src={stop} alt="Иконка стоп"/>
            </button>
            <button className={styles.controls__pause}>
                <img src={pause} alt="Иконка стоп"/>
            </button>
            <button className={styles.controls__next}>
                <img src={playPause} alt="Иконка стоп"/>
            </button>
        </div>
    )
}

export default StopwatchControls