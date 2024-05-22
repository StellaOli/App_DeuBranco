import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import firebase from '../config/config';

class Ideia extends React.Component {
  constructor(props) {
    super(props);
    this.lastTap = null;
    this.longPressDelay = 500

  }
  handleLongPress = () => {
    console.log("entrou");
   this.props.navigation.navigate("Pessoal");
    
  };
  handleTap = () => {
    const now = Date.now();
    if (this.lastTap && (now - this.lastTap) < this.longPressDelay) {
      return 0
    } else {
      
      this.lastTap = now;
    }
  }


  render() {
    return (
      <View style={estilos.fundo}>
      
          <TouchableOpacity style={estilos.botao}
          onPress={this.handleTap}
          onLongPress={this.handleLongPress}>
            <Text style={estilos.txtBotao}>Vasculhar minha mente</Text>
          </TouchableOpacity>
      
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
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  botao: {
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#FF8C00',
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
});

export default Ideia;
