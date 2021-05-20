import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 12, marginTop: 15, marginBottom: 15}}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.3,
  },
});

export default Header;
