import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import globalColors from '../../global/colors';

interface ButtonStyle {
  button: ViewStyle;
  buttonText: TextStyle;
}
const colors = globalColors.colors
const styles = (
  block?: boolean,
  disabled?: boolean,
  type?: string,
  height?: number | null,
) => {
  return StyleSheet.create<ButtonStyle>({
    button: {
      borderRadius: 30,
      paddingVertical: 3,
      paddingHorizontal: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      height: height ? height : 55,
      marginVertical: 12,
      backgroundColor:
        disabled && type !== 'text'
          ? colors.lightGrey[2]
          : type === 'secondary'
          ? colors.lightBlue[2]
          : type === 'text'
          ? 'transparent'
          : colors.darkBlue[1],
      alignSelf: block ? 'stretch' : 'flex-start',
    },
    buttonText: {
      fontSize: 20,
      margin: 12,
      textTransform: 'uppercase',
      color:
        disabled && type === 'text'
          ? colors.grey
          : type === 'text'
          ? colors.blue
          : colors.white,
    },
  });
};

export default styles;