import React from "react";
import { View,Text,StyleSheet,Image,Button } from "react-native";
const ButtonSection :React.FC=()=>{
    return(
        <View>
          <Button title="Click" onPress={()=>{console.log("login");}}></Button>
        </View>
    )
}
export default ButtonSection