import classNames from "classnames";

import styles from "./StopwatchDisplay.module.scss"

type StopwatchDisplayProps = {
    milliseconds: number,
    seconds: number,
    minutes: number,
    isActive: boolean
}

const StopwatchDisplay = ({milliseconds, seconds, minutes, isActive}: StopwatchDisplayProps) => {
    const convertDigit = (digit: number): string | number => {
        return digit > 9 ? digit : '0' + digit
    }

    return (
        <div className="container">
            <div className={styles.display}>
                <h1 className={styles.display__title}>Stopwatch</h1>
                <div className={styles.display__timer}>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>{convertDigit(minutes)}</span>
                        <span className={styles["display__timer-desc"]}>min</span>
                    </div>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>{convertDigit(seconds)}</span>
                        <span className={styles["display__timer-desc"]}>sec</span>
                    </div>
                    <div className={styles["display__timer-block"]}>
                        <span className={styles["display__timer-number"]}>{convertDigit(milliseconds)}</span>
                        <span className={styles["display__timer-desc"]}>msec</span>
                    </div>
                </div>
                <span className={classNames(styles.display__status, {[styles.active]: isActive})}>
                    Active now
                </span>
            </div>
        </div>
    )
}

export default StopwatchDisplay