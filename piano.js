import React from 'react';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Audio } from 'expo-av';
import { StyleSheet, View, TextInput, Animated } from 'react-native';
import Fade from "react-native-fade";

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

const play =  (note)=>{

try {
  sounds[note].stopAsync()
  sounds[note].playAsync();
  
  
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
      show: true
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
        this.setState({ colorC: "rgba(1, 1, 1, 0.1)"})
        break;
      case "Cs":
        this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "D":
        this.setState({ colorD: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Ds":
        this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "E":
        this.setState({ colorE: "rgba(1, 1, 1, 0.1)" })
        break;
      case "F":
        this.setState({ colorF: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Fs":
        this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "G":
        this.setState({ colorG: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Gs":
        this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "A":
        this.setState({ colorA: "rgba(1, 1, 1, 0.1)" })
        break;
      case "As":
        this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "B":
        this.setState({ colorB: "rgba(1, 1, 1, 0.1)" })
        break;
    }

    // play sound
    
  }
  stop( note ) {

    // change backgroundColor
    switch ( note ) {
      case "C":
        play(0)
         if (0 === this.props.note) this.setState( { colorC: "rgb(154, 255, 153)" })
         else this.setState( { colorC: "#ff6464" })
         this.props.onClickNote(0 === this.props.note)
         setTimeout(()=>{ this.setState( { colorC: "white" } )},3000)
        
        break;
      case "Cs":
        play(1)
        if (1 === this.props.note) this.setState( { colorCs: "rgb(154, 255, 153)" })
         else this.setState( { colorCs: "#ff6464" })
         this.props.onClickNote(1 === this.props.note)
         setTimeout(()=>{ this.setState( { colorCs: "black" } )},3000)
        break;
      case "D":
        play(2)
        if (2 === this.props.note) this.setState( { colorD: "rgb(154, 255, 153)" })
         else this.setState( { colorD: "#ff6464" })
         this.props.onClickNote(2 === this.props.note)
         setTimeout(()=>{ this.setState( { colorD: "white" } )},3000)
        break;
      case "Ds":
        play(3)
        if (3 === this.props.note) this.setState( { colorDs: "rgb(154, 255, 153)" })
         else this.setState( { colorDs: "#ff6464" })
         this.props.onClickNote(3 === this.props.note)
         setTimeout(()=>{ this.setState( { colorDs: "black" } )},3000)
        break;
      case "E":
        play(4)
        if (4 === this.props.note) this.setState( { colorE: "rgb(154, 255, 153)" })
         else this.setState( { colorE: "#ff6464" })
         this.props.onClickNote(4 === this.props.note)
         setTimeout(()=>{ this.setState( { colorE: "white" } )},3000)
        break;
      case "F":
        play(5)
        if (5 === this.props.note) this.setState( { colorF: "rgb(154, 255, 153)" })
         else this.setState( { colorF: "#ff6464" })
         this.props.onClickNote(5 === this.props.note)
         setTimeout(()=>{ this.setState( { colorF: "white" } )},3000)
        break;
      case "Fs":
        play(6)
        if (6 === this.props.note) this.setState( { colorFs: "rgb(154, 255, 153)" })
         else this.setState( { colorFs: "#ff6464" })
         this.props.onClickNote(6 === this.props.note)
         setTimeout(()=>{ this.setState( { colorFs: "black" } )},3000)
        break;
      case "G":
        play(7)
        if (7 === this.props.note) this.setState( { colorG: "rgb(154, 255, 153)" })
         else this.setState( { colorG: "#ff6464" })
         this.props.onClickNote(7 === this.props.note)
         setTimeout(()=>{ this.setState( { colorG: "white" } )},3000)
        break;
      case "Gs":
        play(8)
        if (8 === this.props.note) this.setState( { colorGs: "rgb(154, 255, 153)" })
         else this.setState( { colorGs: "#ff6464" })
         this.props.onClickNote(8 === this.props.note)
         setTimeout(()=>{ this.setState( { colorGs: "black" } )},3000)
        break;
      case "A":
        play(9)
        if (9 === this.props.note) this.setState( { colorA: "rgb(154, 255, 153)" })
         else this.setState( { colorA: "#ff6464" })
         this.props.onClickNote(9 === this.props.note)
         setTimeout(()=>{ this.setState( { colorA: "white" } )},3000)
        break;
      case "As":
        play(10)
        if (10 === this.props.note) this.setState( { colorAs: "rgb(154, 255, 153)" })
         else this.setState( { colorAs: "#ff6464" })
         this.props.onClickNote(10 === this.props.note)
         setTimeout(()=>{ this.setState( { colorAs: "black" } )},3000)
        break;
      case "B":
        play(11)
        if (11 === this.props.note) this.setState( { colorB: "rgb(154, 255, 153)" })
         else this.setState( { colorB: "#ff6464" })
         this.props.onClickNote(11 === this.props.note)
         setTimeout(()=>{ this.setState( { colorB: "white" } )},3000)
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
             style={{ backgroundColor: this.state.colorCs, height: 200, width: 32, borderTopWidth: 3,}} >
           </View >
           <View
           onTouchStart={() => this.stroke("D")}
           onTouchEnd={() => this.stop("D")}
             style={{ backgroundColor: this.state.colorD, height: 200, width: 16, borderTopWidth: 3, }} >
           </View >
           <View
             onTouchStart={() => this.stroke("Ds")}
             onTouchEnd={() => this.stop("Ds")}
             style={{ backgroundColor: this.state.colorDs, height: 200, width: 32, borderTopWidth: 3,  }} >
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

export {play}
