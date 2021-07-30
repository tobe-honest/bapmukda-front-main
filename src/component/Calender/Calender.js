import React, {useState} from 'react';
import {View, Button, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import egg from '../imoji/egg.png';
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
  const [isDay, setisDay] = useState([]);

  const toggleModal = event => {
    setModalVisible(!isModalVisible);
    setisDay(event);
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
            console.log('now these months are visibl', months);
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
          onDayPress={day => toggleModal(day)}
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
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffffff',
              shadowOpacity: 1,
              shadowOffset: {width: 0, height: 1},
              width: '80%',
              height: '40%',
              shadowColor: 'rgb(196, 196, 196)',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FBFBFB',
                shadowOpacity: 1,
                shadowOffset: {width: 2, height: 2},
                width: '15%',
                height: '70%',
                margin: 20,
                shadowColor: 'rgb(196, 196, 196)',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 20}}>🍳</Text>
            </View>
            <Text style={{textAlign: 'center'}}>계란후라이</Text>
            <Text style={{textAlign: 'center'}}>계란후라이</Text>
            <Text style={{textAlign: 'center'}}>계란후라이</Text>
          </View>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>

      <Agenda />
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
