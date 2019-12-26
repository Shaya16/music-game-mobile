import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Loading extends React.Component {

    render(){
        return(
            <LinearGradient colors={['#DDF4DA', '#D6F2D2', '#B0C7AC']} style={{ width: "100%", height: "100%",  alignItems: "center" }}>
                <LottieView source={require('./assets/animations/lf30_editor_YST8D9.json')} autoPlay width={500} 
style={{ position: "relative"}} />
<Text style={{fontFamily:"kaki", fontSize:25, color:"#052628"}}>SEARCHING FOR PLAYERS...</Text>


<Text style={{fontFamily:"kaki", fontSize:15, color:"#052628", textAlign:"center", top:10}}>TIP: REMEMBER THE LAST NOTE YOUV'E CLICKED SO YOU WOULD KNOW THE NEXT'S LOCATION</Text>
            </LinearGradient>
        )
    }
}

