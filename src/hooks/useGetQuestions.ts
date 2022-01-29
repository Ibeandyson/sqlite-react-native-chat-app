import { actions, useDispatch, useStore } from "../context/questionsStore"
import firestore from '@react-native-firebase/firestore';
import useGetAnswer from "./useGetAnswer";


const useGetQuestions = () => {
	const store = useStore();
	const dispatch = useDispatch();
	const { getAnswer } = useGetAnswer()

	const getQuestions = async (val: any) => {
		if (store.end === true) {
			dispatch({ type: actions.SET_END, payload: false })
		}
		dispatch({ type: actions.SET_LOADING, payload: true })
		await dispatch({ type: actions.SET_COUNT, payload: store.count + val })
		let fireDoc = await store.count.toString()
		const questionData = await firestore().collection('question1').doc(fireDoc)
		questionData.get().then((doc) => {
			if (doc.exists) {
				dispatch({ type: actions.GET_QUESTIONS, payload: doc.data() })
				let options = doc.data()
				dispatch({ type: actions.GET_OPTIONS, payload: options?.options })
				dispatch({ type: actions.SET_LOADING, payload: false })
				getAnswer('')
			} else {
				console.debug("data  is empty")
				dispatch({ type: actions.SET_LOADING, payload: false })
				dispatch({ type: actions.SET_END, payload: true })
				getAnswer('')
				dispatch({ type: actions.GET_OPTIONS, payload: [] })
				dispatch({ type: actions.GET_QUESTIONS, payload: {} })
				dispatch({ type: actions.SET_COUNT, payload: 1 })
			}
		})
	}

	return {
		getQuestions,
		questions: store.questions,
		options: store.options,
		loading: store.loading,
		end: store.end,
	}
}
export default useGetQuestions