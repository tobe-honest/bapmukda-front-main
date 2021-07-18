import React from 'react';
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
export default function Calender() {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const today = moment().format('YYYY-MM-DD');

  return (
    <View>
      <Calendar
        markingType={'multi-dot'}
        markedDates={{
          '2021-07-16': {
            dots: [vacation, massage, workout],

            selectedColor: 'red',
          },
          '2021-07-17': {dots: [massage, workout]},
          [today]: {selected: true, selectedColor: 'gray'},
        }}
      />
      <Agenda
        items={{
          '2021-07-18': [{name: 'item 1 - any js object'}],
        }}
      />
    </View>
  );
}
