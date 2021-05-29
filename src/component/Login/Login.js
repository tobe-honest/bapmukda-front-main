import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import Header from '../header/Header';
import Input from '../input/Input';
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

export default function Longin(props) {
  const [LonginName, setLonginName] = useState('로그인/회원가입');

  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight: 'bold', paddingTop: 24, fontSize: 18}}>
        밥먹다와 함께 할
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>
        메일주소를 적어주세요
      </Text>
      <Input />
      <View style={styles.ButtonDesign}>
        <Button
          title="다음"
          color="#D6D7D9"
          onPress={() => {
            props.navigation.navigate('HaveId');
          }}
        />
      </View>
    </View>
  );
}
