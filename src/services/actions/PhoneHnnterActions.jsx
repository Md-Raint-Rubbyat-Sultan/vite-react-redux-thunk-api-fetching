import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_REST, GET_HUNT_FAILED, GET_HUNT_REQUEST, GET_HUNT_SUCCESS } from "../constants/PhoneHunterConstants"

// Phone hunter data fetching
const getAllPhones = (url) => async (dispatch) => {
    dispatch({ type: GET_HUNT_REQUEST });
    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({ type: GET_HUNT_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: GET_HUNT_FAILED, payload: error.message });
    }
}

// counter actions
const incrementCounter = () => {
    return {
        type: COUNTER_INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: COUNTER_DECREMENT,
    }
}

const resetCounter = () => {
    return {
        type: COUNTER_REST,
    }
}

export {
    getAllPhones,
    incrementCounter,
    decrementCounter,
    resetCounter,
}