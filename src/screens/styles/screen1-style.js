import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenFont: {
    fontFamily: 'Nosifer-Regular',
    fontSize: 25,
    color: 'blue',
  },
  containerStyle: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },
});
