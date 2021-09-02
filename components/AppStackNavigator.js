import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import PlantInfoScreen from '../Screens/PlantInfoScreen'; 
import Pineapple from '../Screens/Pineapple';
import MalabarNut from '../Screens/MalabarNut'; 
import HolyBasil from '../Screens/HolyBasil';
import Indiangum from '../Screens/Indiangum';
import WinterCherry from '../Screens/WinterCherry';
import Onion from '../Screens/Onion';
import Kalmegh from '../Screens/Kalmegh';
import Coriander from '../Screens/Coriander';

export const AppStackNavigator = createStackNavigator({
  List:{ 
    screen:PlantInfoScreen,
    navigationOptions:{
      headerShown:false 
    }
  },

  Pineapple:{
    screen:Pineapple,
    navigationOptions:{
      headerShown:false 
    }
  },
 
  MalabarNut:{
    screen:MalabarNut,
    navigationOptions:{
      headerShown:false 
    } 
  },  

  HolyBasil:{
    screen:HolyBasil,
    navigationOptions:{
      headerShown:false 
    }
  }, 

  Indiangum:{
    screen:Indiangum,
    navigationOptions:{
      headerShown:false 
    }
  }, 

  WinterCherry:{
    screen:WinterCherry,
    navigationOptions:{
      headerShown:false 
    }
  }, 

  Onion:{
    screen:Onion,
    navigationOptions:{
      headerShown:false 
    }
  },

  Kalmegh:{
    screen:Kalmegh,
    navigationOptions:{
      headerShown:false 
    }
  },

  Coriander:{
    screen:Coriander,
    navigationOptions:{
      headerShown:false 
    }
  },  
}, 

{
  InitialRouteName:'List'
})