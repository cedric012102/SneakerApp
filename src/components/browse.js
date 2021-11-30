import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {styles} from './styles/browse-style';
import {ScrollView} from 'react-native-gesture-handler';
import {SneakerCard} from '../components/sneaker-card';

export function Browse() {
  return (
    <ScrollView>
      <ImageBackground style={{flex: 1, backgroundColor: '#B5B1B2'}}>
        <View>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Air Jordans I - XIV</Text>
          </View>
          <View></View>
          <View style={styles.middleText}>
            <View style={styles.iconView}>
              <FontistoIcons name={'fire'} size={25} color={'#FFC300'} />
              <Text style={styles.historyText}>The History</Text>
            </View>
            <View>
              <View>
                <SneakerCard
                  label="Air Jordan I"
                  image={require('../assets/images/AirJordan1.jpg')}
                  routeName={'AirJordan1'}
                />
                <SneakerCard
                  label="Air Jordan II"
                  image={require('../assets/images/AirJordan2.jpg')}
                  routeName={'AirJordan2'}
                />
                <SneakerCard
                  label="Air Jordan III"
                  image={require('../assets/images/AirJordan3.jpg')}
                  routeName={'AirJordan3'}
                />
                <SneakerCard
                  label="Air Jordan IV"
                  image={require('../assets/images/AirJordan4.jpg')}
                  routeName={'AirJordan4'}
                />
                <SneakerCard
                  label="Air Jordan V"
                  image={require('../assets/images/AirJordan5.jpg')}
                  routeName={'AirJordan5'}
                />
                <SneakerCard
                  label="Air Jordan VI"
                  image={require('../assets/images/AirJordan6.jpg')}
                  routeName={'AirJordan6'}
                />
                <SneakerCard
                  label="Air Jordan VII"
                  image={require('../assets/images/AirJordan7.jpg')}
                  routeName={'AirJordan7'}
                />
                <SneakerCard
                  label="Air Jordan VIII"
                  image={require('../assets/images/AirJordan8.jpg')}
                  routeName={'AirJordan8'}
                />
                <SneakerCard
                  label="Air Jordan IX"
                  image={require('../assets/images/AirJordan9.jpg')}
                  routeName={'AirJordan9'}
                />
                <SneakerCard
                  label="Air Jordan X"
                  image={require('../assets/images/AirJordan10.jpg')}
                  routeName={'AirJordan10'}
                />
                <SneakerCard
                  label="Air Jordan XI"
                  image={require('../assets/images/AirJordan11.jpg')}
                  routeName={'AirJordan11'}
                />
                <SneakerCard
                  label="Air Jordan XII"
                  image={require('../assets/images/AirJordan12.jpg')}
                  routeName={'AirJordan12'}
                />
                <SneakerCard
                  label="Air Jordan XIII"
                  image={require('../assets/images/AirJordan13.jpg')}
                  routeName={'AirJordan13'}
                />
                <SneakerCard
                  label="Air Jordan XIV"
                  image={require('../assets/images/AirJordan14.jpg')}
                  routeName={'AirJordan14'}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
