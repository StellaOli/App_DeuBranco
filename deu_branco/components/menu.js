import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from '../config/config'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Navegacao = createStackNavigator();

class Menu extends React.Component {
  render(){
    return(
      <View> 
       
        <TouchableHighlight style={estilos.botao} onPress={()=>this.goToLogin()}>
          <Text style={estilos.txtBotao} >{"Logar"}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={estilos.botao} onPress={()=>this.goToCad()}>
          <Text style={estilos.txtBotao} >{"Cadastrar"}</Text>
        </TouchableHighlight>
        
        
      </View>
    )
    
  }

  goToCad(){
    this.props.navigation.navigate("Cad");

  }
  goToLogin(){
    this.props.navigation.navigate("Login");
  }
}


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
      <View> 
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
  txtBotao: {
    color: "black",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "cyan",
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

export default Menu;