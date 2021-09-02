import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import Panel from 'react-native-panel';

export default class DiseaseInfoScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingTop: 30, paddingBottom: 20 }}>
        <MyHeader title="AILMENTS" navigation={this.props.navigation} />
        <Panel
          header="Indigestion"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}> 
            <View>
              <Text 
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%', 
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Upper abdominal discomfort, described as burning sensation,
                bloating or gassiness, nausea or feeling full too quickly after
                starting to eat
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Diseases, eating too much, drinking too much, food intolerance
                or taking pills on an empty stomach
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Coriander, Holy Basil, Kalmegh, Prickly Chaff Flower, Long
                Pepper
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Acne"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Uninflamed blackheads to pus-filled pimples or large, red and
                tender bumps
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSE
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Hair follicles plug with oil and dead skin cells
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Kalmegh, Aloes
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Esophageal Cancer"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Trouble swallowing, unintentional weight loss, chest pain,
                worsening indigestion or heartburn and coughing or hoarseness
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Smoking and poorly controlled acid reflux
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Onion
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Stomach Cancer"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Feeling bloated after eating, feeling full after eating small
                amounts of food, nausea, heartburn or indigestion
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Smoking and a diet of highly processed or salty foods
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Onion
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Dysentry"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Bloody diarrhoea, abdominal pain, cramps, fever and malaise
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Most often caused by shigella bacteria (shigellosis) or an
                amoeba, contaminated food or water
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Garlic, Bengal Quince, Elephant Yam
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Ulcers"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Pain in the upper abdominal, the chest or the upper abdomen,
                belching, heartburn, indigestion, nausea, passing excessive
                amounts of gas, vomiting, fatigue, feeling full sooner than
                normal, or loss of appetite
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Bacteria H. Pylori and anti-inflammatory pain relievers
                including aspirin
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Aloes, Sweet Flag, Indian Laburnum, Dita, Velvet Leaf Tree,
                Liquorice
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Hyperlipidaemia"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Hyperlipidaemia doesn't cause any symptoms
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                High levels of fat particles (lipids) in the blood
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Crepe Ginger, Areca Nut/Betelnut
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Asthma"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Difficulty in breathing, chest pain, cough, wheezing, chest
                pressure, flare, anxiety, early awakening, fast heart rate, or
                throat irritation
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSE
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Airways become inflamed, narrow and swell and produce extra
                mucus
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Malabar Nut, Greater Cardamom, Prickly Chaff Flower, Siris Tree,
                Long Pepper
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Bronchitis"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Coughing up thickened mucus, shortness of breath, fatigue or
                malaise, runny nose or post-nasal drip, chest pressure,
                headache, shortness of breath, sleeping difficulty, or sore
                throat
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Viral respiratory infection, Inflammation of the lining of
                bronchial tubes
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Malabar Nut, Greater Cardamom, Liquorice
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Diarrhea"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Frequent, loose, watery stools and stomach pain
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Liquid diet, food intolerance, stress, anxiety or use of
                laxatives
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Kalmegh
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Nausea"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Stomach discomfort and the sensation of wanting to vomit
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Motion such as from a car and plane, taking pills on an empty
                stomach, eating too much or too little or drinking too much
                alcohol
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Lesser Cardamom
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Anemia"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Fatigue, skin pallor, shortness of breath, light-headedness,
                dizziness or a fast heartbeat
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Blood doesn't have enough healthy red blood cells, Reduced
                oxygen flow to the body's organs
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Spreading Hogweed, Prickly Chaff Flower,
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Arthritis"
          style={{ borderBottomWidth: 1, backgroundColor: 'beige' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Pain, swelling, reduced range of motion and stiffness
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Inflammation of one or more joints, causing pain and stiffness
                that can worsen with age
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Staff Tree, Leadwort, Monks Hood
              </Text>
            </View>
          </ImageBackground>
        </Panel>

        <Panel
          header="Jaundice"
          style={{ borderBottomWidth: 1, backgroundColor: 'burlywood' }}>
          <ImageBackground source={require('../assets/woodbg.jpeg')}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderTopWidth: 2,
                  width: '90%',
                  alignSelf: 'center', 
                }}>
                SYMPTOMS
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Yellowing of the skin and whites of the eyes
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                CAUSES
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Build-Up of bilirubin in the blood, Gilbert's syndrome (a benign
                condition) or medication side effects
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                  borderTopWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                PREVENTIONS
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                Prickly Chaff Flower, Aloes
              </Text>
            </View>
          </ImageBackground>
        </Panel>
      </ScrollView>
    );
  }
}
