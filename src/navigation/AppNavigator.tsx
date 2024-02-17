import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/home/HomeScreen/HomeScreen';
import DetailsScreen from '@screens/details/DetailsScreen/DetailsScreen';
import MarketScreen from '@screens/market/MarketScreen/MarketScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
