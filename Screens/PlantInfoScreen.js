import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { ListItem, Icon } from 'react-native-elements';

export default class PlantInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlantsList: [],
    };
    this.plantRef = null;
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../assets/woodbg.jpeg')}
          style={styles.bgImage}>
          <MyHeader title="FLORA" navigation={this.props.navigation} />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('MalabarNut');
              }}>
              <Image
                source={require('../assets/malabarnut.jpg')} 
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Malabar Nut{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.props.navigation.navigate('Pineapple');
              }}>
              <Image
                source={require('../assets/pineapple.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Pineapple{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Indiangum');
              }}>
              <Image
                source={require('../assets/indiangum.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Indian Gum{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.props.navigation.navigate('Coriander');
              }}>
              <Image 
                source={require('../assets/coriander.jpg')}
                style={styles.image}
              /> 
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Coriander{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('HolyBasil');
              }}>
              <Image
                source={require('../assets/basil.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Holy Basil{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.props.navigation.navigate('Kalmegh');
              }}>
              <Image
                source={require('../assets/kalmegh.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Kalmegh{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginBottom:30 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { 
                this.props.navigation.navigate('WinterCherry');
              }}>
              <Image
                source={require('../assets/cherry.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                Winter Cherry
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.props.navigation.navigate('Onion');
              }}>
              <Image
                source={require('../assets/onion.jpg')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign:'center'
                }}>
                {' '}
                Onion{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100, 
    height: 100,
    backgroundColor: 'transparent', 
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 50,
    textAlign: 'center',
  },

  button2: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 60,  
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  bgImage: {
    flex: 1, 
    resizeMode: 'cover'
  },
});
