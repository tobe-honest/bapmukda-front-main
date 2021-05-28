/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/component/Home/Home';
import LoginScreen from './src/component/Login/Login';
import HaveId from './src/component/Login/HaveId/HaveId';
import SignUp from './src/component/SignUp/SignUp';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: '로그인/회원가입'}}
        />
        <Stack.Screen
          name="HaveId"
          component={HaveId}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: '회원가입'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
