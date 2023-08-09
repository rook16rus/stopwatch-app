import { ILap } from "../../types/types";

import styles from './StopwatchList.module.scss'

type StopWatchListProps = {
    laps: Array<ILap>
}

const StopwatchList = ({laps}: StopWatchListProps) => {
    const lapElements = laps.map(({overall, lapTime, lap}: ILap): React.ReactNode => {
        return (
            <li className={`${styles.list__item} ${styles.active}`}
                key={lap}
                style={{order: -lap}}
            >
                <span>{overall}</span>
                <span>{lapTime}</span>
                <span>{lap}</span>
            </li>
        )
    })

    return (
        <div className={styles.list}>
            <div className={styles.list__header}>
                <span>Overall</span>
                <span>Lap time</span>
                <span>Lap</span>
            </div>
            <ul className={styles.list__laps}>
                {lapElements}
            </ul>
        </div>
    )
}

export default StopwatchList