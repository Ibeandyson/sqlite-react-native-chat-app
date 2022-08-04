import React, {FC, useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalColors from '../../../global/colors';
// import {getMessages, setMessage, setSingleChatMessage} from '../../../appState/actions';

const colors = globalColors.colors;

interface Iprops {
  data: any;
}

const ChatMessages: FC<Iprops> = ({data}) => {
  return (
    <View>
      <View
        style={
          data.item.receiver === true ? style.floatLeft : {}
        }>
        <View
          style={
            data.item.receiver === true 
              ? style.chatBackgroundOwner
              : style.chatBackgroundGuest
          }>
          <Text style={style.chatText}>{data.item.text} </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  chatText: {
    color: colors.black,
    fontSize: 17,
  },
  chatBackgroundGuest: {
    backgroundColor: colors.lightBlue[5],
    padding: 20,
    marginTop: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    width: '70%',
  },
  chatBackgroundOwner: {
    backgroundColor: colors.lightBlue[4],
    padding: 20,
    marginTop: 20,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    width: '70%',
  },
  floatLeft: {alignItems: 'flex-end'},
});

export default ChatMessages;
