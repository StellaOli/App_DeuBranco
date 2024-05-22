import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../config/config'

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
      palavra_chave: this.state.palavra_input,
    });
    alert("Item Salvo");
    
  }

  handleTap = () => {
    const now = Date.now();
    if (now - this.lastTap < this.doubleTapDelay) {
      this.salvar();
      this.setState({palavra_input: ""});
    }
    this.lastTap = now;
  }
  digitar(texto){
    this.setState({palavra_input:texto});
    console.log(this.palavra_chave);
  }

  render(){
    return(
      <View style = {estilos.fundo}>
        <Text style = {estilos.txtBotao}>{"Palavra chave:"}</Text>
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
          <Text style = {estilos.espaco}>Obs: Double tap para enviar a palavra</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

const estilos = StyleSheet.create({
  fundo:{

      backgroundColor: '#00CED1',
      flex: 10,
  },
  txtBotao: {
    color: "white",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    marginTop: '400px',
    marginBottom: '10px',
    height: 15,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#FF8C00',
    margin: 10,
    borderRadius: 8,
    padding: 1,
    flex:0.1,
  },
  input: {
    height: 15,
    padding: 5,
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    borderRadius: 8,
    flex: 0.1,
  },
  
  espaco:{
    marginTop: '10px',
    alignSelf: "center",
    color: "white",
    
  }
});
  
export default Salvar;
