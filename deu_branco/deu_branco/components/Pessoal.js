import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import firebase from '../config/config';

class Pessoal extends React.Component {

  render() {
    return (
      <View style={estilos.fundo}>
      <Image style={estilos.botao} source={require('../assets/construcao.png')} />
      <Text style = {estilos.txtBotao}> Em construção </Text>
        
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#00CED1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   txtBotao: {
    color: "white",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    resizeMode: 'cover',
    height: 500,
    width: 300,
  },
});

export default Pessoal;