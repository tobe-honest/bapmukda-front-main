import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1, //화면을 차지 하는 비율, 1/1 다른게 3이면 1/4 : 3/4
    paddingTop: 50,
    alignItems: 'center', //수평정렬
  },
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 50,
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  ButtonDesign: {
    marginTop: 50,
    backgroundColor: '#EBEBEC',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
  },
});

export default function HaveId(props) {
  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight: 'bold', paddingTop: 24}}>
        이미 회원이시네요!
      </Text>
      <Text style={{fontWeight: 'bold'}}>비밀번호 입력</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요"
        type="password"
        secureTextEntry={true}></TextInput>
      <View style={styles.ButtonDesign}>
        <Button
          title="완료"
          color="#D6D7D9"
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
}
