import React from 'react';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { Audio } from 'expo-av';
import { StyleSheet, View, TextInput, Animated, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Fade from "react-native-fade";
import { Button } from 'native-base';

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
  sounds[note].stopAsync().then(()=>{sounds[note].playAsync();})
  
  
  
  // Your sound is playing!
} catch (error) {
  console.log("shai error")
  console.log(error)
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
      show: true, 
      notesColors: ["white",
      "black",
      "white",
      "black",
      "white",
      "white",
      "black",
      "white",
      "black",
      "white",
      "black",
      "white",]
      , savedColor: "",
      blockKeyboard: false
    }

    // preload sounds
    
  }

 
highlightColor(note, color){

  const colors = this.state.notesColors
  const savedColor = colors[note]
  colors[note] = color
  this.setState({notesColors: colors})

  setTimeout(()=>{
    colors[note] = savedColor
    this.setState({notesColors: colors})
  }, 3200)

}

highlightClickedColor(note, color){

  const colors = this.state.notesColors
  
  colors[note] = color
  this.setState({notesColors: colors})

  setTimeout(()=>{
    colors[note] = this.state.savedColor
    this.setState({notesColors: colors})
  }, 3200)

}

  async componentDidMount(){

    await Font.loadAsync({'kaki': require('./assets/fonts/CarterOne-Regular.ttf')})
    this.setState({ fontLoaded: true});
    
    

  }
 
 ShowRightNote(note){

 }
  


  stroke ( note ) {
    if (!this.state.blockKeyboard){
    this.setState({ savedColor: this.state.notesColors[note] })
    const newList = this.state.notesColors
    newList[note] = "rgba(1, 1, 1, 0.1)"
    this.setState( { notesColors: newList })
    }
    
  }
  stop( note ) {
    
    if (!this.state.blockKeyboard){
      this.setState({blockKeyboard: true})
      setTimeout(()=>{
        this.setState({blockKeyboard: false})
      }, 500)
    play(note)
    this.props.onClickNote(note === this.props.note)
    if (note === this.props.note){
      this.highlightClickedColor(note, "rgb(154, 255, 153)")
    }
    else {

      this.highlightClickedColor(note, "#ff6464")
      if (this.props.showRightAnswer)
      this.highlightColor(this.props.note,"rgb(154, 255, 153)")
    }

    }
  }
  
  render () {
    return (
      



<View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'flex-end'}}>
         
         <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center", borderWidth: 20,
         borderTopColor: '#212529', borderBottomWidth:0, borderTopWidth:30,  borderTopEndRadius:10, borderTopLeftRadius:10}}>
         
           <View onTouchStart={() => this.stroke(0)}
             onTouchEnd={() => this.stop(0)}
             style={{ backgroundColor: this.state.notesColors[0], height: 200, width: 32, borderLeftWidth: 1, borderTopWidth: 3,}} >
          
           </View>
           
           <View
             onTouchStart={() => this.stroke(1)}
             onTouchEnd={() => this.stop(1)}
             style={{ backgroundColor: this.state.notesColors[1], height: 200, width: 32, borderTopWidth: 3}} >
           </View>
           <View
           onTouchStart={() => this.stroke(2)}
           onTouchEnd={() => this.stop(2)}
             style={{ backgroundColor: this.state.notesColors[2], height: 200, width: 16, borderTopWidth: 3, }} >
           </View >
           <View
             onTouchStart={() => this.stroke(3)}
             onTouchEnd={() => this.stop(3)}
             style={{ backgroundColor: this.state.notesColors[3], height: 200, width: 32, borderTopWidth: 3,  }} >
           </View>
           <View
           onTouchStart={() => this.stroke(4)}
           onTouchEnd={() => this.stop(4)}
             style={{ backgroundColor: this.state.notesColors[4], height: 200, width: 32, borderTopWidth: 3, }} >
           </View >
           <View
           onTouchStart={() => this.stroke(5)}
           onTouchEnd={() => this.stop(5)}
             style={{ backgroundColor: this.state.notesColors[5], height: 200, width: 32, borderTopWidth: 3, borderLeftWidth: 1, }} >
           </View >
           <View
             onTouchStart={() => this.stroke(6)}
             onTouchEnd={() => this.stop(6)}
             style={{ backgroundColor: this.state.notesColors[6], height: 200, width: 32, borderTopWidth: 3, }} >
           </View >
           <View
           onTouchStart={() => this.stroke(7)}
           onTouchEnd={() => this.stop(7)}
             style={{ backgroundColor: this.state.notesColors[7], height: 200, width: 16, borderTopWidth: 3, }} >
           </View >
           <View
             onTouchStart={() => this.stroke(8)}
             onTouchEnd={() => this.stop(8)}
             style={{ backgroundColor: this.state.notesColors[8], height: 200, width: 32, borderTopWidth: 3, }} >
           </View >
           <View
           onTouchStart={() => this.stroke(9)}
           onTouchEnd={() => this.stop(9)}
             style={{ backgroundColor: this.state.notesColors[9], height: 200, width: 16, borderTopWidth: 3, }} >
           </View >
           <View
             onTouchStart={() => this.stroke(10)}
             onTouchEnd={() => this.stop(10)}
             style={{ backgroundColor: this.state.notesColors[10], height: 200, width: 32, borderTopWidth: 3, }} >
           </View >
           <View
           onTouchStart={() => this.stroke(11)}
           onTouchEnd={() => this.stop(11)}
             style={{ backgroundColor: this.state.notesColors[11], height: 200, width: 32, borderRightWidth: 1, borderTopWidth: 3, }} >
           </View >
         
         </View>
         
         <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center", borderWidth: 20,
         borderColor: 'black', borderTopWidth:0, borderBottomEndRadius:10, borderBottomLeftRadius:10, }}>
         
           <View
             onTouchStart={() => this.stroke(0)}
             onTouchEnd={() => this.stop(0)}
             style={{ backgroundColor: this.state.notesColors[0], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(2)}
             onTouchEnd={() => this.stop(2)}
             style={{ backgroundColor: this.state.notesColors[2], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(4)}
             onTouchEnd={() => this.stop(4)}
             style={{ backgroundColor: this.state.notesColors[4], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(5)}
             onTouchEnd={() => this.stop(5)}
             style={{ backgroundColor: this.state.notesColors[5], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(7)}
             onTouchEnd={() => this.stop(7)}
             style={{ backgroundColor: this.state.notesColors[7], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(9)}
             onTouchEnd={() => this.stop(9)}
             style={{ backgroundColor: this.state.notesColors[9], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
           </View >
           <View
             onTouchStart={() => this.stroke(11)}
             onTouchEnd={() => this.stop(11)}
             style={{ backgroundColor: this.state.notesColors[11], height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
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
