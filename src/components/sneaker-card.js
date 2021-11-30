import React from 'react';
import {Text} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export function SneakerCard({label, image, routeName}) {
  const navigation = useNavigation();
  return (
    <>
      <Card>
        <Card.Title>{label}</Card.Title>
        <Card.Divider />
        <Card.Image source={image}>
          <Text style={{marginBottom: 80}}></Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
            onPress={() => navigation.navigate(routeName)}
          />
        </Card.Image>
      </Card>
    </>
  );
}
