import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../../components';
import useGetAnswer from '../../../hooks/useGetAnswer';
import useGetQuestions from '../../../hooks/useGetQuestions';

const AnswerButton: FC = () => {
  const { getAnswer} = useGetAnswer();
  const {options} = useGetQuestions()
  return (
    <View>
      <View style={styles.container}>
        {options.map((data: any, index: any) => (
          <View key={index} style={styles.btn}>
            <Button type='secondary' key={index} text={data} onPress={() => getAnswer(data)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20%',
  },
  btn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '2%',
    marginRight: '2%',
  },
});

export default AnswerButton;
