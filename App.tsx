import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import globalColors from './src/global/colors';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigator';
import {store} from './src/appState/Store';
import useDBFunction from './src/hooks/useDBFunction';

const colors = globalColors.colors;

const App = () => {
const {initChat, initUser} = useDBFunction()
useEffect(() => {
  initUser()
  initChat()
},[])


  
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGrey[2]}}>
          <StatusBar
            backgroundColor={colors.lightBlue[1]}
            barStyle="light-content"
          />
          <AppNavigator />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
