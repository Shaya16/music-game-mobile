import React from 'react';
import { StyleSheet, View, TextInput, Animated } from 'react-native';
import Game from './game';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import io from 'socket.io-client'

const socket = io("http://10.0.3.146:5000/")






export default function App() {
  
  
  return (


    <Game socket={socket}/>
    
    

  );
}

