import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import {
    setLaps,
    setMilliseconds,
    setMinutes,
    setSeconds,
    toggleActiveTimer,
    toggleRunningTimer
} from "../../actions/actions";

import { convertDigit } from "../../functions/functions";
import { ILap, initialStateType, convertedMillisecondsType } from "../../types/types";

import styles from './StopwatchControls.module.scss'

import pause from './pause.png'
import playPause from './play-pause.png'
import stop from './stop.png'
import play from './play.png'

const StopwatchControls = () => {
    const laps: Array<ILap> = useSelector((state: initialStateType) => state.laps);
    const isActive = useSelector((state: initialStateType) => state.isActive);
    const isRunning = useSelector((state: initialStateType) => state.isRunning);
    const milliseconds = useSelector((state: initialStateType) => state.milliseconds);
    const seconds = useSelector((state: initialStateType) => state.seconds);
    const minutes = useSelector((state: initialStateType) => state.minutes);

    const dispatch = useDispatch();

    let intervalRef = useRef<null | NodeJS.Timeout>(null);
    let totalMilliseconds = useRef<number>(0);

    const convertMillisecondsToTimer = (totalMilliseconds: number): convertedMillisecondsType => {
        const milliseconds = Math.floor(totalMilliseconds  % 100);
        const seconds = Math.floor(totalMilliseconds / 100  % 60);
        const minutes = Math.floor(totalMilliseconds / 100 / 60);

        return {
            milliseconds,
            seconds,
            minutes
        }
    }

    const runTimer = (): void => {
        totalMilliseconds.current += 1;
        const { milliseconds, seconds, minutes } = convertMillisecondsToTimer(totalMilliseconds.current);

        dispatch(setMilliseconds(milliseconds));
        dispatch(setSeconds(seconds));
        dispatch(setMinutes(minutes));
    }

    const onTogglePlay = (): void => {
        if (!isRunning) {
            dispatch(toggleRunningTimer(true))
            intervalRef.current = setInterval(runTimer, 10)
        }

        if (isActive) {
            dispatch(toggleActiveTimer(false));
            clearInterval(intervalRef.current as NodeJS.Timeout);
        } else {
            dispatch(toggleActiveTimer(true))

            if (isRunning) {
                intervalRef.current = setInterval(runTimer, 10)
            }
        }
    }

    const onStop = (): void => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        dispatch(toggleRunningTimer(false))
        dispatch(toggleActiveTimer(false))
        totalMilliseconds.current = 0;
        dispatch(setMilliseconds(0));
        dispatch(setSeconds(0));
        dispatch(setMinutes(0));
        dispatch(setLaps([]))
    }

    const onNext = (): void => {
        if (!isRunning || !isActive) return

        let overall: string = `${convertDigit(minutes)}:${convertDigit(seconds)}:${convertDigit(milliseconds)}`;
        let lapTime: string = overall;

        if (laps.length > 0) {
            const {overall: lastOverall} = laps[laps.length - 1];
            const [lastOverallMinutes, lastOverallSeconds, lastOverallMilliseconds] = lastOverall.split(':').map(Number);

            const totalLastOverallMilliseconds: number = (lastOverallMinutes * 60000) + (lastOverallSeconds * 1000) + lastOverallMilliseconds;
            const totalCurrentOverallMilliseconds: number = (minutes * 60000) + (seconds * 1000) + milliseconds;
            const totalDifference: number = totalCurrentOverallMilliseconds - totalLastOverallMilliseconds;

            const minutesDifference: number = Math.floor(totalDifference / 60000);
            const secondsDifference: number = Math.floor(totalDifference / 1000) % 60;
            const millisecondsDifference: number = totalDifference % 100;

            lapTime = `${convertDigit(minutesDifference)}:${convertDigit(secondsDifference)}:${convertDigit(millisecondsDifference)}`;
        }

        const newArray: Array<ILap> = [
            ...laps,
            {
                overall,
                lapTime,
                lap: laps.length + 1
            }
        ]

        dispatch(setLaps(newArray))
    }

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