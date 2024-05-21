import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';


class Salvar extends React.Component{
  constructor(props){
    super(props);
    this.palavra_chave = "";
    this.lastTap = 0;
    this.doubleTapDelay = 300; 
    this.state = {
      palavra_input: ""
    }
  }

  salvar(){
    firebase.database().ref('/caracteristicas').push({
      palavra_chave: this.palavra_chave,
    });
    alert("Item Salvo");
    
  }

  handleTap = () => {
    const now = Date.now();
    if (now - this.lastTap < this.doubleTapDelay) {
      this.salvar();
      // this.setState({palavra_input: ""});
    }
    this.lastTap = now;
  }
  digitar(texto){
    console.log(texto);
    this.setState({palavra_input:texto});
    console.log(this.palavra_chave);
  }

  render(){
    return(
      <View>
        <Text style = {estilos.txtBotao}>{"Características:"}</Text>
        <TextInput
          style ={estilos.input}
          onChangeText={(texto)=>{this.digitar(texto)}}
          value = {this.state.palavra_input}
          
        ></TextInput>
      
        <TouchableOpacity
          style={estilos.botao}
          onPress={this.handleTap} 
        >
          <Text style = {estilos.txtBotao}>Mandar</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

const estilos = StyleSheet.create({
  txtBotao: {
    color: "black",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#b58df1',
    margin: 10,
    borderRadius: 8,
    padding: 5,
  },
  input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8
  }
});
  
export default Salvar;
