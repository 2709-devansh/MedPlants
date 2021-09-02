import React, { Component } from 'react';
import { Header, Icon, Badge, withBadge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Clock from 'react-live-clock';

export default class PlantHeader extends Component {
  render() { 
    return ( 
      <SafeAreaProvider>
        <Header   
          leftComponent={    
            <Icon
              name="arrow-back"
              type="ionicon" 
              onPress={() => {
                this.props.navigation.navigate('List'); 
              }}
            />
          }  
          centerComponent={{   
            text: this.props.title,   
            style: { color: 'black', fontSize: 19, fontWeight: 'bold' }, 
          }}           
          backgroundColor="aquamarine" 
        /> 
      </SafeAreaProvider>
    );
  }
}
 