import React from "react";
import { View,Text,StyleSheet,Image,Button } from "react-native";

const APIs=()=>{
    return(
        <View>
            <Text>APIs</Text>
            <Button title="Click Button" onPress={func}></Button>
        </View>
    )
}

export default APIs
const func=function(){
 const Callapi=async()=>{
     const response=await fetch('https://fakestoreapi.com/products')
     const data=await response.json()
   alert(data[0].title)
     
 }
 Callapi()
}