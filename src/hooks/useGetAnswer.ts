import { actions, useDispatch, useStore } from "../context/slectedAnswerStore"

const useGetAnswer = () => {
    const store = useStore();
    const dispatch = useDispatch();

    const getAnswer = (val: string) => {
        dispatch({ type: actions.GET_ANSWER  , payload: val })
    }
    return {
        getAnswer,
        answerData: store.answer
    }
}
export default useGetAnswer