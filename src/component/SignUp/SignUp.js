import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function SignUp(props) {
  const [myTextInput, setmyTextInput] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passWordInput, setPassWordInput] = useState(true);
  const [passwordConfirmInput, setPasswordConfirmInput] = useState(true);
  const handlepwFocus = () => setPassWordInput(true);
  const handlepwBlur = () => setPassWordInput(false);
  const handlepwcFocus = () => setPasswordConfirmInput(true);
  const handlepwcBlur = () => setPasswordConfirmInput(false);
  const onChangeInput = event => {
    setmyTextInput(event);
  };
  const onConfirmInput = event => {
    setPasswordConfirm(event);
  };
  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight: 'bold', paddingTop: 24}}>밥먹다와 함께 할</Text>
      <Text style={{fontWeight: 'bold'}}>메일주소를 적어주세요</Text>
      <Text style={{paddingTop: 10, color: '#999BA0'}}>
        영문,숫자를 포함하여 10자 이상 입력해주세요
      </Text>
      <View
        style={{
          paddingTop: 50,
          paddingBottom: 48,
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          value={myTextInput}
          placeholder="비밀번호 입력"
          style={styles.input}
          onChangeText={onChangeInput}
          multiline={true}
          maxLength={10}
          autoCapitalize={'none'}
          editable={true}
          textAlign={'center'}
          secureTextEntry={true}
          type="password"
          onFocus={handlepwFocus}
          onBlur={handlepwBlur}
          style={[
            styles.input,
            {
              borderColor: passWordInput ? '#333842' : '#D6D7D9',
            },
          ]}
        />
      </View>
      <View
        style={{
          paddingBottom: 48,
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          value={passwordConfirm}
          placeholder="비밀번호 재입력"
          style={styles.input}
          onChangeText={onConfirmInput}
          multiline={true}
          maxLength={10}
          autoCapitalize={'none'}
          editable={true}
          textAlign={'center'}
          textAlignVertical={'center'}
          secureTextEntry={true}
          type="password"
          onFocus={handlepwcFocus}
          onBlur={handlepwcBlur}
          style={[
            styles.input,
            {
              borderColor: passwordConfirmInput ? '#333842' : '#D6D7D9',
            },
          ]}
        />
      </View>
      <View style={styles.ButtonDesign}>
        <Button
          title="다음"
          color="#D6D7D9"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

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
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'center',
    lineHeight: 20,
  },
});
