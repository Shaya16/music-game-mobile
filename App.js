import React from 'react';
import Piano from './piano';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import io from 'socket.io-client'

const socket = io("http://10.0.3.146:5000/")

setTimeout(()=>{
  socket.emit("join", "shaidrai187")
}, 3000)


export default function App() {
  
  
  return (
    
    
    <Piano/>
    

  );
}

