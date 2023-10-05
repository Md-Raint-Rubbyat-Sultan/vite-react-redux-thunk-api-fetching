import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_REST, GET_HUNT_FAILED, GET_HUNT_REQUEST, GET_HUNT_SUCCESS } from "../constants/PhoneHunterConstants";

// phone hunter reducer

// states
const initialPhoneData = {
    isLoading: false,
    phoneData: [],
    error: null,
}

// reducer
const phoneHunterReducer = (state = initialPhoneData, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_HUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_HUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phoneData: payload,
            };
        case GET_HUNT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
}

// counter reducers

// states
const initialCounter = { counter: 0 }

// reducers
const counterReducer = (state = initialCounter, action) => {
    const { type } = action;
    switch (type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case COUNTER_REST:
            return {
                ...state,
                counter: 0,
            }
        default:
            return state;
    }
}

export {
    phoneHunterReducer,
    counterReducer
}