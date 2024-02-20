import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/home/HomeScreen/HomeScreen';
import DetailsScreen from '@screens/details/DetailsScreen/DetailsScreen';
import MarketScreen from '@screens/market/MarketScreen/MarketScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const renderTabBarIcon = ({
    focused,
    color,
    size,
    route,
  }: {
    focused: boolean;
    color: string;
    size: number;
    route: any;
  }) => {
    let iconName = 'pizza';

    if (route.name === 'Home') {
      iconName = focused ? 'pizza' : 'pizza-outline';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'accessibility' : 'accessibility-outline';
    } else if (route.name === 'Market') {
      iconName = focused ? 'pulse' : 'pulse-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) =>
            renderTabBarIcon({focused, color, size, route}),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerTintColor: 'blue',
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen
          name="Profile"
          component={DetailsScreen}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
            },
          })}
        />
        <Tab.Screen name="Market" component={MarketScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
