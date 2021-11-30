import React from 'react';
import {Text, View} from 'react-native';
import {Browse} from '../../components/browse';
import {Footer} from '../../components/footer';
import {Header} from '../../components/header';
import {styles} from '../styles/screen1-style';

const Screen1 = () => {
  return (
    <View style={styles.containerStyle}>
      {/* <Text style={styles.screenFont}>The History of Air Jordans</Text> */}
      <Header />
      <Browse />
      <Footer />
    </View>
  );
};

export default Screen1;
