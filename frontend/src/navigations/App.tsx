import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperatingScreen from './operating';
import ReserveScreen from './reserve';
import TreasuryScreen from './treasury';
import OperatingLogo from '../assets/icons/operating-logo';
import ReserveLogo from '../assets/icons/reserve-logo';
import TreasuryLogo from '../assets/icons/treasury-logo';
import HomeIcon from '../assets/icons/home-icon';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              // console.log(focused, color, size);
              case 'Home':
                return <HomeIcon />;
              case 'Operating':
                return <OperatingLogo />;
              case 'Reserve':
                return <ReserveLogo />;
              case 'Treasury':
                return <TreasuryLogo />;
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Operating" component={OperatingScreen} />
        <Tab.Screen name="Reserve" component={ReserveScreen} />
        <Tab.Screen name="Treasury" component={TreasuryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
