import styles from './StopwatchControls.module.scss'

import pause from './pause.png'
import playPause from './play-pause.png'
import stop from './stop.png'
import play from './play.png'

type StopwatchControlsProps = {
    onStop: () => void,
    onNext: () => void,
    onTogglePlay: () => void,
    isActive: boolean
}

const StopwatchControls = ({onStop, onNext, onTogglePlay, isActive}: StopwatchControlsProps) => {
    return (
        <div className={styles.controls}>
            <button
                onClick={onStop}
                className={`${styles.controls__button} ${styles.controls__stop}`}
            >
                <img src={stop} alt="Иконка стоп"/>
            </button>
            <button
                onClick={onTogglePlay}
                className={`${styles.controls__button} ${styles.controls__pause}`}
            >
                <img src={isActive ? pause : play} alt="Иконка стоп"/>
            </button>
            <button
                onClick={onNext}
                className={`${styles.controls__button} ${styles.controls__next}`}
            >
                <img src={playPause} alt="Иконка стоп"/>
            </button>
        </div>
    )
}

export default StopwatchControls