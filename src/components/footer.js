import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import {styles} from './styles/footer-style';
import {useNavigation} from '@react-navigation/native';

export function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity>
        <AntDesignIcons name={'home'} size={25} color={'#828282'} />
      </TouchableOpacity>
      <AntDesignIcons name={'search1'} size={25} color={'#828282'} />
      <AntDesignIcons name={'hearto'} size={25} color={'#828282'} />
      <AntDesignIcons name={'skin'} size={25} color={'#828282'} />
      <AntDesignIcons
        name={'calendar'}
        size={25}
        color={'#828282'}
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
}
