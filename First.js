import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, TextInput, Animated, Text, AsyncStorage, Image, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import * as Font from 'expo-font';
import Game from './game'
import Dialog from "react-native-dialog";
import io from "socket.io-client"
import * as Animatable from 'react-native-animatable';
import { NavigationEvents } from 'react-navigation';
import Svg from './svg'

export default class First extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            namePopup: false,
            bar: false,
            opacity: 0,
        }

        
    }

    navbar = ref => this.nav = ref
    button1 = ref => this.view1 = ref;
    button2 = ref => this.view2 = ref;
    button3 = ref => this.view3 = ref;

// training record
record = undefined;
  
    startingEffect(){
        if(this.state.bar) this.nav.slideInDown(1000)
        
        this.view1.bounceInRight(800)
        
        this.view2.bounceInLeft(800, 200)

        this.view3.zoomIn(800, 400)
    }
    
    async componentDidMount() {
        await Font.loadAsync({ 'kaki': require('./assets/fonts/CarterOne-Regular.ttf') })
        this.setState({ fontLoaded: true });
        AsyncStorage.getItem("name")
        const name = await AsyncStorage.getItem("name")
        if (name) this.setState({name, bar: true})
       
        // get training record
        this.record = await AsyncStorage.getItem("trainingRecord")
    }

    componentWillUnmount(){
        this.navigateEffect()
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

    navigateEffect(){
        if(this.state.bar) this.nav.slideOutUp(1000)
        
        this.view1.bounceOutLeft(800)
        
        this.view2.bounceOutRight(800)

        this.view3.zoomOut(800, 200)
    }

        render() {
            
            return (

                <LinearGradient colors={['#69B096', '#32936F', '#29795B']} style={{ width: "100%", height: "100%",  alignItems: "center" }}>
                    <StatusBar hidden={false}
          barStyle="light-content"
            backgroundColor="rgb(122,77,246)"
        />
{this.state.bar?
<Animatable.View ref={this.navbar} style={{position: "absolute", top:0, zIndex:2}}>
<View style={{flexDirection:"row", backgroundColor:"#D6F2D2", height:100, width:"100%", shadowColor: "#000",

elevation: 10, top:0}}>


    <Text style={{fontFamily:"kaki", top:50, fontSize:20, left:5, color:"#052628"}}>{this.state.name}</Text>

    <Text style={{fontFamily:"kaki", top:50, fontSize:20, marginLeft:"auto", right:10, color:"#052628"}}>WINS: 5</Text>
</View>
</Animatable.View>
:null
}

<LottieView source={require('./assets/animations/10008-music-note-character.json')} autoPlay width={300}  
style={{top:9 ,position: "relative", shadowColor: "#000", height:200, zIndex:10,
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8}} />


   
        
<Text style={{fontFamily:"kaki", fontSize:40, color:"white", bottom:60}}>DO RE MI</Text>

<Svg style={{position: "absolute", top: 120}}/>

<Animatable.View ref={this.button1}>
<Button  onPress={() => this.checkName()} style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30,shadowColor: "#000", borderRadius:5,
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14, }}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>PLAY  1 VS 1  MODE</Text></Button>
</Animatable.View>


<View style={{height:"2%"}}></View>

<Animatable.View ref={this.button2}>
<Button onPress={()=>{
    this.navigateEffect()
    setTimeout(()=>{this.props.navigation.navigate('TrainingMode', {record: this.record})}, 700)
}} style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14}}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>PLAY TRAINING MODE</Text></Button>
</Animatable.View>


<View style={{height:"2%"}}></View>

<Animatable.View ref={this.button3}>
<Button style={{backgroundColor:"#1B393B", textAlign:"center", padding: 30, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,}}><Text style={{fontFamily:"kaki", fontSize:20, textAlign:"center", color:"white"}}>TUTORIAL</Text></Button>
</Animatable.View>

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
        <Dialog.Container visible={this.state.namePopup} style={{}}>
          <Dialog.Title style={{fontFamily:"kaki", }}>Enter Your Nickname</Dialog.Title>
         
          <Dialog.Input onChangeText={name => this.setState({name})} style={{borderBottomWidth:1, backgroundColor: "#88888821", borderColor:"#2323238c", fontFamily:"kaki"}}> </Dialog.Input>
          <Dialog.Button style={{fontFamily:"kaki"}} label="Cancel" onPress={()=> this.setState({namePopup: false})} />
          <Dialog.Button style={{fontFamily:"kaki"}} label="OK" onPress={()=>{this.enterName()}}/>
        </Dialog.Container>
      </View>

            <NavigationEvents onWillFocus={()=>{this.startingEffect()}}/>
    </LinearGradient>
            )}
    }

