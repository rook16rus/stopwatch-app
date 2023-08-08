import {useRef, useState} from "react";

import StopwatchDisplay from "../StopwatchDisplay/StopwatchDisplay";
import StopwatchList from "../StopwatchList/StopwatchList";
import StopwatchControls from "../StopwatchControls/StopwatchControls";

function App() {
    const [laps, setLaps] = useState([]);
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [passedTime, setPassedTime] = useState(0);

    let intervalRef = useRef<null | NodeJS.Timeout>(null);

    const onStop = (): void => {
        window.clearInterval(intervalRef.current as NodeJS.Timeout);
        setPassedTime(0);
        setIsActive(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setLaps([]);
    }

    const onNext = (): void => {
        if (passedTime === 0) return
    }

    const onTogglePlay = (): void => {
        if (passedTime === 0) {
            const currentTime = Date.now();
            setPassedTime(currentTime);

            intervalRef.current = setInterval(() => {
                const timeDifference = Date.now() - currentTime;
                const millisecondsDifference = Math.floor(timeDifference / 10 % 100);
                const secondsDifference = Math.floor(timeDifference / 1000 % 60);
                const minutesDifference = Math.floor(timeDifference / 1000 / 60) % 60;

                setMilliseconds(millisecondsDifference);
                setSeconds(secondsDifference);
                setMinutes(minutesDifference);
            }, 1)
        }

        if (isActive) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
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