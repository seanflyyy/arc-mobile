/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperatingScreen from './operating';
import ReserveScreen from './reserve';
import TreasuryScreen from './treasury';
import OperatingIcon from '../assets/icons/operating-logo';
import ReserveIcon from '../assets/icons/reserve-logo';
import TreasuryIcon from '../assets/icons/treasury-logo';
import HomeIcon from '../assets/icons/home-icon';
import HomeScreen from './home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              // console.log(focused, color, size);
              case 'Home':
                return <HomeIcon color={focused ? 'black' : '#6E6E6E'} />;
              case 'Operating':
                return <OperatingIcon color={focused ? 'black' : '#6E6E6E'} />;
              case 'Reserve':
                return <ReserveIcon color={focused ? 'black' : '#6E6E6E'} />;
              case 'Treasury':
                return <TreasuryIcon color={focused ? 'black' : '#6E6E6E'} />;
            }
          },
          tabBarLabel: () => {
            return null;
          },
          // title: () => null,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Operating" component={OperatingScreen} />
        <Tab.Screen name="Reserve" component={ReserveScreen} />
        <Tab.Screen name="Treasury" component={TreasuryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
