import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, BackHandler} from 'react-native';
import {ChatMessages, ChatInput} from './components';
import ChatAppBar from '../../components/chatAppBar';
import {ChatProps} from '../../navigator/ChatStckNavigator';
import {setSingleChatMessage, setMessage} from '../../appState/actions';
import {useDispatch, useSelector} from 'react-redux';
import useDBFunction from '../../hooks/useDBFunction';

const ChatScreen: FC<ChatProps> = ({navigation, route}) => {
  const {saveChatMessaagesToDB, getChats} = useDBFunction();
  const [chatData, setChatData] = useState({});
  const dispatch = useDispatch();
  const routedata: any = route?.params;
  const singleChatMessage: any = useSelector(
    (state: any) => state.singleChatMessage,
  );
  useEffect(() => {
    dispatch(setSingleChatMessage(JSON.parse(routedata.message)));
  }, []);

  const onChangeText = (textData: any) => {
    let id: any = singleChatMessage.slice(-1).pop().id + 1;
    let chatData = {
      id: id,
      text: textData,
      receiver: true,
    };
    setChatData(chatData);
  };

  const onMessageSend = async () => {
    let data = singleChatMessage.concat(chatData);
    dispatch(setSingleChatMessage(data));
    setChatData({});
    saveChatMessaagesToDB(data, routedata.id);
  };
  const onGoBack = (): any => {
    getChats().then(data => {
      dispatch(setMessage(data));
    });
  };

  

  return (
    <View style={{flex: 1}}>
      <ChatAppBar back={navigation} />
      <View style={indexStyle.container}>
        <View>
          <FlatList
            data={singleChatMessage}
            renderItem={item => <ChatMessages data={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{bottom: 8, position: 'absolute', left: 0, right: 0}}>
          <ChatInput
            value={chatData}
            onSend={onMessageSend}
            fun={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

export const indexStyle = StyleSheet.create({
  container: {
    marginLeft: '3%',
    marginRight: '3%',
    position: 'relative',
    flex: 1,
  },
});

export default ChatScreen;
