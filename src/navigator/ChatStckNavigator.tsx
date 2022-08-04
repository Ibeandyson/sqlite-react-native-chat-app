import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import ChatScreen from '../screens/chat';
import MeessageListScreen from '../screens/messages';

type ChatStackProps = {
  chat: undefined;
  messageList: undefined;
};

export type ChatProps = NativeStackScreenProps<ChatStackProps, 'chat'>;
export type MessageListProps = NativeStackScreenProps<ChatStackProps, 'messageList'>;

const AuthStack = createNativeStackNavigator<ChatStackProps>();

const ChatStckNavigator: FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="messageList"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="messageList" component={MeessageListScreen} />
      <AuthStack.Screen name="chat" component={ChatScreen} />
    </AuthStack.Navigator>
  );
};

export default ChatStckNavigator;
