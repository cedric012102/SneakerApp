import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';
import AirJordan1Screen from './src/screens/air-jordan-1-screen';
import AirJordan2Screen from './src/screens/air-jordan-2-screen';
import AirJordan3Screen from './src/screens/air-jordan-3-screen';
import AirJordan4Screen from './src/screens/air-jordan-4-screen';
import AirJordan5Screen from './src/screens/air-jordan-5-screen';
import AirJordan6Screen from './src/screens/air-jordan-6-screen';
import AirJordan7Screen from './src/screens/air-jordan-7-screen';
import AirJordan8Screen from './src/screens/air-jordan-8-screen';
import AirJordan9Screen from './src/screens/air-jordan-9-screen';
import AirJordan10Screen from './src/screens/air-jordan-10-screen';
import AirJordan11Screen from './src/screens/air-jordan-11-screen';
import AirJordan12Screen from './src/screens/air-jordan-12-screen';
import AirJordan13Screen from './src/screens/air-jordan-13-screen';
import AirJordan14Screen from './src/screens/air-jordan-14-screen';
import CalendarScreen from './src/screens/calendar-screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AirJordan1" component={AirJordan1Screen} />
        <Stack.Screen name="AirJordan2" component={AirJordan2Screen} />
        <Stack.Screen name="AirJordan3" component={AirJordan3Screen} />
        <Stack.Screen name="AirJordan4" component={AirJordan4Screen} />
        <Stack.Screen name="AirJordan5" component={AirJordan5Screen} />
        <Stack.Screen name="AirJordan6" component={AirJordan6Screen} />
        <Stack.Screen name="AirJordan7" component={AirJordan7Screen} />
        <Stack.Screen name="AirJordan8" component={AirJordan8Screen} />
        <Stack.Screen name="AirJordan9" component={AirJordan9Screen} />
        <Stack.Screen name="AirJordan10" component={AirJordan10Screen} />
        <Stack.Screen name="AirJordan11" component={AirJordan11Screen} />
        <Stack.Screen name="AirJordan12" component={AirJordan12Screen} />
        <Stack.Screen name="AirJordan13" component={AirJordan13Screen} />
        <Stack.Screen name="AirJordan14" component={AirJordan14Screen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
