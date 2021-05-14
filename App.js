/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import Header from './src/component/header/Header';
import Generator from './src/component/Generator/Generator';
import Numlist from './src/component/Generator/Numlist';
import Input from './src/component/input/Input';
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    paddingTop: 50,
    alignItems: 'center', //수평정렬
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ButtonDesign: {
    backgroundColor: '#EBEBEC',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
  },
});

export default function App() {
  const [appName, setAppName] = useState('로그인/회원가입');

  return (
    <View style={styles.mainView}>
      <Header name={appName} />
      <Text style={{paddingTop: 24}}>밥먹다와 함께 할</Text>
      <Text>메일주소를 적어주세요</Text>
      <Input />
      <View style={styles.ButtonDesign}>
        <Button title="다음" />
      </View>
    </View>
  );
}

{
  /* <Text style={styles.mainText} onPress={() => alert('text touch event')}>
        Hello World
      </Text>
      <Generator add={onAddRandomNumber} />
      <ScrollView style={{width: '100%'}}>
        <Numlist num={random} />
      </ScrollView> */
}

//const [random, setrandom] = useState([36, 99]);
// const onAddRandomNumber = () => {
//   const randomNum = Math.floor(Math.random() * 100) + 1;
//   setrandom([...random, randomNum]);
// };
