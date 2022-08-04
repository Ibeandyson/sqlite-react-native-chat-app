import { MESSAGE_REQUESTED_FAILED, LOADING, MESSAGE_REQUESTED_SUCCESSFUL, SET_SINGLE_CHAT_MESSAGES } from "../actionTypes"
const initial_state = {
    messages: [],
    singleChatMessage: [],
    loading: true,
    error: ""
}

const messageReducer = (state = initial_state, action: any) => {
    switch (action.type) {
        case MESSAGE_REQUESTED_SUCCESSFUL:
            state = {
                ...state,
                messages: action.payload
            }
        case MESSAGE_REQUESTED_FAILED:
            state = {
                ...state,
                error: action.payload
            }
        case SET_SINGLE_CHAT_MESSAGES:
            state = {
                ...state,
                singleChatMessage: action.payload
            }
        case LOADING:
            state = {
                ...state,
                loading: action.payload
            }
        default:
            state = { ...state }
    }
    return state
}

export default messageReducer 