export type ILap = {
    overall: string,
    lapTime: string,
    lap: number
}

export type initialStateType = {
    laps: Array<ILap>,
    milliseconds: number,
    seconds: number,
    minutes: number,
    isActive: boolean,
    isRunning: boolean
}

export type convertedMillisecondsType = {
    milliseconds: number,
    seconds: number,
    minutes: number
}

export type actionType = {
    type: string,
    payload: any
}

type setMillisecondsAction = {
    type: "SET_MILLISECONDS",
    payload: number
}

type setSecondsAction = {
    type: "SET_SECONDS",
    payload: number
}

type setMinutesAction = {
    type: "SET_MINUTES",
    payload: number
}

type toggleActiveTimerAction = {
    type: "TOGGLE_ACTIVE",
    payload: boolean
}

type toggleRunningTimerAction = {
    type: "TOGGLE_RUNNING",
    payload: boolean
}

export type setLapsAction = {
    type: "SET_LAPS",
    payload: Array<ILap>
}

export type TimerActionTypes = setMillisecondsAction | setSecondsAction | setMinutesAction | toggleActiveTimerAction | toggleRunningTimerAction