import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

const ImageSection :React.FC=()=>{
    return(
        <View>
            <Image source={require('../assets/img.png')}></Image>
        </View>
    )
}
const styles=StyleSheet.create({
    margin:{
        marginTop:30,
        marginBottom:20,
        marginLeft:20
    }
})

export default ImageSection