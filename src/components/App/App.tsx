import {useRef, useState} from "react";

import {ILap} from "../../types/types";
import { convertDigit } from "../../functions/functions";

import StopwatchDisplay from "../StopwatchDisplay/StopwatchDisplay";
import StopwatchList from "../StopwatchList/StopwatchList";
import StopwatchControls from "../StopwatchControls/StopwatchControls";

function App() {
    const [laps, setLaps] = useState<Array<ILap>>([]);
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    let intervalRef = useRef<null | NodeJS.Timeout>(null);
    let totalMilliseconds = useRef<number>(0);

    const onTogglePlay = (): void => {
        if (!isRunning) {
            setIsRunning(true);

            intervalRef.current = setInterval(() => {
                totalMilliseconds.current += 1;
                const milliseconds = Math.floor(totalMilliseconds.current  % 100);
                const seconds = Math.floor(totalMilliseconds.current / 100  % 60);
                const minutes = Math.floor(totalMilliseconds.current / 100 / 60);

                setMilliseconds(milliseconds);
                setSeconds(seconds);
                setMinutes(minutes);
            }, 10)
        }

        if (isActive) {
            setIsActive(false);
            clearInterval(intervalRef.current as NodeJS.Timeout);
        } else {
            setIsActive(true);

            if (isRunning) {
                intervalRef.current = setInterval(() => {
                    totalMilliseconds.current += 1;
                    const milliseconds = Math.floor(totalMilliseconds.current  % 100);
                    const seconds = Math.floor(totalMilliseconds.current / 100  % 60);
                    const minutes = Math.floor(totalMilliseconds.current / 100 / 60) % 60;

                    setMilliseconds(milliseconds);
                    setSeconds(seconds);
                    setMinutes(minutes);
                }, 10)
            }
        }
    }

    const onStop = (): void => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setIsRunning(false);
        setIsActive(false);
        totalMilliseconds.current = 0;
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setLaps([]);
    }

    const onNext = (): void => {
        if (!isRunning || !isActive) return

        setLaps((laps) => {
            let overall = `${convertDigit(minutes)}:${convertDigit(seconds)}:${convertDigit(milliseconds)}`;
            let lapTime = overall;

            if (laps.length > 0) {
                const {overall: lastOverall} = laps[laps.length - 1];
                const [lastOverallMinutes, lastOverallSeconds, lastOverallMilliseconds] = lastOverall.split(':').map(Number);
                const totalLastOverallMilliseconds = (lastOverallMinutes * 60000) + (lastOverallSeconds * 1000) + lastOverallMilliseconds;
                const totalCurrentOverallMilliseconds = (minutes * 60000) + (seconds * 1000) + milliseconds;
                const totalDifference = totalCurrentOverallMilliseconds - totalLastOverallMilliseconds;
                const minutesDifference = convertDigit(Math.floor(totalDifference / 60000));
                const secondsDifference = convertDigit(Math.floor(totalDifference / 1000) % 60);
                const millisecondsDifference = convertDigit(totalDifference % 100);

                lapTime = `${minutesDifference}:${secondsDifference}:${millisecondsDifference}`;
            }

            return [
                ...laps,
                {
                    overall,
                    lapTime,
                    lap: laps.length + 1
                }
            ]
        })
    }

    return (
        <div className="stopwatch">
            <StopwatchDisplay
                milliseconds={milliseconds}
                seconds={seconds}
                minutes={minutes}
                isActive={isActive}
            />
            <StopwatchList laps={laps} />
            <StopwatchControls
                onStop={onStop}
                onNext={onNext}
                onTogglePlay={onTogglePlay}
                isActive={isActive}
            />
        </div>
    );
}

export default App;