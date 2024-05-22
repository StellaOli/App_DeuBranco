import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from '../config/config'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Navegacao = createStackNavigator();


class Cad extends React.Component {
    constructor(props){
    super(props);
    this.usuario = ""
    this.senha = ""
    this.state = {
      users: []
    }
  }

   salvar(){
    firebase.database().ref('/users').push({
    usuario: this.usuario,
    senha: this.senha,
    
    })
      alert("Cadastro Feito")
  }
  render(){
    return(
      <View style = {estilos.fundo}> 
        <TextInput style={estilos.input} 
          placeholder="Usuário"
          onChangeText={(texto)=>{this.usuario = texto}}
        />
        <TextInput style={estilos.input} 
          placeholder="Senha"
          onChangeText={(texto)=>{this.senha = texto}}
        />
        <TouchableHighlight style={estilos.botao} onPress={()=>this.salvar()}>
          <Text style={estilos.txtBotao} >{"Cadastrar"}</Text>
        </TouchableHighlight>
        
        {this.state.users.length > 0 ? 
          this.state.users.map( objeto => (
            <Text>{objeto.usuario} {objeto.senha}</Text>)) : 
            null}
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
  
});

export default Cad;