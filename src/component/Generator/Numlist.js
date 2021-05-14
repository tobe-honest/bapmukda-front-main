import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Numlist(props) {
  return props.num.map((item, idx) => (
    <View style={styles.numlist} key={idx}>
      <Text> {item} </Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    paddingTop: 5,
    marginTop: 5,
    width: '100%',
  },
});
