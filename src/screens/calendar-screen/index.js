import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/calendar-screen-style';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenFont}>Air Jordan Release Dates</Text>
      <View>
        <Text style={styles.bodyText}>
          <Text>OCTOBER</Text>
          <Text>7 - wmns RETRO 5 - Bluebird 16 - RETRO 14 WINTERIZED</Text>
        </Text>
      </View>
    </View>
  );
};

export default CalendarScreen;
