import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
export default function Nickname() {
  const [myTextInput, setmyTextInput] = useState('');
  const [passWordInput, setPassWordInput] = useState(true);
  const [isInput, setisInput] = useState(false);
  const handlepwFocus = () => setPassWordInput(true);
  const handlepwBlur = () => setPassWordInput(false);
  const [isSelected, setSelection] = useState(false);

  const onChangeInput = event => {
    setmyTextInput(event);
    setisInput(true);
  };
  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight: 'bold', paddingTop: 24, fontSize: 18}}>
        마지막으로
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>
        닉네입을 입력해주세요
      </Text>
      <Text style={{paddingTop: 10, color: '#999BA0'}}>
        최대 20자로 닉네임을 입력해주세요
      </Text>
      <View
        style={{
          paddingTop: 50,
          paddingBottom: 24,
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.input}
          type="text"
          placeholder="닉네임 입력"></TextInput>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>개인정보방침에 동의합니다.</Text>
        </View>
      </View>
      <View style={{marginTop: 50}}>
        {isInput ? (
          <View style={styles.afterButtonDesign}>
            <Button
              title="다음"
              color="white"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </View>
        ) : (
          <View style={styles.ButtonDesign}>
            <Button
              title="다음"
              color="#D6D7D9"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </View>
        )}
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
  afterButtonDesign: {
    backgroundColor: '#E17551',
    borderRadius: 10,
    width: 160,
    height: 48,
    justifyContent: 'center',
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
