import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PlantInfoScreen from '../Screens/PlantInfoScreen';
import DiseaseInfoScreen from '../Screens/DiseaseInfoScreen';
import { Icon } from 'react-native-elements';
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
  PlantInfo: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="leaf" type="ionicon" color="green" />,
      tabBarLabel: 'Plants',
    },
  },
  
  DiseaseInfo: {
    screen: DiseaseInfoScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="medkit" type="ionicon" color="red" />,
      tabBarLabel: 'Diseases And Cures',
    }, 
  },
});
