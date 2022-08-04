import { MESSAGE_REQUESTED_SUCCESSFUL,SET_SINGLE_CHAT_MESSAGES} from "./actionTypes";

export const setMessage = (data: any) => {
    return {
        type: MESSAGE_REQUESTED_SUCCESSFUL,
        payload: data
    };
};

export const setSingleChatMessage = (data: any) => {
    return {
        type: SET_SINGLE_CHAT_MESSAGES,
        payload: data
    };
};
