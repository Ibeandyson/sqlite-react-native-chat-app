import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen} from './src/screens';
import globalColors from './src/global/colors';
import {Provider as AnswerdProvider} from './src/context/slectedAnswerStore';
import {Provider as QuestionProvider} from './src/context/questionsStore';

const App = () => {
  const colors = globalColors.colors;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.lightBlue[1]}
        barStyle="light-content"
      />
      <QuestionProvider>
        <AnswerdProvider>
          <HomeScreen />
        </AnswerdProvider>
      </QuestionProvider>
    </SafeAreaView>
  );
};

export default App;
