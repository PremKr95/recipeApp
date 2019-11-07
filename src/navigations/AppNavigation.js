import React from 'react'
import {Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs';

import ReceipeNavigator from './ReceipeNavigation'
import RestaurantNavigator from './RestaurantNavigation'
import {Icon} from 'native-base'
const BottomNavigator = createBottomTabNavigator(
  {
    ReceipeNavigator: ReceipeNavigator ,
    RestaurantNavigator: RestaurantNavigator ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'ReceipeNavigator') {
          return (
            <Icon style={{fontSize:20 , color: 'grey'}} name={'profile'} type={'AntDesign'}/>
          );
        } else {
          return (
            <Icon style={{fontSize:20 , color:'grey'}} name={'restaurant'} type={'MaterialIcons'}/>
          );
        }
      },
      
    }),
    tabBarOptions: {
      activeTintColor: '#73c700',
      inactiveTintColor: '#263238',
    },
  }
);

export default AppContainer = createAppContainer(BottomNavigator);

console.disableYellowBox = true;