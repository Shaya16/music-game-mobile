import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, TextInput, Animated, Text, AsyncStorage } from 'react-native';
import Piano from './piano'
import {play} from './piano'
import * as Font from 'expo-font';
import Fade from "react-native-fade";
import LottieView from 'lottie-react-native';
import io from "socket.io-client"

const socket = io("http://10.0.3.146:5000/")

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        // backgroundColor
        this.state = {

            timer: false,
            fontLoaded: true,
            lockKeboard: true,
            roundWinnerName: "SHAIDRAI",
            showRoundWinner: false,
            note: 5
        }
        this.onClickNote = this.onClickNote.bind(this);
        // preload sounds

    }

    // Font loading
    async componentDidMount() {
        
        // Sockets Events handling
        
        try{
        socket.emit("join",  "shaidraiking" )

        socket.on("start", (note)=>{
            this.newRound(note)
        })
        
        socket.on("roundwinner", (winner)=>{
            this.roundWinner(winner.winner)
        })

        socket.on("roundstart", (note)=>{
            this.newRound(note)
        })
    }
    catch{
        // Internet Error
    }

        setTimeout(() => {
            this.roundWinner("shai")
        }, 2000);
    }

    onClickNote(answer) {
        if (answer) this.props.socket.emit('answer', "correct")
        else this.props.socket.emit('answer', "wrong")
        
        this.setState({ lockKeboard: true })
    }

    roundWinner(name){
        this.setState({roundWinnerName: name, showRoundWinner: true})
        
    }

    newRound(note){
        this.setState({ showRoundWinner: false, timer: true , note:note})
        setTimeout(() => {
            this.setState({ lockKeboard: false, timer: false })
            play(note)
        }, 3000)
    }

    

    render() {
        return (

            <LinearGradient colors={['#192f6a', '#268cdc', '#94d0ff']} style={{ width: "100%", height: "100%", backgroundColor: "#94d0ff" }}>
                <View style={{ flexDirection: "row", }}>
                    <View style={{ borderColor: "white", borderWidth: 5, top: 70, borderRadius: 150, backgroundColor: "rgb(255, 144, 236)", alignSelf: 'flex-start', alignItems: "center", justifyContent: "center" }}>{this.state.fontLoaded ? <Text style={{ fontFamily: 'kaki', fontSize: 25, alignSelf: 'flex-start', padding: 5 }}>{this.props.navigation.state.params.name}: 30</Text> : null}</View>
                    <View style={{ borderColor: "white", borderWidth: 5, marginLeft: "auto", top: 70, borderRadius: 150, backgroundColor: "rgb(154, 255, 153)", alignSelf: 'flex-start', lignItems: "center", justifyContent: "center" }}>{this.state.fontLoaded ? <Text style={{ fontFamily: 'kaki', fontSize: 25, alignSelf: 'flex-start', padding: 5 }}>SHAIDRAI: 30</Text> : null}</View>
                </View>
                <View style={{ flexDirection: "column", flex: 2, alignItems: "center", justifyContent: "center" }}>
                    {this.state.timer ? <LottieView source={require('./8803-simple-countdown.json')} autoPlay width={300} style={{ position: "relative" }} /> : null}
                    
                    { this.state.showRoundWinner? <Fade visible={true} style={{zIndex:2, width:"100%"}} direction="down"><View style={{ borderRadius: 30, borderColor: "white", borderWidth: 5, width: "100%", alignSelf: 'flex-start', zIndex: 3, backgroundColor: "#f6ff64" }}>
                        <Text style={{ paddingTop: 10, fontFamily: 'kaki', fontSize: 25, textAlign: "center" }}>THE WINNER OF THE ROUND IS</Text>
                        <Text style={{ paddingBottom: 10,fontFamily: 'kaki', fontSize: 60, textAlign: "center" }}>{this.state.roundWinnerName}</Text></View></Fade> 
                        : null}
                    
                        
                </View>
                
                <Piano onClickNote={this.onClickNote} note={this.state.note} />
                {this.state.lockKeboard ? <View style={{ position: "absolute", height: 350, width: "100%", bottom: 0, opacity: 0.5 }}></View> : null}
            </LinearGradient>

        )
    }
}

