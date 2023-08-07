import styles from "./StopwatchDisplay.module.scss"

const StopwatchDisplay = () => {
    return (
        <div className="container">
            <div className={styles.display}>
                <h1 className={styles.display__title}>Stopwatch</h1>
                <div className={styles.display__timer}>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>07</span>
                        <span className={styles["display__timer-desc"]}>min</span>
                    </div>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>07</span>
                        <span className={styles["display__timer-desc"]}>sec</span>
                    </div>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>07</span>
                        <span className={styles["display__timer-desc"]}>msec</span>
                    </div>
                </div>
                <span className={styles.display__status}>Active now</span>
            </div>
        </div>
    )
}

export default StopwatchDisplay