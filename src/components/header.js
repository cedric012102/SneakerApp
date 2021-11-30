import React from 'react';
import {View, Text} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import {styles} from './styles/header-style';
import ModalDropdown from 'react-native-modal-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function Header() {
  return (
    <View style={styles.containerStyle}>
      <ModalDropdown options={['Screen2', 'option 2', 'option 3']}>
        <IoniconsIcon name={'menu-sharp'} size={25} color={'#828282'} />
      </ModalDropdown>

      <View style={styles.iconsView}>
        <View style={styles.ethereumAndCircleView}>
          <MaterialCommunityIcons
            name={'ethereum'}
            size={25}
            color={'#828282'}
          />
          <Text style={styles.textStyle}>News</Text>
          <AntDesignIcons name={'downcircleo'} size={15} color={'red'} />
        </View>
        <TouchableOpacity>
          <FoundationIcons name={'crown'} size={25} color={'#828282'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
