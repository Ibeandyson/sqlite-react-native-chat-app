import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {IconButton} from 'react-native-paper';
import globalColors from '../../../global/colors';

interface Iprops {
  fun: (data: any) => void;
  onSend: () => void;
  value: any;
}

const colors = globalColors.colors;

const ChatInput: FC<Iprops> = ({fun, onSend, value}) => {
  return (
    <View style={style.container}>
      <View style={style.input}>
        <TextInput
          style={style.inputStyle}
          placeholder="Message"
          placeholderTextColor={colors.black}
          multiline={true}
          onChangeText={e => fun(e)}
          value={value.text}
        />
      </View>
      <View>
        <IconButton
          icon="send"
          size={30}
          color={colors.lightBlue[1]}
          onPress={() => onSend()}
        />
      </View>
      <View>
        <IconButton
          icon="microphone"
          size={30}
          color={colors.lightBlue[1]}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.dimeWhite,
    borderRadius: 20,
  },
  input: {
    width: '75%',
  },
  inputStyle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export default ChatInput;
