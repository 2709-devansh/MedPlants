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

export default class Holybasil extends React.Component {
  render() {
    return (
      <View
        style={{ backgroundColor: '#ccfffd', width:'100%', height:'100%'}}>
        <PlantHeader title="Holy Basil" navigation={this.props.navigation}/>
        <Image
          source={require('../assets/basil.jpg')}
          style={styles.image}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: '#ccfffd',
            height:'50%',
            resizeMode:'cover'
          }}>
          <Text style={[styles.pName, {textDecorationLine:'underline', fontSize:22}]}> Name  </Text>
          <Text style={[styles.pName, {marginBottom:10, fontSize:21}]}> Holy Basil </Text>
          <Text style={[styles.bName, {textDecorationLine:'underline', fontSize:22}]}> Botanical Name </Text>
          <Text style={[styles.bName, {marginBottom:10, fontSize:21}]}> Ocimum Sactum Linn Pennel </Text>
          <Text style={[styles.mUse, {textDecorationLine:'underline', fontSize:22}]}> Medicinal Use </Text>
          <Text style={[styles.mUse, {fontSize:21}]}> Indigestion, Respiratory Diseases </Text>
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
