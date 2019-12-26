import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, TextInput, Animated, Text, AsyncStorage, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import * as Font from 'expo-font';
import Game from './game'
import Dialog from "react-native-dialog";
import io from "socket.io-client"

export default class First extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            namePopup: false,
            bar: false,
        }

        
    }


    async componentDidMount() {
        await Font.loadAsync({ 'kaki': require('./assets/fonts/CarterOne-Regular.ttf') })
        this.setState({ fontLoaded: true });

        const name = await AsyncStorage.getItem("name")
        if (name) this.setState({name, bar: true}) 
        
    }

    async checkName(){
        
        if (this.state.name) { this.props.navigation.navigate('Game', {name: this.state.name})
    
    }
        else this.setState({namePopup: true})
    }

    async enterName(){
        
        if (this.state.name) {
            AsyncStorage.setItem("name", this.state.name)
            this.setState({namePopup: false, bar: true})
            this.props.navigation.navigate('Game', {name: this.state.name})

        }
        
    }

        render() {
            
            return (

                <LinearGradient colors={['#69B096', '#32936F', '#29795B']} style={{ width: "100%", height: "100%",  alignItems: "center" }}>
{this.state.bar?
<View style={{flexDirection:"row", backgroundColor:"#D6F2D2", height:100, width:"100%", shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8, position:"absolute", top:0}}>


    <Text style={{fontFamily:"kaki", top:50, fontSize:20, left:5, color:"#052628"}}>{this.state.name}</Text>

    <Text style={{fontFamily:"kaki", top:50, fontSize:20, marginLeft:"auto", right:10, color:"#052628"}}>WINS: 5</Text>
</View>
:null
}
<LottieView source={require('./assets/animations/10008-music-note-character.json')} autoPlay width={300}  
style={{position: "relative", shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8}} />


    
<Text style={{fontFamily:"kaki", fontSize:40, color:"white", bottom:60}}>DO RE MI</Text>
<Button  onPress={() => this.checkName()} style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14, }}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>PLAY  1 VS 1  MODE</Text></Button>

<View style={{height:"2%"}}></View>

<Button style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,}}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>PLAY TRAINING MODE</Text></Button>

<View style={{height:"2%"}}></View>

<Button style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,}}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>TUTORIAL</Text></Button>

<View style={{height:"3%"}}></View>

<Text style={{fontFamily:"kaki", fontSize:25, textAlign:"center", color:"white", }}>"THE SINGLE MOST IMPORTANT KEY TO SUCCESS IS TO BE A GOOD LISTENER."</Text>
<Text style={{fontFamily:"kaki" ,fontSize:20, textAlign:"center", color:"white", marginTop:5}}>(KELLY WEARSTLER)</Text>
<Button style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30, borderWidth:3, borderColor:"white", position:"absolute", bottom:10, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,}}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>CREDITS</Text></Button>


<View>
        <Dialog.Container visible={this.state.namePopup}>
          <Dialog.Title style={{fontFamily:"kaki"}}>Enter Your Nickname</Dialog.Title>
         
          <Dialog.Input onChangeText={name => this.setState({name})}> </Dialog.Input>
          <Dialog.Button style={{fontFamily:"kaki"}} label="Cancel" onPress={()=> this.setState({namePopup: false})} />
          <Dialog.Button style={{fontFamily:"kaki"}} label="OK" onPress={()=>{this.enterName()}}/>
        </Dialog.Container>
      </View>
                    </LinearGradient>
            )}
    }
