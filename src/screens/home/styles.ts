import {StyleSheet, ViewStyle} from 'react-native';
import globalColors from '../../global/colors';

interface indexStyle {
  container: ViewStyle;
  continueBtnContainer: ViewStyle;
  questionText: ViewStyle;
  answerTextInCorrect: ViewStyle;
  answerContainer: ViewStyle;
  answerTextCorrect: ViewStyle;
}
const colors = globalColors.colors

export const indexStyle = StyleSheet.create<indexStyle>({
  container: {
    marginLeft: "5%",
    marginRight: "5%"
  },
  continueBtnContainer: {
      marginTop: "20%"
  },
  questionText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "20%"
  },
   answerTextInCorrect: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "20%",
    color: colors.red,
   },
   answerTextCorrect: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "20%",
    color: colors.green,
   },
   answerContainer: {
    height: "10%",
    backgroundColor: colors.lightGrey[2],
   }
});