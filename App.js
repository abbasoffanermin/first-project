import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Header from './screens/Header.tsx';
import Main from './screens/Main.tsx';    
import ImageSection from './screens/ImageSection.tsx'
import ButtonSection from './screens/ButtonSection.tsx';
import APIs from './screens/APIs.tsx';
export default function App() {
  return (
    <View style={styles.container}>
     <View>
    <Header/>
     </View>
     <Main/>
     <ImageSection/>
     <ButtonSection/>
     <APIs/>
      <StatusBar style="auto" />
    </View>
 
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
font:{
  fontSize:30,
  fontWeight:'bold'
},
margin:{
  marginTop:20,
  marginBottom:20,
  marginLeft:20
},

});