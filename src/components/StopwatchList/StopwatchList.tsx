import styles from './StopwatchList.module.scss'

const StopwatchList = () => {
    return (
        <div className={styles.list}>
            <div className={styles.list__header}>
                <span>Overall</span>
                <span>Lap time</span>
                <span>Lap</span>
            </div>
            <ul className={styles.list__laps}>
                <li className={`${styles.list__item} ${styles.active}`}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={`${styles.list__item} ${styles.active}`}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={`${styles.list__item} ${styles.active}`}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={`${styles.list__item} ${styles.active}`}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={`${styles.list__item} ${styles.active}`}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
                <li className={styles.list__item}>
                    <span>07:17:21</span>
                    <span>03:11:21</span>
                    <span>1</span>
                </li>
            </ul>
        </div>
    )
}

export default StopwatchList