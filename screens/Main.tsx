import React from "react";
import { View,Text,StyleSheet } from "react-native";

const Main :React.FC=()=>{
    return(
        <View>
            <Text style={styles.margin}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, corrupti perspiciatis. Impedit aliquam illum omnis magnam, sint in officiis et?</Text>
        </View>
    )
}

export default Main

const styles=StyleSheet.create({
    margin:{
        marginTop:30,
        marginBottom:20,
        marginLeft:20
    }
})