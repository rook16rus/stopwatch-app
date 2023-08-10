import { useSelector } from "react-redux";
import classNames from "classnames";

import { initialStateType } from "../../types/types";
import { convertDigit } from "../../functions/functions";

import styles from "./StopwatchDisplay.module.scss"

const StopwatchDisplay = () => {
    const milliseconds = useSelector((state: initialStateType) => state.milliseconds);
    const seconds = useSelector((state: initialStateType) => state.seconds);
    const minutes = useSelector((state: initialStateType) => state.minutes);
    const isActive = useSelector((state: initialStateType) => state.isActive);

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