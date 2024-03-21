import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <Text style={styles.container}>Hi,Narmin Abbasova</Text>
    );
};

export default Header;

const styles :any = StyleSheet.create({
    container: {
      fontSize:20,
      color: '#007AFF',

      
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


