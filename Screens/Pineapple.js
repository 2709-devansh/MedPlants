import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import PlantHeader from '../components/PlantHeader';

export default class Pineapple extends React.Component {
  render() {
    return (
      <View
        style={{ backgroundColor: '#ccfffd', width:'100%', height:'100%'}}>
        <PlantHeader title="Pineapple" navigation={this.props.navigation} />
        <Image
          source={require('../assets/pineapple.jpg')}
          style={styles.image}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ccfffd',
            height:'50%',
            resizeMode:'cover',
          }}>
          <Text style={[styles.pName, {textDecorationLine:'underline', fontSize:22}]}> Name  </Text>
          <Text style={[styles.pName, {marginBottom:10, fontSize:21}]}> Pineapple </Text>
          <Text style={[styles.bName, {textDecorationLine:'underline', fontSize:22}]}> Botanical Name </Text>
          <Text style={[styles.bName, {marginBottom:10, fontSize:21}]}> Ananas Comosus Pennel </Text>
          <Text style={[styles.mUse, {textDecorationLine:'underline', fontSize:22}]}> Medicinal Use </Text>
          <Text style={[styles.mUse, {fontSize:21}]}> Diabetes, Heart Disease </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
  },

  pName:{
    color:'olive',
    fontFamily:'Century Gothic',
    alignSelf:'center'
  },

  bName:{
    color:'dodgerblue',
    fontFamily:'Century Gothic',
    alignSelf:'center'
  },

  mUse:{
    color:'salmon',
    fontFamily:'Century Gothic',
    alignSelf:'center'
  }
});
