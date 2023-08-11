import { initialStateType, actionType } from "../types/types";

const initialState: initialStateType = {
    laps: [],
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    isActive: false,
    isRunning: false
}

const reducer = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "SET_MILLISECONDS":
            return {
                ...state,
                milliseconds: action.payload
            }
        case "SET_SECONDS":
            return {
                ...state,
                seconds: action.payload
            }
        case "SET_MINUTES":
            return {
                ...state,
                minutes: action.payload
            }
        case "TOGGLE_ACTIVE":
            return {
                ...state,
                isActive: action.payload
            }
        case "TOGGLE_RUNNING":
            return {
                ...state,
                isRunning: action.payload
            }
        case "SET_LAPS":
            return {
                ...state,
                laps: action.payload
            }
        default:
            return state
    }
}


export default reducer;