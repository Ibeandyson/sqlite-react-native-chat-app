import React, {FC, useEffect, useRef, useLayoutEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import MessageListAappBar from '../../components/MessageListAappBar';
import globalColors from '../../global/colors';
import {MessageListProps} from '../../navigator/ChatStckNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {setMessage} from '../../appState/actions';
import useDBFunction from '../../hooks/useDBFunction';
import {useIsFocused} from '@react-navigation/native';

const colors = globalColors.colors;

const MeessageListScreen: FC<MessageListProps> = ({navigation}) => {
  let dispatch = useDispatch();
  const isFocused = useIsFocused();
  const messages: any = useSelector((state: any) => state.messages);
  const {getChats} = useDBFunction();

  const loadMessages = async () => {
    getChats()
      .then(data => {
        dispatch(setMessage(data));
      })
      .catch(er => console.log(er));
  };


  useEffect(() => {
    if(isFocused){
      loadMessages();
    }
  }, [isFocused]);

  useEffect(() => {
    if(messages.length < 1){
      loadMessages();
      console.log('========')
    }
  });

  const list = ({item}: any) => (
    <List.Item
      onPress={() => navigation.navigate('chat', item)}
      title={
        <Text style={style.text}>
          {item?.senderFirstName} {item?.senderLastName}
        </Text>
      }
      description={<Text style={style.text2}></Text>}
      left={() => (
        <Avatar.Image
          size={50}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47AUj4r4XK9Jqm0c4gVxEHKafSb-vxEz9pb2j7fQJlJgnIawAf19QWViNtb_4F_eosKM&usqp=CAU',
          }}
        />
      )}
    />
  );

  return (
    <View>
      <MessageListAappBar />
      <FlatList
        data={messages}
        renderItem={list}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    paddingTop: 15,
    paddingLeft: 50,
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
    paddingTop: 15,
    paddingLeft: 50,
    width: '10%',
  },
});

export default MeessageListScreen;
