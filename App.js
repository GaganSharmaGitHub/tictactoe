import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Game from './components/game'

export default function App() {
return(
  <SafeAreaView>
  <View style={{
    alignItems:"center",
    flex:1,
    justifyContent:'center',}}>
  <Game>
  </Game>
  </View>
  </SafeAreaView>
  )
}
