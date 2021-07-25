import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import Modal from 'react-native-modal';
export default function Calender() {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const today = moment().format('YYYY-MM-DD');
  const [isModalVisible, setModalVisible] = useState(false);
  const [monthModal, setMonthModal] = useState(false);
  const handleMonthModal = () => {
    setMonthModal(!monthModal);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'flex-start',
        }}>
        <Button title="2021년 7월" onPress={handleMonthModal} />
      </View>
      <Modal
        isVisible={monthModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        transparent={true}
        coverScreen={false}
        backdropColor={'white'}
        backdropOpacity={1}
        deviceHeight="20%">
        <View
          style={{
            flex: 0.3,
            backgroundColor: 'white',
            top: '70%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '50%',
          }}>
          <Button title="Hide modal" onPress={handleMonthModal} />
        </View>
      </Modal>
      <View style={{height: 400}}>
        <CalendarList
          onVisibleMonthsChange={months => {
            console.log('now these months are visible', months);
          }}
          calendarHeight={350}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          markingType={'multi-dot'}
          markedDates={{
            '2021-07-16': {
              dots: [vacation, massage, workout],

              selectedColor: 'red',
            },
            '2021-07-17': {dots: [massage, workout]},
            [today]: {selected: true, selectedColor: 'gray'},
          }}
          onDayPress={toggleModal}
        />
      </View>
      <Modal
        isVisible={isModalVisible}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        transparent={true}
        coverScreen={false}
        backdropColor={'white'}
        backdropOpacity={1}
        deviceHeight="10%">
        <View
          style={{
            flex: 0.3,
            backgroundColor: 'white',
            top: '60%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '30%',
          }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      <Agenda
        items={{
          '2021-07-18': [{name: 'item 1 - any js object'}],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
