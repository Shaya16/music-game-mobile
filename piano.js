import React from 'react';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import {
  StyleSheet,
  
  View,
  TextInput,
} from 'react-native';




const c = new Audio.Sound();
c.loadAsync(require('./notes/c2.mp3'));

const cS = new Audio.Sound();
cS.loadAsync(require('./notes/cS2.mp3'));

const d = new Audio.Sound();
d.loadAsync(require('./notes/d2.mp3'));

const dS = new Audio.Sound();
dS.loadAsync(require('./notes/dS2.mp3'));

const e = new Audio.Sound();
e.loadAsync(require('./notes/e2.mp3'));

const f = new Audio.Sound();
f.loadAsync(require('./notes/f2.mp3'));

const fS = new Audio.Sound();
fS.loadAsync(require('./notes/fS2.mp3'));

const g = new Audio.Sound();
g.loadAsync(require('./notes/g2.mp3'));

const gS = new Audio.Sound();
gS.loadAsync(require('./notes/gS2.mp3'));

const a = new Audio.Sound();
a.loadAsync(require('./notes/a2.mp3'));

const aS = new Audio.Sound();
aS.loadAsync(require('./notes/aS2.mp3'));

const b = new Audio.Sound();
b.loadAsync(require('./notes/b2.mp3'));

sounds=[c,cS,d,dS,e,f,fS,g,gS,a,aS,b]

const play =  (soundObject)=>{

try {
  soundObject.stopAsync()
  soundObject.playAsync();
  
  
  // Your sound is playing!
} catch (error) {
  // An error occurred!
}}

export default class Piano extends React.Component {
  constructor( props ){
    super( props );

    // backgroundColor
    this.state = {
      colorC : "white",
      colorCs: "black",
      colorD : "white",
      colorDs: "black",
      colorE : "white",
      colorF : "white",
      colorFs: "black",
      colorG : "white",
      colorGs: "black",
      colorA : "white",
      colorAs: "black",
      colorB : "white",
      timer: false,
      fontLoaded: false,
      
    }

    // preload sounds
    
  }

  async componentDidMount(){

    await Font.loadAsync({'kaki': require('./assets/fonts/CarterOne-Regular.ttf')})
    this.setState({ fontLoaded: true});
    
    
  }
 
 
  


  stroke ( note ) {
    // change backgroundColor
    switch ( note ) {
      case "C":
        this.timer()
        this.setState({ colorC: "rgba(1, 1, 1, 0.1)" })
    play(sounds[0])

        break;
      case "Cs":
        this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" })
        play(cS)
        break;
      case "D":
        this.setState({ colorD: "rgba(1, 1, 1, 0.1)" })
        play(d)
        break;
      case "Ds":
        this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" })
        play(dS)
        break;
      case "E":
        this.setState({ colorE: "rgba(1, 1, 1, 0.1)" })
        play(e)
        break;
      case "F":
        this.setState({ colorF: "rgba(1, 1, 1, 0.1)" })
        play(f)
        break;
      case "Fs":
        this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" })
        play(fS)
        break;
      case "G":
        this.setState({ colorG: "rgba(1, 1, 1, 0.1)" })
        play(g)
        break;
      case "Gs":
        this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" })
        play(gS)
        break;
      case "A":
        this.setState({ colorA: "rgba(1, 1, 1, 0.1)" })
        play(a)
        break;
      case "As":
        this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" })
        play(aS)
        break;
      case "B":
        this.setState({ colorB: "rgba(1, 1, 1, 0.1)" })
        play(b)
        break;
    }

    // play sound
    
  }
  stop( note ) {

    // change backgroundColor
    switch ( note ) {
      case "C":
        this.setState( { colorC: "white" } )
        break;
      case "Cs":
        this.setState( { colorCs: "black" } )
        break;
      case "D":
        this.setState( { colorD: "white" } )
        break;
      case "Ds":
        this.setState( { colorDs: "black" } )
        break;
      case "E":
        this.setState( { colorE: "white" } )
        break;
      case "F":
        this.setState( { colorF: "white" } )
        break;
      case "Fs":
        this.setState( { colorFs: "black" } )
        break;
      case "G":
        this.setState( { colorG: "white" } )
        break;
      case "Gs":
        this.setState( { colorGs: "black" } )
        break;
      case "A":
        this.setState( { colorA: "white" } )
        break;
      case "As":
        this.setState( { colorAs: "black" } )
        break;
      case "B":
        this.setState( { colorB: "white" } )
        break;
    }

    // stop sound
    
    
  }
  timer(){
    this.setState({timer: true})
    setTimeout(()=>{
        this.setState({timer: false})
    }, 3200)
}
  render () {
    return (
      <LinearGradient colors={['#192f6a', '#268cdc', '#94d0ff']} style={{width:"100%", height:"100%", backgroundColor:"#94d0ff"}}>
        
<View style={{ flexDirection:"row", }}>
<View style={{borderColor:"white", borderWidth:5 ,top:70,  borderRadius:150, backgroundColor:"rgb(255, 144, 236)" ,alignSelf: 'flex-start', lignItems: "center", justifyContent: "center"}}>{this.state.fontLoaded?<Text style={{ fontFamily:'kaki', fontSize:25,  alignSelf: 'flex-start', padding:5}}>SHAIDRAI: 30</Text>:null}</View>
<View style={{borderColor:"white", borderWidth:5,marginLeft:"auto", top:70,  borderRadius:150, backgroundColor:"rgb(154, 255, 153)" ,alignSelf: 'flex-start', lignItems: "center", justifyContent: "center"}}>{this.state.fontLoaded?<Text style={{ fontFamily:'kaki', fontSize:25,  alignSelf: 'flex-start', padding:5}}>SHAIDRAI: 30</Text>:null}</View>
</View>



    <View style={{flexDirection: "column", flex:2, alignItems: "center", justifyContent: "center" }}>
{this.state.timer?<LottieView source={require('./8803-simple-countdown.json')} autoPlay width={300} style={{position:"relative"}} />:null}
          </View>

           <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'flex-end'}}>
          <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center", borderWidth: 20,
    borderTopColor: '#212529', borderBottomWidth:0, borderTopWidth:30,  borderTopEndRadius:10, borderTopLeftRadius:10}}>

            <View 
            onTouchStart={() => this.stroke("C")}
            onTouchEnd={() => this.stop("C")}
              style={{ backgroundColor: this.state.colorC, height: 200, width: 32, borderLeftWidth: 1, borderTopWidth: 3,}} >
            </View >
            <View
              onTouchStart={() => this.stroke("Cs")}
              onTouchEnd={() => this.stop("Cs")}
              style={{ backgroundColor: this.state.colorCs, height: 200, width: 32, borderTopWidth: 3, borderLeftWidth: 1,}} >
            </View >
            <View
            onTouchStart={() => this.stroke("D")}
            onTouchEnd={() => this.stop("D")}
              style={{ backgroundColor: this.state.colorD, height: 200, width: 16, borderTopWidth: 3, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Ds")}
              onTouchEnd={() => this.stop("Ds")}
              style={{ backgroundColor: this.state.colorDs, height: 200, width: 32, borderTopWidth: 3, borderLeftWidth: 1, }} >
            </View >
            <View
            onTouchStart={() => this.stroke("E")}
            onTouchEnd={() => this.stop("E")}
              style={{ backgroundColor: this.state.colorE, height: 200, width: 32, borderTopWidth: 3, }} >
            </View >
            <View
            onTouchStart={() => this.stroke("F")}
            onTouchEnd={() => this.stop("F")}
              style={{ backgroundColor: this.state.colorF, height: 200, width: 32, borderTopWidth: 3, borderLeftWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Fs")}
              onTouchEnd={() => this.stop("Fs")}
              style={{ backgroundColor: this.state.colorFs, height: 200, width: 32, borderTopWidth: 3, }} >
            </View >
            <View
            onTouchStart={() => this.stroke("G")}
            onTouchEnd={() => this.stop("G")}
              style={{ backgroundColor: this.state.colorG, height: 200, width: 16, borderTopWidth: 3, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Gs")}
              onTouchEnd={() => this.stop("Gs")}
              style={{ backgroundColor: this.state.colorGs, height: 200, width: 32, borderTopWidth: 3, }} >
            </View >
            <View
            onTouchStart={() => this.stroke("A")}
            onTouchEnd={() => this.stop("A")}
              style={{ backgroundColor: this.state.colorA, height: 200, width: 16, borderTopWidth: 3, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("As")}
              onTouchEnd={() => this.stop("As")}
              style={{ backgroundColor: this.state.colorAs, height: 200, width: 32, borderTopWidth: 3, }} >
            </View >
            <View
            onTouchStart={() => this.stroke("B")}
            onTouchEnd={() => this.stop("B")}
              style={{ backgroundColor: this.state.colorB, height: 200, width: 32, borderRightWidth: 1, borderTopWidth: 3, }} >
            </View >

          </View>

          <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center", borderWidth: 20,
    borderColor: 'black', borderTopWidth:0, borderBottomEndRadius:10, borderBottomLeftRadius:10, }}>

            <View
              onTouchStart={() => this.stroke("C")}
              onTouchEnd={() => this.stop("C")}
              style={{ backgroundColor: this.state.colorC, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("D")}
              onTouchEnd={() => this.stop("D")}
              style={{ backgroundColor: this.state.colorD, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("E")}
              onTouchEnd={() => this.stop("E")}
              style={{ backgroundColor: this.state.colorE, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("F")}
              onTouchEnd={() => this.stop("F")}
              style={{ backgroundColor: this.state.colorF, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("G")}
              onTouchEnd={() => this.stop("G")}
              style={{ backgroundColor: this.state.colorG, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("A")}
              onTouchEnd={() => this.stop("A")}
              style={{ backgroundColor: this.state.colorA, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("B")}
              onTouchEnd={() => this.stop("B")}
              style={{ backgroundColor: this.state.colorB, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
            </View >

          </View>
        </View>
        </LinearGradient>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#94d0ff',
    flexDirection: "row",
    
  },
});
