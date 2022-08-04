import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import globalColors from '../../global/colors';

type Props = {};
const colors = globalColors.colors;

const MessageListAappBar: FC = (props: Props) => {
  return (
    <Appbar.Header style={{height: 70, backgroundColor: colors.lightBlue[1]}}>
      <Appbar.Content title={<Text style={style.text}>Messages</Text>} />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.white,
    paddingTop: 15,
    paddingLeft: 50,
  },
});

export default MessageListAappBar;
