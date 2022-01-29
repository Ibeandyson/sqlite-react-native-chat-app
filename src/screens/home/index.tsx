import React, {FC} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {indexStyle} from './styles';
import AnswerButtons from './components/AnswerButtons';
import {Button} from '../../components';
import useGetAnswer from '../../hooks/useGetAnswer';
import useGetQuestions from '../../hooks/useGetQuestions';

const HomeScreen: FC = () => {
  const {answerData} = useGetAnswer();
  const {getQuestions, questions, options, loading, end} = useGetQuestions();
  return (
    <View style={indexStyle.container}>
      {loading ? (
        <ActivityIndicator
          style={{marginTop: '50%'}}
          size={50}
          color="#0000ff"
        />
      ) : (
        <View>
          <Text style={indexStyle.questionText}>{questions.question}</Text>
          {answerData.length > 1 ? (
            <Text
              style={
                questions.answer === answerData
                  ? indexStyle.answerTextCorrect
                  : indexStyle.answerTextInCorrect
              }>
              {questions.answer === answerData
                ? `You are correct, ${answerData} is the answer`
                : `You are incorrect, ${answerData} is not the answer. The correct answer is ${questions.answer}`}
            </Text>
          ) : null}

          <View>
            <AnswerButtons />
          </View>
          {options.length < 1 ? (
            <View style={{marginTop: '50%'}}>
              {end && (
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: '600',
                    textAlign: 'center',
                  }}>
                  No More Questions
                </Text>
              )}

              <Button
                block={true}
                text={end === true ? 'RESTART GAME' : 'START GAME'}
                onPress={() => getQuestions(1)}
              />
            </View>
          ) : (
            <View style={indexStyle.continueBtnContainer}>
              <Button
                block={true}
                disabled={questions.answer === answerData ? false : true}
                text="Next Question"
                onPress={() => getQuestions(1)}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
