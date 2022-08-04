import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import globalColors from '../../global/colors';

interface ChatAppBarIProps {
  back: any;
}
const colors = globalColors.colors;

const onGoBack = () => {

}

const ChatAppBar: FC<ChatAppBarIProps> = props => {
  return (
    <Appbar.Header style={{height: 70, backgroundColor: colors.lightBlue[1]}}>
      <Appbar.BackAction onPress={() => props.back.navigate('messageList')} />
      <Appbar.Content
        title={
          <View style={style.contianerFlex}>
            <Avatar.Image
              size={50}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47AUj4r4XK9Jqm0c4gVxEHKafSb-vxEz9pb2j7fQJlJgnIawAf19QWViNtb_4F_eosKM&usqp=CAU',
              }}
            />
          </View>
        }
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  contianerFlex: {
    flexDirection: 'row',
  }
});

export default ChatAppBar;
